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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { categoryImageSources, preloadImages } from './constants/imageUtils';

// --- Placeholder Data ---
const USER_NAME = "User"; // Replace with actual data
const CURRENT_STREAK = 3;
const LAST_PRACTICED = "today at 10:00 AM";
const SHOW_STREAK = true; 

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
  // State for press effects
  const [cardStates, setCardStates] = useState({});
  const [imagesReady, setImagesReady] = useState(false);

  // Preload images when component mounts
  useEffect(() => {
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
  }, []);

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

  // Use a loading state while images are being cached
  if (!imagesReady) {
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
          <Text style={styles.welcomeHeader}>Welcome, {USER_NAME}!</Text>
          {/* Start Practice Button (Moved Inside Box) */} 
          <View style={styles.ctaButtonContainer}>
            <TouchableOpacity style={styles.ctaButton} onPress={handleStartPractice}>
              <Text style={styles.ctaButtonText}>Start Practice</Text>
            </TouchableOpacity>
            {/* Quick Practice Button */}
            <TouchableOpacity 
              style={[styles.ctaButton, styles.quickPracticeButton]} 
              onPress={handleQuickPractice}
            >
              <Text style={styles.ctaButtonText}>Quick Practice</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Section with Title */}
        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Select a Category</Text>
          <View style={styles.categoryGrid}>
            {categories.map(renderCategoryCard)}
          </View>
        </View>

        {/* Spacer view to push content up if needed */}
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
    padding: 25, // Generous padding
    marginTop: 30, // Space from top
    marginBottom: 20, // Space below box
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
    marginBottom: 30, // Space below header
  },
  // --- CTA Button (Styles adjusted for context) ---
  ctaButtonContainer: {
    width: '90%',
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: colors.accentTeal, 
    paddingVertical: 18,
    paddingHorizontal: 20, 
    borderRadius: 30, 
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 12,
  },
  ctaButtonText: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
  categorySection: {
    width: '90%',
    marginTop: 25,
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
  quickPracticeButton: {
    backgroundColor: colors.primary,  // Different color to distinguish
  },
  // Removed styles for topBar, topBarSpacer, appTitle, settingsButtonContainer, settingsIcon
});

export default HomeScreen; 