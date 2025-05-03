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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages, defaultImages } from './constants/imageUtils';
import { useUser } from './context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { promptsData } from './data/prompts';

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
const recentCardWidth = screenWidth * 0.4; // Smaller width for recent cards

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

        // --- Load Recent Prompts ---
        const recentJson = await AsyncStorage.getItem('@recentPromptIds');
        if (isMounted && recentJson) {
          const recentIds = JSON.parse(recentJson);
          const fullRecentPrompts = recentIds.map(id => promptsData.flat().find(p => p.id === id)).filter(Boolean);
          setRecentPrompts(fullRecentPrompts);
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

  const handleGoToProfile = () => navigation.navigate('UserProfile');

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

  // --- Loading State ---
  if (!imagesReady || isUserLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading...</Text></View>
      </SafeAreaView>
    );
  }

  // --- Formatted Values ---
  const formattedLastPracticed = formatTimestamp(lastPracticedTimestamp);
  const formattedTotalTime = formatSeconds(totalPracticeTime);

  return (
    <SafeAreaView style={styles.safeArea}>
       {/* Profile/Settings Button - Top Left */}
      <TouchableOpacity onPress={handleGoToProfile} style={styles.profileButton}>
        <Ionicons name="settings-outline" size={28} color={colors.textPrimary} />
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Header */}
        <Text style={styles.welcomeHeader}>Welcome, {username || 'User'}!</Text>

        {/* CTA Buttons */}
        <View style={styles.ctaButtonContainer}>
          <TouchableOpacity style={[styles.ctaButton, styles.primaryButton]} onPress={handleStartPractice}>
            <Text style={[styles.ctaButtonText, styles.primaryButtonText]}>Start Practice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ctaButton, styles.secondaryButton]} onPress={handleQuickPractice}>
            <Ionicons name="pulse-outline" size={20} color={colors.primary} style={styles.secondaryButtonIcon} />
            <Text style={[styles.ctaButtonText, styles.secondaryButtonText]}>Quick Warm-Up</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
            <View style={styles.statItem}>
                <Ionicons name="flame-outline" size={26} color={colors.textSecondary} style={styles.statIcon} />
                <Text style={styles.statValue}>{currentStreak}</Text>
                <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statItem}>
                <Ionicons name="time-outline" size={26} color={colors.textSecondary} style={styles.statIcon} />
                <Text style={styles.statValue}>{formattedTotalTime}</Text>
                <Text style={styles.statLabel}>Total Time</Text>
            </View>
            <View style={styles.statItem}>
                <Ionicons name="calendar-outline" size={26} color={colors.textSecondary} style={styles.statIcon} />
                {/* Adjusted layout for last practiced */}
                <Text style={[styles.statValue, styles.statValueSmall]}>{formattedLastPracticed.split(' at ')[0]}</Text>
                {formattedLastPracticed !== 'Never' && <Text style={styles.statLabelSmall}>{formattedLastPracticed.split(' at ')[1]}</Text>}
                <Text style={styles.statLabel}>Last Practiced</Text>
            </View>
        </View>

        {/* Featured Prompt Section */}
        {featuredPrompt && (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Featured Practice</Text>
                <TouchableOpacity
                  style={styles.featuredCard}
                  onPress={handleSelectFeaturedPrompt}
                  activeOpacity={0.8}
                >
                  <ImageBackground
                      source={featuredPrompt.image || defaultImages.promptBackground}
                      style={styles.featuredCardBackground}
                      imageStyle={styles.featuredCardImageStyle}
                      resizeMode="cover"
                  >
                    <View style={styles.featuredCardOverlay} />
                     <View style={styles.featuredTextContainer}>
                        <Text style={styles.featuredCardTitle} numberOfLines={2}>{featuredPrompt.title}</Text>
                        <Text style={styles.featuredCardCategory} numberOfLines={1}>{featuredPrompt.category}</Text>
                     </View>
                  </ImageBackground>
                </TouchableOpacity>
            </View>
        )}

        {/* Recently Practiced Section */}
        {recentPrompts.length > 0 && (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Recently Practiced</Text>
                <FlatList
                    data={recentPrompts}
                    renderItem={renderRecentPromptCard}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.recentListContainer}
                />
            </View>
        )}

        {/* --- Category Section Removed --- */}
        {/* --- Tip Section Styles Removed --- */}
        {/* --- Resume Section Styles Removed (Can be added back if needed) --- */}

      </ScrollView>
    </SafeAreaView>
  );
}

