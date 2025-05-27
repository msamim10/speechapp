import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Platform } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { categoryImageSources, defaultImages } from './constants/imageUtils'; // Import image sources

// Define categories - bgImage will be mapped dynamically
const AppCategories = [
  { id: 'meetings', name: 'Social & Casual', icon: 'briefcase-outline', imageKey: 'social' }, 
  { id: 'speeches', name: 'Speeches', icon: 'megaphone-outline', imageKey: 'speeches' }, 
  { id: 'interviews', name: 'Interviews', icon: 'people-outline', imageKey: 'interview' }, 
  { id: 'presentations', name: 'Presentations', icon: 'easel-outline', imageKey: 'presentations' }, 
  { id: 'social', name: 'Situational/Specific', icon: 'chatbubbles-outline', imageKey: 'situationalSpecificCover' }, // Updated imageKey
  { id: 'fundamentals', name: 'Practice Fundamentals', icon: 'school-outline', imageKey: 'fundamentals' }, // No specific image, will use default
  { id: 'virtual', name: 'Virtual Communication', icon: 'laptop-outline', imageKey: 'virtual' }, // No specific image, will use default
  { id: 'random', name: 'Random', icon: 'shuffle-outline', imageKey: 'random' }, // Will use a default or cycle
];

// Helper to get image, cycling through available if not specific
const getImageForCategory = (imageKey, index) => {
  // Find the specific image source object by imageKey
  const specificImageSource = categoryImageSources.find(src => src.imageKey === imageKey);

  if (specificImageSource) {
    return specificImageSource.image; // Return the image path (require statement)
  }
  
  // Fallback logic: Cycle through available images or use default
  // Ensure we are accessing the .image property from the source objects
  if (categoryImageSources.length > 0) {
    return categoryImageSources[index % categoryImageSources.length].image;
  }
  
  return defaultImages.promptBackground; // Fallback to a generic default
};

function CategorySelectionScreen() {
  const navigation = useNavigation();

  const handleSelectCategory = (category) => {
    // Navigation logic remains largely the same, ensure category.name is used if that's what PromptSelection expects
    if (category.id === 'random') {
      navigation.navigate('PromptSelection', { category: 'All' });
    } else {
      // Pass the category name, as PromptSelectionScreen seems to expect it.
      navigation.navigate('PromptSelection', { category: category.name });
    }
  };

  const handleGoHome = () => {
    navigation.navigate('HomeTab'); // Explicitly navigate to HomeTab
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoHome} style={styles.headerButtonLeft}>
        <Ionicons name="arrow-back-outline" size={28} color={colors.textPrimary} />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose a Category</Text>
        <View style={styles.headerButtonRight} />{/* Placeholder for balance */}
      </View>

      {/* Daily update message removed from here */}
      {/* <Text style={styles.dailyUpdateText}>
        New prompts and images are updated daily!
      </Text> */}
    
      <ScrollView 
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {AppCategories.map((category, index) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryCard}
            onPress={() => handleSelectCategory(category)}
            activeOpacity={0.85}
          >
            <ImageBackground 
              source={getImageForCategory(category.imageKey, index)} 
              style={styles.cardImageBackground}
              imageStyle={styles.cardImageStyle}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']} // Adjusted gradient for better readability
                style={styles.gradientOverlay}
              >
                <Text style={styles.cardTitle}>
                  {category.name.includes(' ') ? category.name.replace(' ', '\n') : category.name}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}

        {/* Daily update message - moved to the end of ScrollView content */}
        <Text style={styles.dailyUpdateText}>
          New prompts and images are updated daily!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight || '#F8F9FA',
    // paddingTop: Platform.OS === 'android' ? 25 : 0, // Removed, handled by SafeAreaView
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 10 : 20, // Adjusted padding for platform
    paddingBottom: 15, // Increased bottom padding
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight || '#E9ECEF',
    backgroundColor: colors.white || 'white',
  },
  headerButtonLeft: { // Specific style for left button
    padding: 5,
  },
  headerButtonRight: { // Specific style for right placeholder
    width: 33, // Match approx. width of an icon button (padding + icon size)
  },
  headerTitle: {
    fontSize: 22, // Slightly larger title
    fontWeight: '700', // Bolder
    color: colors.textPrimary || '#212529',
  },
  dailyUpdateText: { 
    fontSize: 14,
    color: colors.textSubtle || colors.textSecondary, 
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15, // Ensure enough padding
    backgroundColor: colors.borderLight, // Changed to a light gray background
    width: '100%', // Ensure it takes full width if it's the last item
    marginTop: 10, // Add some margin above it if categories end abruptly
    // Adding a subtle top border for separation if desired
    // borderTopWidth: 1,
    // borderTopColor: colors.shadowColor || '#E0E0E0',
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10, // Reduced paddingBottom as the text below will have its own padding
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 220, // Reduced height for a more compact look
    marginBottom: 20, // Slightly reduced margin
    borderRadius: 18, // Slightly increased border radius
    overflow: 'hidden',
    backgroundColor: colors.borderLight,
    elevation: 5, // Adjusted elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Softer shadow
    shadowOpacity: 0.15, 
    shadowRadius: 4,
  },
  cardImageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
     // borderRadius: 16, // ImageBackground itself handles clipping via overflow:hidden on parent
  },
  gradientOverlay: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  cardTitle: {
    color: colors.textLight,
    fontSize: 19, // Slightly adjusted font size
    fontWeight: '700', // Bolder title on card
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Slightly stronger text shadow
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    lineHeight: 23, // Adjusted line height
  },
});

export default CategorySelectionScreen; 