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
  { id: 'social', name: 'Situational/Specific', icon: 'chatbubbles-outline', imageKey: 'social' }, // Can reuse or add more specific keys
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
        <TouchableOpacity onPress={handleGoHome} style={styles.headerButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primary} />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose a Category</Text>
        <View style={styles.headerButton} />{/* Placeholder for balance */}
      </View>
    
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
                colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.85)']} // Slightly stronger gradient at bottom
                style={styles.gradientOverlay}
              >
                <Text style={styles.cardTitle}>
                  {category.name.includes(' ') ? category.name.replace(' ', '\n') : category.name}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight || '#F8F9FA',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight || '#E9ECEF',
    backgroundColor: colors.white || 'white',
  },
  headerButton: {
    padding: 5,
    width: 38, // for balance
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary || '#212529',
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 250,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.borderLight,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.20, 
    shadowRadius: 5,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    lineHeight: 24,
  },
});

export default CategorySelectionScreen; 