// --- Stylesheet (Refactored) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight, // Use a light background
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: horizontalPadding,
    paddingTop: 80, // Increased padding for header/settings button space
    paddingBottom: 40, // Padding at the bottom
  },
  profileButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 55 : 45, // Adjust for status bar
    left: horizontalPadding,
    zIndex: 10,
    padding: 5, // Make tappable area larger
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
  welcomeHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 25,
    textAlign: 'center', // Center the welcome text
  },
  ctaButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space buttons apart
    marginBottom: 35,
    width: '100%', // Ensure container spans width for spacing
  },
  ctaButton: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1, // Make buttons share space
    marginHorizontal: 5, // Add slight gap between buttons
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  primaryButton: {
      backgroundColor: colors.primary, // Blue color from screenshot
  },
  secondaryButton: {
      backgroundColor: colors.white, // White background
      borderWidth: 1.5,
      borderColor: colors.borderLight, // Light border
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600', // Semi-bold
  },
  primaryButtonText: {
    color: colors.white,
  },
  secondaryButtonText: {
    color: colors.primary, // Blue text
  },
  secondaryButtonIcon: {
    marginRight: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    width: '100%',
    paddingVertical: 15, // Add padding inside stats area
    backgroundColor: colors.white, // White background for stats box effect
    borderRadius: 12,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1, // Distribute space evenly
  },
  statIcon: {
    marginBottom: 8,
    color: colors.textSecondary, // Muted icon color
  },
  statValue: {
    fontSize: 22, // Larger value text
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  statValueSmall: { // For multi-line stats like 'Last Practiced'
      fontSize: 14,
      fontWeight: '600',
      color: colors.textPrimary,
      textAlign: 'center',
  },
  statLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statLabelSmall: { // Smaller label for time part of 'Last Practiced'
      fontSize: 11,
      color: colors.textSecondary,
  },
  // Removed statSeparator - using spacing instead

  sectionContainer: {
    marginBottom: 30, // Space between sections
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20, // Larger section titles
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
  },

  // --- Featured Styles (Refined) ---
  featuredCard: {
      width: featuredCardWidth,
      height: featuredCardWidth * 0.55, // Aspect ratio for featured card
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: colors.secondaryBackground, // Fallback color
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
  },
  featuredCardBackground: {
      flex: 1,
      justifyContent: 'flex-end',
  },
  featuredCardImageStyle: {
      borderRadius: 15,
  },
  featuredCardOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.35)', // Linear gradient would be nicer
      borderRadius: 15,
  },
   featuredTextContainer: { // Container for text over image
       padding: 15,
   },
  featuredCardTitle: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 3, // Space between title and category
  },
   featuredCardCategory: {
      color: colors.white,
      fontSize: 13,
      fontWeight: '500',
      opacity: 0.85,
  },

  // --- Recent Styles (Refined) ---
  recentListContainer: {
    paddingRight: horizontalPadding, // Ensure last item isn't cut off
    paddingLeft: 2, // Small padding for shadow
    paddingVertical: 5,
  },
  recentCard: {
    width: recentCardWidth,
    height: recentCardWidth * 1.25, // Taller aspect ratio for recent cards
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  recentCardBackground: {
      flex: 1,
      justifyContent: 'flex-end',
  },
  recentCardImageStyle: {
      borderRadius: 12,
  },
  recentCardOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: 12,
  },
  recentCardTitle: {
      color: colors.white,
      fontSize: 14,
      fontWeight: '600', // Semi-bold
      padding: 10, // Increased padding
  },

  // --- Category Grid Styles Removed ---
  // --- Tip Section Styles Removed ---
  // --- Resume Section Styles Removed (Can be added back if needed) ---

});

export default HomeScreen; 