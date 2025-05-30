import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages, defaultImages } from './constants/imageUtils';
import { useUser } from './context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { promptsData } from './data/prompts';
import { LinearGradient } from 'expo-linear-gradient';

const appLogo = require('./assets/applogo.png');

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

function HomeScreen() {
  const navigation = useNavigation();
  const { username, currentStreak, isLoading: isUserLoading, points } = useUser();
  const [imagesReady, setImagesReady] = useState(false);
  const [practiceHistoryPrompts, setPracticeHistoryPrompts] = useState([]);
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [featuredPrompt, setFeaturedPrompt] = useState(null);

  // Animation for the logo
  const logoScale = useRef(new Animated.Value(1)).current;

  const handleLogoPressIn = () => {
    Animated.spring(logoScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handleLogoPressOut = () => {
    Animated.spring(logoScale, {
      toValue: 1,
      friction: 3, // Controls "bounciness"
      tension: 60, // Controls speed
      useNativeDriver: true,
    }).start();
  };

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
    
    const promptsInCategory = promptsData.flat().filter(p => p.category === prompt.category);
    if (!promptsInCategory || promptsInCategory.length === 0) {
        console.error('Could not find category prompts for selected prompt:', prompt.id, 'category:', prompt.category);
        Alert.alert("Error", "Could not find related prompts in this category.");
        return;
    }

    console.log(`Navigating to PrePractice screen for prompt: ${prompt.id} (${prompt.title}) in category: ${prompt.category}`);
    navigation.navigate('PracticeTab', {
        screen: 'PrePractice', // Navigate to PrePractice first
        params: {
            selectedPrompt: prompt, // Pass the whole prompt object
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
        <View style={styles.greetingAndStreakContainer}> 
          <Text style={styles.greetingText}>Hello, {username || 'Guest'}!</Text>
          {/* Gamification Row: Streak and Points */}
          <View style={styles.gamificationRow}>
            <View style={styles.streakContainer}>
              <Ionicons name="flame" size={20} color={colors.playfulYellow} /> 
              <Text style={styles.streakText}>{currentStreak || 0} Day Streak</Text>
            </View>
            <View style={styles.headerStatItem}>
              <Ionicons name="star-outline" size={20} color={colors.accentTeal} />
              <Text style={styles.headerStatText}>Points: {points}</Text>
            </View>
          </View>
          <Text style={styles.subGreetingText}>Ready to practice?</Text>
        </View>
        <TouchableOpacity 
          activeOpacity={0.9} // To make the press feel responsive
          onPressIn={handleLogoPressIn}
          onPressOut={handleLogoPressOut}
          // onPress={() => console.log("Logo pressed!")} // Optional: for other actions
        >
          <Animated.View style={{ transform: [{ scale: logoScale }] }}>
            <Image source={appLogo} style={styles.headerLogo} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      {/* Gamification/Stats Row - Can be expanded */}
      {/* 
      <View style={styles.statsRowContainer}>
        <View style={styles.statItem}>
          <Ionicons name="star-outline" size={20} color={colors.accentTeal} />
          <Text style={styles.statText}>Points: 0</Text> 
        </View>
        <View style={styles.statItem}>
          <Ionicons name="trophy-outline" size={20} color={colors.playfulPink} />
          <Text style={styles.statText}>Level: 1</Text> 
        </View>
      </View>
      */}
      <View style={styles.quickActionsHeaderContainer}>
        <TouchableOpacity
          style={[styles.quickActionButton, styles.primaryAction]}
          onPress={handleStartPractice}
        >
          <Ionicons name="mic" size={20} color={colors.textLight} />
          <Text style={[styles.quickActionHeaderText, {color: colors.textLight}]}>Start Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quickActionButton, styles.secondaryAction]}
          onPress={handleQuickPractice}
        >
          {/* <Ionicons name="flash" size={20} color={colors.accentTeal} /> */}
          <Text style={[styles.quickActionHeaderText, { color: colors.accentTeal }]}>Quick Practice</Text>
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
    backgroundColor: colors.backgroundLight,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 25,
    paddingBottom: 25,
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.shadowColor,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  gamificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  greetingAndStreakContainer: {
    flex: 1,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  headerStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  headerStatText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryDark,
    marginLeft: 6,
  },
  streakText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryDark,
    marginLeft: 6,
  },
  subGreetingText: {
    fontSize: 16,
    color: colors.textSubtle,
    marginTop: 8,
  },
  profileButton: {
    padding: 5,
  },
  featuredSectionContainer: {
    marginHorizontal: horizontalPadding,
    marginTop: 20,
    marginBottom: 25,
  },
  featuredSectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  featuredCard: {
    height: 350,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.cardBackground,
    elevation: 4,
    shadowColor: colors.shadowColor,
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
    color: colors.textLight,
    fontSize: 24,
    fontWeight: '700',
  },
  featuredDescription: {
    color: colors.textLight,
    fontSize: 16,
    opacity: 0.9,
  },
  recentSection: {
    paddingHorizontal: 20,
    backgroundColor: colors.cardBackground,
    paddingVertical: 16,
    marginBottom: 10,
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
    color: colors.textPrimary,
  },
  seeAllButton: {
    fontSize: 14,
    color: colors.accentTeal,
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
    backgroundColor: colors.cardBackground,
    elevation: 2,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
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
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '700',
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
    color: colors.textPrimary,
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
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 8,
  },
  primaryAction: {
    backgroundColor: colors.accentTeal,
  },
  secondaryAction: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1.5,
    borderColor: colors.accentTeal,
  },
  quickActionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
  },
  practiceHistorySectionContainer: {
    paddingHorizontal: horizontalPadding,
    marginBottom: 20,
    backgroundColor: colors.borderLight,
    paddingVertical: 16,
    borderRadius: 12,
  },
  practiceHistorySectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  headerLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen; 