import React, { useState, useEffect, useCallback, useRef } from "react";
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
  AppState,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages, defaultImages } from './constants/imageUtils';
import { useUser } from './context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { promptsData } from './data/prompts';
import { LinearGradient } from 'expo-linear-gradient';
import { checkActiveSubscription } from "./RevenueCatService";
import RevenueCatUI from "react-native-purchases-ui";

const appLogo = require('./assets/applogo.png');
const FAVORITES_KEY = '@favoritePromptIds'; // Key for AsyncStorage
const PROMPT_PLAY_COUNTS_KEY = '@promptPlayCounts'; // Key for play counts

// Calculate card widths based on screen dimensions
const screenWidth = Dimensions.get("window").width;
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
      <Text style={styles.recentCardTitle} numberOfLines={2}>
        {item.title}
      </Text>
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
      <Text style={styles.recentCardTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </ImageBackground>
  </TouchableOpacity>
));

function HomeScreen() {
  const navigation = useNavigation();
  const {
    username,
    currentStreak,
    isLoading: isUserLoading,
    points,
  } = useUser();
  const [imagesReady, setImagesReady] = useState(false);
  const [practiceHistoryPrompts, setPracticeHistoryPrompts] = useState([]);
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [featuredPrompt, setFeaturedPrompt] = useState(null);
  const [favoritePrompts, setFavoritePrompts] = useState([]);
  const [playCounts, setPlayCounts] = useState({});

  const logoScale = useRef(new Animated.Value(1)).current;

  // Ref to track component mount status
  const isMountedRef = useRef(true);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Moved and refactored loadData
  const loadData = useCallback(async (reason = "unknown") => {
    console.log(`--- HomeScreen: Loading Data (reason: ${reason}) ---`);
    try {
      if (isMountedRef.current) setImagesReady(true); // Or based on actual image readiness

      const playCountsJson = await AsyncStorage.getItem(PROMPT_PLAY_COUNTS_KEY);
      if (isMountedRef.current) {
        if (playCountsJson) {
          setPlayCounts(JSON.parse(playCountsJson));
          console.log("Loaded play counts.");
        } else {
          setPlayCounts({});
          console.log("No play counts found in AsyncStorage, initialized empty.");
        }
      }

      const historyIdsJson = await AsyncStorage.getItem('@practiceHistoryIds');
      if (isMountedRef.current) {
        if (historyIdsJson) {
          const historyIds = JSON.parse(historyIdsJson);
          if (Array.isArray(historyIds) && historyIds.length > 0) {
            const allPrompts = promptsData.flat();
            const historyDetails = historyIds
              .map(id => allPrompts.find(p => p.id === id))
              .filter(prompt => prompt != null);
            setPracticeHistoryPrompts(historyDetails.slice(0, 10));
          }
        } else {
          setPracticeHistoryPrompts([]);
        }
      }

      const favoritesIdsJson = await AsyncStorage.getItem(FAVORITES_KEY);
      if (isMountedRef.current) {
        if (favoritesIdsJson) {
          const favoriteIds = JSON.parse(favoritesIdsJson);
          if (Array.isArray(favoriteIds) && favoriteIds.length > 0) {
            const allPrompts = promptsData.flat();
            const favoriteDetails = favoriteIds
              .map(id => allPrompts.find(p => p.id === id))
              .filter(prompt => prompt != null);
            setFavoritePrompts(favoriteDetails);
            console.log("Loaded favorite prompts:", favoriteDetails.length);
          } else {
            setFavoritePrompts([]);
            console.log("No valid favorite IDs found or array empty.");
          }
        } else {
          setFavoritePrompts([]);
          console.log("No favorites data found in AsyncStorage.");
        }
      }

      if (isMountedRef.current && promptsData && promptsData.flat().length > 0) {
        const allPrompts = promptsData.flat();
        const shuffledPrompts = [...allPrompts].sort(() => 0.5 - Math.random());
        setRecentPrompts(shuffledPrompts.slice(0, 15));
      }

      if (isMountedRef.current && promptsData && promptsData.flat().length > 0) {
        const allPrompts = promptsData.flat();
        const randomIndex = Math.floor(Math.random() * allPrompts.length);
        setFeaturedPrompt(allPrompts[randomIndex]);
      }

    } catch (error) {
      console.error('Error loading home screen data:', error);
      if (isMountedRef.current) {
        setImagesReady(true); // Still allow UI to render
      }
    }
  }, [/* setImagesReady, setPlayCounts, etc. are stable, so effectively empty deps */]);


  // Initial data load on mount
  useEffect(() => {
    loadData("initial mount");
  }, [loadData]);

  // Listener for AppState changes (e.g., app coming to foreground)
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (
        isMountedRef.current &&
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground! Refreshing HomeScreen data.');
        await loadData("app resume");
      }
      if (isMountedRef.current) {
          appState.current = nextAppState;
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [loadData]);

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

  // --- Handlers ---
  const handleStartPractice = async () => {
    try {
      navigation.navigate("PracticeTab", { screen: "CategorySelection" });
    } catch (e) {
      console.log("error ", e);
      Alert.alert("Error", "Unable to check subscription status.");
    }
  };

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
    navigation.navigate("WarmUp", {
      warmUpText: quickText,
    });
  };

  const handleGoToProfile = () =>
    navigation.navigate("ProfileTab", { screen: "UserProfile" });

  // <<< Implement Select Recent/Featured Prompt Navigation >>>
  const handleSelectRecentPrompt = useCallback(
    (prompt) => {
      if (!prompt || !prompt.id || !prompt.category) {
        console.error("Invalid prompt data for navigation:", prompt);
        Alert.alert("Error", "Could not load this prompt. Please try again.");
        return;
      }

      const promptsInCategory = promptsData
        .flat()
        .filter((p) => p.category === prompt.category);
      if (!promptsInCategory || promptsInCategory.length === 0) {
        console.error(
          "Could not find category prompts for selected prompt:",
          prompt.id,
          "category:",
          prompt.category
        );
        Alert.alert(
          "Error",
          "Could not find related prompts in this category."
        );
        return;
      }

      console.log(
        `Navigating to PrePractice screen for prompt: ${prompt.id} (${prompt.title}) in category: ${prompt.category}`
      );
      navigation.navigate("PracticeTab", {
        screen: "PrePractice", // Navigate to PrePractice first
        params: {
          selectedPrompt: prompt, // Pass the whole prompt object
          categoryPrompts: promptsInCategory,
        },
      });
    },
    [navigation]
  );

  // Featured prompt uses the same logic as selecting a recent one
  const handleSelectFeaturedPrompt = () => {
    if (featuredPrompt) {
      handleSelectRecentPrompt(featuredPrompt);
    } else {
      Alert.alert("Error", "No featured prompt loaded.");
    }
  };

  // <<< Define renderHistoryItem at the top level of the component >>>
  const renderHistoryItem = useCallback(
    ({ item }) => (
      <PracticeHistoryDisplayCard
        item={item}
        onSelectPrompt={handleSelectRecentPrompt}
      />
    ),
    [handleSelectRecentPrompt]
  );

  // --- Render Functions ---

  // <<< Component to render each recent prompt card >>>
  const renderRecentPromptCard = useCallback(
    ({ item }) => (
      <RecentPromptDisplayCard
        item={item}
        onSelectPrompt={handleSelectRecentPrompt}
      />
    ),
    [handleSelectRecentPrompt]
  );

  const renderHeader = () => {
    let userLevel;
    if (points < 25) {
      userLevel = 1;
    } else if (points < 50) {
      userLevel = 2;
    } else {
      userLevel = 3;
    }

    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTopRow}>
          <View style={styles.greetingAndStreakContainer}>
            <Text style={styles.greetingText}>Hello, {username || "Guest"}!</Text>
            {/* Gamification Row: Streak and Points */}
            <View style={styles.gamificationRow}>
              <View style={styles.streakContainer}>
                <Ionicons name="flame" size={20} color={colors.playfulYellow} />
                <Text style={styles.streakText}>
                  {currentStreak || 0} Day Streak
                </Text>
              </View>
              <View style={styles.headerStatItem}>
                <Ionicons
                  name="star-outline"
                  size={20}
                  color={colors.accentTeal}
                />
                <Text style={styles.headerStatText}>Points: {points}</Text>
              </View>
              <View style={styles.levelStatItem}> 
                <Ionicons name="ribbon-outline" size={20} color={colors.primaryDark} />
                <Text style={styles.headerStatText}>Level: {userLevel}</Text>
              </View>
            </View>
            {/* <Text style={styles.subGreetingText}>Ready to practice?</Text> */}
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
            <Text
              style={[styles.quickActionHeaderText, { color: colors.textLight }]}
            >
              Start Practice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.quickActionButton, styles.secondaryAction]}
            onPress={handleQuickPractice}
          >
            <Ionicons name="speedometer-outline" size={20} color={colors.textLight} />
            <Text style={[styles.quickActionHeaderText, { color: colors.textLight }]}>Warm Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.featuredGradient}
          >
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>
                {featuredPrompt?.title || "Loading..."}
              </Text>
              <Text style={styles.featuredDescription} numberOfLines={2}>
                {featuredPrompt?.description || "Select to start practicing"}
              </Text>
              {featuredPrompt && (
                <View style={styles.featuredStatsContainer}>
                  <Ionicons name="people-outline" size={16} color={colors.textLight} style={styles.featuredStatsIcon} />
                  <Text style={styles.featuredStatsText}>
                    {`${Math.max(playCounts[featuredPrompt.id] || 0, 50) + ((playCounts[featuredPrompt.id] || 0) > 0 ? (playCounts[featuredPrompt.id] || 0) % 10 : Math.floor(Math.random() * 10))} people practiced this`}
                  </Text>
                </View>
              )}
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
    return (
      <View style={styles.practiceHistorySectionContainer}>
        <Text style={styles.practiceHistorySectionTitle}>
          Resume Last Practice
        </Text>
        {(!practiceHistoryPrompts || practiceHistoryPrompts.length === 0) ? (
          <View style={styles.emptySectionContent}>
            <Text style={styles.emptySectionText}>
              No practice history yet. Start a session to see it here!
            </Text>
          </View>
        ) : (
          <FlatList
            data={practiceHistoryPrompts}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id + "-history"}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentList}
          />
        )}
      </View>
    );
  };

  const renderFavoritePrompts = () => {
    // recentSection style includes top border and white background
    return (
      <View style={styles.recentSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Favorites</Text>
          {/* Optional: Add a 'See All' button if you plan a dedicated favorites screen */}
        </View>
        {(!favoritePrompts || favoritePrompts.length === 0) ? (
          <View style={styles.emptySectionContent}>
            <Text style={styles.emptySectionText}>
              You haven't favorited any prompts yet. Tap the heart icon on a prompt to add it!
            </Text>
          </View>
        ) : (
          <FlatList
            data={favoritePrompts}
            renderItem={renderRecentPromptCard}
            keyExtractor={(item) => item.id + '-favorite'}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentList}
          />
        )}
      </View>
    );
  };

  // --- Loading State ---
  if (!imagesReady || isUserLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
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
        {renderFavoritePrompts()}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Stylesheet (Refactored) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 0,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 25,
    paddingBottom: 25,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: colors.shadowColor,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
  gamificationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  greetingAndStreakContainer: {
    flex: 1,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  headerStatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  levelStatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  headerStatText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.primaryDark,
    marginLeft: 6,
  },
  streakText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.primaryDark,
    marginLeft: 6,
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
    color: colors.accentTeal,
    marginBottom: 12,
  },
  featuredCard: {
    height: 450,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.cardBackground,
    elevation: 4,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredCardBackground: {
    width: "100%",
    height: "100%",
  },
  featuredCardImageStyle: {
    borderRadius: 16,
  },
  featuredGradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  featuredContent: {
    gap: 8,
  },
  featuredTitle: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: "700",
  },
  featuredDescription: {
    color: colors.textLight,
    fontSize: 16,
    opacity: 0.9,
  },
  featuredStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    opacity: 0.8, // Slightly subtle
  },
  featuredStatsIcon: {
    marginRight: 4,
  },
  featuredStatsText: {
    color: colors.textLight,
    fontSize: 13,
    fontWeight: '500',
  },
  recentSection: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: colors.shadowColor,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.accentTeal,
  },
  seeAllButton: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  recentList: {
    paddingRight: 20,
  },
  recentCard: {
    width: recentCardWidth,
    height: 190,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.cardBackground,
    elevation: 2,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  recentCardBackground: {
    width: "100%",
    height: "100%",
  },
  recentCardImageStyle: {
    borderRadius: 12,
  },
  recentCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
  },
  recentCardTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    color: colors.textLight,
    fontSize: 14,
    fontWeight: "700",
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: colors.textPrimary,
  },
  quickActionsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 8,
  },
  primaryAction: {
    backgroundColor: colors.accentTeal,
  },
  secondaryAction: {
    backgroundColor: colors.accentTeal,
  },
  quickActionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
  },
  practiceHistorySectionContainer: {
    paddingHorizontal: horizontalPadding,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: colors.shadowColor,
  },
  practiceHistorySectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.accentTeal,
    marginBottom: 16,
  },
  headerLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  emptySectionContainer: { // This style is no longer used as a full container, replaced by emptySectionContent
    paddingHorizontal: 20,
    paddingVertical: 16,
    // marginVertical: 0, // Removed
    // marginBottom: 15, // Removed
    backgroundColor: '#FFFFFF', // Changed to white
    alignItems: 'center',
    borderRadius: 12, // May not be needed if it's just a text wrapper now
  },
  emptySectionContent: { // New style for the content area within the always-visible sections
    paddingVertical: 20, // Add some padding for the text
    alignItems: 'center',
  },
  emptySectionText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
});

export default HomeScreen;
