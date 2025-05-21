import React, { useState, useEffect, useCallback } from 'react';
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

// Calculate card widths based on screen dimensions
const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 20; // Consistent padding for sections
const featuredCardWidth = screenWidth - horizontalPadding * 2;
const recentCardWidth = screenWidth * 0.48; // Increased from 0.4

// <<< Define RecentPromptDisplayCard component >>>
const RecentPromptDisplayCard = React.memo(({ item, onSelectPrompt }) => (
  <TouchableOpacity
    style={styles.recentCard}
    onPress={() => onSelectPrompt(item)}
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
));

// <<< Define PracticeHistoryDisplayCard component >>>
const PracticeHistoryDisplayCard = React.memo(({ item, onSelectPrompt }) => (
  <TouchableOpacity
    style={styles.recentCard} // Reuse recentCard style
    onPress={() => onSelectPrompt(item)}
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
));

function HomeScreen() {
  const navigation = useNavigation();
  const { username, currentStreak, isLoading: isUserLoading } = useUser();
  const [imagesReady, setImagesReady] = useState(false);
  const [practiceHistoryPrompts, setPracticeHistoryPrompts] = useState([]);
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [featuredPrompt, setFeaturedPrompt] = useState(null);

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

        // --- Load Practice History --- 
        const historyIdsJson = await AsyncStorage.getItem('@practiceHistoryIds');
        if (isMounted && historyIdsJson) {
          const historyIds = JSON.parse(historyIdsJson);
          if (Array.isArray(historyIds) && historyIds.length > 0) {
            const allPrompts = promptsData.flat();
            const historyDetails = historyIds
              .map(id => allPrompts.find(p => p.id === id))
              .filter(prompt => prompt != null); // Filter out nulls if a prompt was deleted
            setPracticeHistoryPrompts(historyDetails.slice(0, 10)); // Changed from 5 to 10
          }
        } else if (isMounted) {
            setPracticeHistoryPrompts([]);
        }

        // --- Load 5 Random Prompts for "Explore Prompts" ---
        if (isMounted && promptsData && promptsData.flat().length > 0) {
            const allPrompts = promptsData.flat();
            // Shuffle all prompts and take the first 15
            const shuffledPrompts = [...allPrompts].sort(() => 0.5 - Math.random());
            setRecentPrompts(shuffledPrompts.slice(0, 15)); // Changed from 5 to 15
        }

        // --- Select Featured Prompt ---
        if (isMounted && promptsData && promptsData.flat().length > 0) {
            const allPrompts = promptsData.flat();
            const randomIndex = Math.floor(Math.random() * allPrompts.length);
            setFeaturedPrompt(allPrompts[randomIndex]);
        }

      } catch (error) {
        console.error('Error loading home screen data:', error);
         if (isMounted) {
             setImagesReady(true); // Still allow UI to render
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

  const handleGoToProfile = () => navigation.navigate('ProfileTab', { screen: 'UserProfile' });

  // <<< Implement Select Recent/Featured Prompt Navigation >>>
  const handleSelectRecentPrompt = useCallback((prompt) => {
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
  }, [navigation]);
  
  // Featured prompt uses the same logic as selecting a recent one
  const handleSelectFeaturedPrompt = () => { 
      if (featuredPrompt) {
        handleSelectRecentPrompt(featuredPrompt);
      } else {
          Alert.alert("Error", "No featured prompt loaded.");
      }
  }; 

  // <<< Define renderHistoryItem at the top level of the component >>>
  const renderHistoryItem = useCallback(({ item }) => (
    <PracticeHistoryDisplayCard item={item} onSelectPrompt={handleSelectRecentPrompt} />
  ), [handleSelectRecentPrompt]);

  // --- Render Functions ---

  // <<< Component to render each recent prompt card >>>
  const renderRecentPromptCard = useCallback(({ item }) => (
    <RecentPromptDisplayCard item={item} onSelectPrompt={handleSelectRecentPrompt} />
  ), [handleSelectRecentPrompt]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
        <View>
          <Text style={styles.greetingText}>Hello, {username || 'Guest'}!</Text>
          <Text style={styles.subGreetingText}>Ready to practice?</Text>
        </View>
        <TouchableOpacity onPress={handleGoToProfile} style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={40} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.quickActionsHeaderContainer}>
        <TouchableOpacity
          style={[styles.quickActionButton, styles.primaryAction]}
          onPress={handleStartPractice}
        >
          <Ionicons name="mic" size={20} color="white" />
          <Text style={styles.quickActionHeaderText}>Start Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quickActionButton, styles.secondaryAction]}
          onPress={handleQuickPractice}
        >
          <Ionicons name="flash" size={20} color={colors.primary} />
          <Text style={[styles.quickActionHeaderText, { color: colors.primary }]}>Quick Practice</Text>
        </TouchableOpacity>
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

  // <<< Function to render the Practice History Section >>>
  const renderPracticeHistory = () => {
    if (!practiceHistoryPrompts || practiceHistoryPrompts.length === 0) {
      return null; // Don't render if there's no history
    }

    return (
      <View style={styles.practiceHistorySectionContainer}>
        <Text style={styles.practiceHistorySectionTitle}>Resume Last Practice</Text>
        <FlatList
          data={practiceHistoryPrompts}
          renderItem={renderHistoryItem} // <<< Use memoized render function
          keyExtractor={(item) => item.id + '-history'} // Ensure unique keys
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentList} // Reuse recentList style for padding
        />
      </View>
    );
  };

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
        {renderFeaturedPrompt()}
        {renderRecentPrompts()}
        {renderPracticeHistory()}
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
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
  },
  subGreetingText: {
    fontSize: 16,
    color: '#6C757D',
    marginTop: 2,
  },
  profileButton: {
    padding: 8,
  },
  featuredSectionContainer: {
    marginHorizontal: horizontalPadding,
    marginTop: 20, // Adjusted marginTop for spacing
    marginBottom: 25, // Adjusted marginBottom for spacing
  },
  featuredSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 12,
  },
  featuredCard: {
    height: 350,
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
  },
  recentCardTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
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
  quickActionsHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 8,
  },
  primaryAction: {
    backgroundColor: colors.primary,
  },
  secondaryAction: {
    backgroundColor: colors.backgroundLight,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  quickActionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  // Styles for Practice History Section
  practiceHistorySectionContainer: {
    marginTop: 25,
    paddingHorizontal: horizontalPadding,
    marginBottom: 20,
  },
  practiceHistorySectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary || '#212529',
    marginBottom: 16,
  },
});

export default HomeScreen; 