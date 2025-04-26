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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages } from './constants/imageUtils';
import { useUser } from './context/UserContext'; // Import the useUser hook

// --- Date Formatting Helper (Copied from UserProfileScreen) ---
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
// --- End Date Formatting ---

// Categories with preloaded images
const categories = [
  { id: 'speeches', title: 'Speeches', image: categoryImageSources.speeches, category: 'Speeches' },
  { id: 'presentations', title: 'Presentations', image: categoryImageSources.presentations, category: 'Presentations' },
  { id: 'social', title: 'Social', image: categoryImageSources.social, category: 'Social & Casual' },
  { id: 'interview', title: 'Interview', image: categoryImageSources.interview, category: 'Interviews' },
];

// Calculate card width
const screenWidth = Dimensions.get('window').width;
const gridGap = 16;
const containerPadding = (screenWidth * 0.1) / 2; // matches welcomeBox width: 90%
const cardWidth = (screenWidth - containerPadding * 2 - gridGap) / 2;
const cardHeight = 160;

function HomeScreen() {
  const navigation = useNavigation();
  // Get user data from context, including stats
  const { username, currentStreak, lastPracticedTimestamp, isLoading: isUserLoading } = useUser();
  // State for press effects
  const [cardStates, setCardStates] = useState({});
  const [imagesReady, setImagesReady] = useState(false);

  // Preload images when component mounts
  useEffect(() => {
    console.log("--- HomeScreen Rendering --- Username:", username); // Log HomeScreen render start
    const loadImages = async () => {
      try {
        // Preload all category images
        const imageArray = Object.values(categoryImageSources);
        await preloadImages(imageArray);
        setImagesReady(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Even if there's an error, we'll set imagesReady to true to not block the UI
        setImagesReady(true);
      }
    };
    
    loadImages();
  }, [username]); // Add username dependency to log changes

  // --- Handlers ---
  const handleStartPractice = () => {
    navigation.navigate('PracticeTab');
  };

  // Quick Practice handler 
  const handleQuickPractice = () => {
    // Sample practice text - brief enough for a quick practice
    const quickText = 
      "Welcome to quick practice mode. This short exercise helps you warm up your voice and delivery skills. " +
      "Speak clearly and confidently, maintaining good pace and projection. " +
      "Public speaking is a skill that improves with consistent practice. " +
      "Focus on your breathing, posture, and articulation as you read these sentences.";
      
    // Navigate to the simple WarmUp screen with the practice text
    navigation.navigate('WarmUp', { 
      warmUpText: quickText 
    });
  };

  // Handlers for card press in/out
  const onPressInCard = (id) => {
    setCardStates((prev) => ({
      ...prev,
      [id]: { scale: 1.05, overlayOpacity: 0.5 }
    }));
  };
  const onPressOutCard = (id) => {
    setCardStates((prev) => ({
      ...prev,
      [id]: { scale: 1, overlayOpacity: 0.3 }
    }));
  };

  const renderCategoryCard = (cat) => {
    const state = cardStates[cat.id] || { scale: 1, overlayOpacity: 0.3 };
    return (
      <TouchableOpacity
        key={cat.id}
        style={[styles.categoryCard, { transform: [{ scale: state.scale }] }]}
        onPress={() => navigation.navigate('PracticeTab', { 
          screen: 'PromptSelection',
          params: { category: cat.category } 
        })}
        onPressIn={() => onPressInCard(cat.id)}
        onPressOut={() => onPressOutCard(cat.id)}
        activeOpacity={0.9}
      >
        <ImageBackground 
          source={cat.image} 
          style={styles.categoryImage}
          resizeMode="cover"
          fadeDuration={0} // Remove fade animation for faster display
        >
          <View style={[styles.categoryOverlay, { opacity: state.overlayOpacity }]} />
          <View style={styles.categoryTitleContainer}>
            <Text style={styles.cardLabel}>{cat.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // Format the date for display
  const formattedLastPracticed = formatTimestamp(lastPracticedTimestamp);

  // Use a loading state while images are being cached OR user is loading
  if (!imagesReady || isUserLoading) { // Check both loading states
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* --- Large Welcome Box --- */}
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeHeader}>Welcome, {username}!</Text>
          {/* Start Practice Button Container */}
          <View style={styles.ctaButtonContainer}>
            <TouchableOpacity style={styles.ctaButton} onPress={handleStartPractice}>
              <Text style={styles.ctaButtonText}>Start Practice</Text>
            </TouchableOpacity>
          </View>

          {/* --- Practice Stats Section (Moved Inside Welcome Box) --- */}
          <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                  <Ionicons name="flame" size={24} color={colors.accentOrange} style={styles.statIcon} />
                  <Text style={styles.statValue}>{currentStreak}</Text>
                  <Text style={styles.statLabel}>Day Streak</Text>
              </View>
              <View style={styles.statSeparator} />
              <View style={styles.statItem}>
                  <Ionicons name="calendar" size={24} color={colors.accentPurple} style={styles.statIcon} />
                  <Text style={styles.statValueSmall}>{formattedLastPracticed}</Text>
                  <Text style={styles.statLabel}>Last Practiced</Text>
              </View>
          </View>
        </View>

        {/* Category Section with Title */}
        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Select a Category</Text>
          <View style={styles.categoryGrid}>
            {categories.map(renderCategoryCard)}
          </View>
        </View>

        {/* Spacer view */}
        <View style={{ flex: 1 }} />

      </View>
    </SafeAreaView>
  );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center items like status badge horizontally
  },
  // --- Loading Container ---
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: colors.primaryDark,
  },
  // --- Welcome Box ---
  welcomeBox: {
    width: '90%', // Make the box wide
    backgroundColor: colors.cardBackground, // Example background
    borderRadius: 16,
    paddingVertical: 25, // Keep vertical padding
    paddingHorizontal: 20, // Adjust horizontal padding slightly if needed
    marginTop: 30, // Space from top
    marginBottom: 25, // Increased margin below welcome box to compensate for removed stats margin
    alignItems: 'center', // Center content inside the box
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  welcomeHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 25, // Adjust spacing
  },
  // --- CTA Button (Styles adjusted for context) ---
  ctaButtonContainer: {
    width: '100%', // Make button container full width of box padding
    alignItems: 'center', // Center the button(s) within the container
    marginBottom: 25, // Add space between button and stats
  },
  ctaButton: {
    width: '90%', // Make button slightly less wide than container
    backgroundColor: colors.accentTeal,
    paddingVertical: 15, // Slightly smaller button
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
    // Removed marginBottom as only one button now
  },
  ctaButtonText: {
    color: colors.textLight,
    fontSize: 16, // Slightly smaller text
    fontWeight: 'bold',
  },
  categorySection: {
    width: '90%',
    marginTop: 0, // Reset margin Top as space is handled by welcomeBox margin
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  categoryGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: cardWidth,
    height: cardHeight,
    marginBottom: gridGap,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  categoryTitleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cardLabel: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent', // Make background transparent to blend with welcomeBox
    borderRadius: 0, // Remove border radius if inside box
    paddingVertical: 10, // Adjust padding
    paddingHorizontal: 0,
    width: '100%', // Take full width within welcomeBox padding
    marginBottom: 0, // Remove margin as it's inside the box now
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    marginBottom: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  statValueSmall: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.primaryDark,
    textAlign: 'center',
    minHeight: 30,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statSeparator: {
    width: 1,
    height: '60%',
    backgroundColor: colors.borderLight,
    marginHorizontal: 10,
  },
});

export default HomeScreen; 