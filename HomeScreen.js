import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages, defaultImages } from './constants/imageUtils';
import { useUser } from './context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { promptsData } from './data/prompts';
import { LinearGradient } from 'expo-linear-gradient';

// Helper function to format seconds
const formatSeconds = (totalSeconds) => {
    if (totalSeconds == null || isNaN(totalSeconds) || totalSeconds <= 0) { // Handle 0 seconds explicitly
        return '0s';
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    let formatted = '';
    if (hours > 0) {
        formatted += `${hours}h `;
    }
    if (minutes > 0 || hours > 0) {
        formatted += `${minutes}m `;
    }
    // Always show seconds if total time > 0 or if it's the only unit
     if (seconds > 0 || formatted === '') {
         formatted += `${seconds}s`;
     }
    return formatted.trim();
};

// Date Formatting Helper
const isSameDay = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};
const formatTimestamp = (timestamp) => {
  if (!timestamp) return 'Never';
  const date = new Date(timestamp);
  const now = new Date();
  if (isSameDay(date, now)) {
    return `Today at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameDay(date, yesterday)) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }
  return date.toLocaleDateString([], {
    year: 'numeric', month: 'short', day: 'numeric'
  });
};

// Calculate card widths based on screen dimensions
const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 20; // Consistent padding for sections
const featuredCardWidth = screenWidth - horizontalPadding * 2;
const recentCardWidth = screenWidth * 0.48; // Increased from 0.4

function HomeScreen() {
  const navigation = useNavigation();
  const { username, currentStreak, lastPracticedTimestamp, isLoading: isUserLoading } = useUser();
  const [imagesReady, setImagesReady] = useState(false);
  const [lastPromptId, setLastPromptId] = useState(null);
  const [lastPromptTitle, setLastPromptTitle] = useState('');
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [featuredPrompt, setFeaturedPrompt] = useState(null);
  const [totalPracticeTime, setTotalPracticeTime] = useState(0);

  useEffect(() => {
    console.log("--- HomeScreen Rendering --- Username:", username);
    let isMounted = true;

    const loadData = async () => {
      try {
        // Preload images (optional, could be moved elsewhere if startup is slow)
        // const imageArray = Object.values(categoryImageSources);
        // await preloadImages(imageArray);
        // if (isMounted) setImagesReady(true);
        // --- Temp: Set imagesReady immediately for faster testing ---
        if (isMounted) setImagesReady(true);


        // --- Load Last Prompt ---
        const storedId = await AsyncStorage.getItem('@lastPromptId');
        if (isMounted && storedId !== null) {
          setLastPromptId(storedId);
          const prompt = promptsData.flat().find(p => p.id === storedId);
          if (prompt) {
            setLastPromptTitle(prompt.title);
          } else {
             setLastPromptTitle('Last Practice');
             // Consider clearing invalid ID
             // await AsyncStorage.removeItem('@lastPromptId'); setLastPromptId(null);
          }
        }

        // --- Load 5 Random Prompts for "Explore Prompts" ---
        if (isMounted && promptsData && promptsData.flat().length > 0) {
            const allPrompts = promptsData.flat();
            // Shuffle all prompts and take the first 5
            const shuffledPrompts = [...allPrompts].sort(() => 0.5 - Math.random());
            setRecentPrompts(shuffledPrompts.slice(0, 5));
        }

        // --- Select Featured Prompt ---
        if (isMounted && promptsData && promptsData.flat().length > 0) {
            const allPrompts = promptsData.flat();
            const randomIndex = Math.floor(Math.random() * allPrompts.length);
            setFeaturedPrompt(allPrompts[randomIndex]);
        }

        // --- Load Total Practice Time ---
        const timeStr = await AsyncStorage.getItem('@totalPracticeTimeSeconds');
        if (isMounted && timeStr !== null) {
             const timeSec = parseInt(timeStr, 10);
             setTotalPracticeTime(isNaN(timeSec) ? 0 : timeSec);
        } else if (isMounted) {
            setTotalPracticeTime(0);
        }

      } catch (error) {
        console.error('Error loading home screen data:', error);
         if (isMounted) {
             setImagesReady(true); // Still allow UI to render
             setTotalPracticeTime(0); // Default time on error
         }
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, [username]); // Rerun on user change

  // --- Handlers ---
  const handleStartPractice = () => navigation.navigate('PracticeTab', { screen: 'CategorySelection' });

  // <<< Implement Quick Practice Navigation >>>
  const handleQuickPractice = () => {
    // Define the standard warm-up text
    const quickText =
      "Welcome to quick practice mode. This short exercise helps you warm up your voice and delivery skills. " +
      "Speak clearly and confidently, maintaining good pace and projection. " +
      "Public speaking is a skill that improves with consistent practice. " +
      "Focus on your breathing, posture, and articulation as you read these sentences.";
    
    // Navigate to WarmUp screen (assuming it exists and takes warmUpText param)
    // If WarmUpScreen doesn't exist, this navigation will fail.
    navigation.navigate('WarmUp', { 
      warmUpText: quickText
    });
  };

  // <<< Implement Resume Practice Navigation (if you want to add the button back later) >>>
  const handleResumePractice = () => {
    if (!lastPromptId) return;
    const prompt = promptsData.flat().find(p => p.id === lastPromptId);
    if (!prompt) {
      console.error('Could not find prompt data for ID:', lastPromptId);
      Alert.alert("Error", "Could not load the last practiced prompt. It might have been removed.");
      AsyncStorage.removeItem('@lastPromptId').then(() => {
        setLastPromptId(null);
        setLastPromptTitle('');
      });
      return;
    }
    const promptsInCategory = promptsData.flat().filter(p => p.category === prompt.category);
    if (!promptsInCategory || promptsInCategory.length === 0) {
        console.error('Could not find category prompts for prompt:', lastPromptId, 'category:', prompt.category);
        Alert.alert("Error", "Could not find the category for the last practiced prompt.");
        return;
    }
    navigation.navigate('PracticeTab', {
      screen: 'Teleprompter',
      params: {
        selectedPromptId: lastPromptId,
        categoryPrompts: promptsInCategory
      }
    });
  };

  const handleGoToProfile = () => navigation.navigate('ProfileTab', { screen: 'UserProfile' });

  // <<< Implement Select Recent/Featured Prompt Navigation >>>
  const handleSelectRecentPrompt = (prompt) => {
    if (!prompt || !prompt.id || !prompt.category) {
        console.error('Invalid prompt data for navigation:', prompt);
        Alert.alert("Error", "Could not load this prompt. Please try again.");
        return;
    }
    
    // Find all prompts in that category to pass to TeleprompterScreen
    const promptsInCategory = promptsData.flat().filter(p => p.category === prompt.category);
    if (!promptsInCategory || promptsInCategory.length === 0) {
        console.error('Could not find category prompts for selected prompt:', prompt.id, 'category:', prompt.category);
        // Attempt to find *any* prompts if category match fails, as a fallback?
        // For now, show an error.
        Alert.alert("Error", "Could not find related prompts in this category.");
        return;
    }

    console.log(`Navigating to prompt: ${prompt.id} (${prompt.title}) in category: ${prompt.category}`);
    navigation.navigate('PracticeTab', {
        screen: 'Teleprompter',
        params: {
            selectedPromptId: prompt.id,
            categoryPrompts: promptsInCategory
        }
    });
  };
  
  // Featured prompt uses the same logic as selecting a recent one
  const handleSelectFeaturedPrompt = () => { 
      if (featuredPrompt) {
        handleSelectRecentPrompt(featuredPrompt);
      } else {
          Alert.alert("Error", "No featured prompt loaded.");
      }
  }; 

  // --- Render Functions ---

  // <<< Component to render each recent prompt card >>>
  const renderRecentPromptCard = ({ item }) => (
    <TouchableOpacity
      style={styles.recentCard}
      onPress={() => handleSelectRecentPrompt(item)}
      activeOpacity={0.8}
    >
      <ImageBackground
          source={item.image || defaultImages.promptBackground}
          style={styles.recentCardBackground}
          imageStyle={styles.recentCardImageStyle}
          resizeMode="cover"
       >
        <View style={styles.recentCardOverlay} />
        <Text style={styles.recentCardTitle} numberOfLines={2}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.greeting}>Welcome back, {username || 'Speaker'}!</Text>
        {/* <TouchableOpacity onPress={handleGoToProfile} style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={30} color={colors.primary} />
        </TouchableOpacity> */}
      </View>
      <View style={styles.statsOuterContainer}>
        <View style={styles.statCard}>
          <Ionicons name="flame-outline" size={28} color={colors.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>{currentStreak || 0}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="barbell-outline" size={28} color={colors.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>{formatSeconds(totalPracticeTime)}</Text>
          <Text style={styles.statLabel}>Total Practice</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={28} color={colors.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>{formatTimestamp(lastPracticedTimestamp).split(' at ')[0]}</Text>
          <Text style={styles.statLabel}>Last Practice</Text>
          {lastPracticedTimestamp && formatTimestamp(lastPracticedTimestamp).includes('at') && (
            <Text style={styles.statSubLabel}>{formatTimestamp(lastPracticedTimestamp).split(' at ')[1]}</Text>
          )}
        </View>
      </View>
    </View>
  );

  const renderFeaturedPrompt = () => (
    <View style={styles.featuredSectionContainer}> 
      <Text style={styles.featuredSectionTitle}>Featured Practice</Text>
      <TouchableOpacity
        style={styles.featuredCard}
        onPress={handleSelectFeaturedPrompt}
        activeOpacity={0.9}
      >
        <ImageBackground
          source={featuredPrompt?.image || defaultImages.promptBackground}
          style={styles.featuredCardBackground}
          imageStyle={styles.featuredCardImageStyle}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.featuredGradient}
          >
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>{featuredPrompt?.title || 'Loading...'}</Text>
              <Text style={styles.featuredDescription} numberOfLines={2}>
                {featuredPrompt?.description || 'Select to start practicing'}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.quickActionsContainer}>
      <TouchableOpacity
        style={[styles.quickActionButton, styles.primaryAction]}
        onPress={handleStartPractice}
      >
        <Ionicons name="mic" size={24} color="white" />
        <Text style={styles.quickActionText}>Start Practice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.quickActionButton, styles.secondaryAction]}
        onPress={handleQuickPractice}
      >
        <Ionicons name="flash" size={24} color={colors.primary} />
        <Text style={[styles.quickActionText, { color: colors.primary }]}>Quick Practice</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRecentPrompts = () => (
    <View style={styles.recentSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore Prompts</Text>
        <TouchableOpacity onPress={handleStartPractice}>
          <Text style={styles.seeAllButton}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentPrompts}
        renderItem={renderRecentPromptCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recentList}
      />
    </View>
  );

  // --- Loading State ---
  if (!imagesReady || isUserLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading...</Text></View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderHeader()}
        {renderQuickActions()}
        {renderFeaturedPrompt()}
        {renderRecentPrompts()}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Stylesheet (Refactored) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
  },
  profileButton: {
    padding: 8,
  },
  statsOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    minHeight: 110,
    justifyContent: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 2,
    textAlign: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6C757D',
    textAlign: 'center',
  },
  statSubLabel: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    marginTop: 2,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  primaryAction: {
    backgroundColor: colors.primary,
  },
  secondaryAction: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  featuredSectionContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  featuredSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 12,
  },
  featuredCard: {
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredCardBackground: {
    width: '100%',
    height: '100%',
  },
  featuredCardImageStyle: {
    borderRadius: 16,
  },
  featuredGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  featuredContent: {
    gap: 8,
  },
  featuredTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  featuredDescription: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  recentSection: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
  },
  seeAllButton: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  recentList: {
    paddingRight: 20,
    paddingBottom: 10,
  },
  recentCard: {
    width: recentCardWidth,
    height: 190,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recentCardBackground: {
    width: '100%',
    height: '100%',
  },
  recentCardImageStyle: {
    borderRadius: 12,
  },
  recentCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay for text visibility
    borderRadius: 12,
  },
  recentCardTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white', // White text color
    fontSize: 14,
    fontWeight: '600',
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight, // Use a light background
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: colors.primaryDark,
  },
});

export default HomeScreen; 