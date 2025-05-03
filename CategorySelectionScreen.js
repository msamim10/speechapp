import React from 'react';
// Import FlatList if planning for many categories, otherwise map is fine for few
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors'; // Import colors
import Ionicons from '@expo/vector-icons/Ionicons'; // Keep Ionicons

// Define categories with background images
// IMPORTANT: Replace placeholder require() paths with actual image assets!
const categories = [
  { id: 'meetings', name: 'Social & Casual', icon: 'briefcase-outline', bgImage: require('./assets/socialpics/pic2789.png') }, // Using social1 image
  { id: 'speeches', name: 'Speeches', icon: 'megaphone-outline', bgImage: require('./assets/speechpics/pic8222.png') }, // Reused prompt image
  { id: 'interviews', name: 'Interviews', icon: 'people-outline', bgImage: require('./assets/interviewpics/pic9300.png') }, // Reused prompt image
  { id: 'presentations', name: 'Presentations', icon: 'easel-outline', bgImage: require('./assets/presentationpics/pic23.png') }, // Reused prompt image
  { id: 'social', name: 'Situational/Specific', icon: 'chatbubbles-outline', bgImage: require('./assets/specificpics/pic2215.png') }, // Reused prompt image
  { id: 'fundamentals', name: 'Practice Fundamentals', icon: 'school-outline', bgImage: require('./assets/Practicefundamentalpics/mdk.png') }, // Reused prompt image
  { id: 'virtual', name: 'Virtual Communication', icon: 'laptop-outline', bgImage: require('./assets/vcpics/ChatGPT Image Apr 26, 2025, 07_25_39 PM.png') }, // Reused prompt image
  { id: 'random', name: 'Random', icon: 'shuffle-outline', bgImage: require('./assets/Practicefundamentalpics/mdk.png') }, // Using fundamentals1 image
  // Add more categories here
];

function CategorySelectionScreen() {
  const navigation = useNavigation();

  const handleSelectCategory = (category) => {
    if (category.id === 'random') {
      // Random navigates to PromptSelection with 'All'
      navigation.navigate('PromptSelection', { category: 'All' });
    } else if (category.name === 'Presentations') {
      // Presentations navigates to PromptSelection with 'Presentations'
      navigation.navigate('PromptSelection', { category: 'Presentations' });
    } else if (category.name === 'Speeches') {
      // Speeches navigates to PromptSelection with 'Speeches'
      navigation.navigate('PromptSelection', { category: 'Speeches' });
    } else if (category.name === 'Interviews') {
      // Interviews navigates to PromptSelection with 'Interviews'
      navigation.navigate('PromptSelection', { category: 'Interviews' });
    } else if (category.name === 'Situational/Specific') {
      // Situational/Specific navigates to PromptSelection with 'Situational/Specific'
      navigation.navigate('PromptSelection', { category: 'Situational/Specific' });
    } else if (category.id === 'meetings') {
      // Social & Casual navigates to PromptSelection with 'Social & Casual'
      navigation.navigate('PromptSelection', { category: 'Social & Casual' });
    } else if (category.name === 'Practice Fundamentals') {
      navigation.navigate('PromptSelection', { category: 'Practice Fundamentals' });
    } else if (category.name === 'Virtual Communication') {
      navigation.navigate('PromptSelection', { category: 'Virtual Communication' });
    } else {
      // Fallback for any other unexpected category
      console.warn(`Unhandled category navigation: ${category.name} (ID: ${category.id})`);
      navigation.navigate('ComingSoonScreen', { categoryName: category.name });
    }
  };

  const handleGoBack = () => {
    navigation.navigate('HomeTab');
  };

  return (
    <View style={styles.safeAreaContainer}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primary} />
      </TouchableOpacity>
    
      {/* Added Page Heading */}
      <Text style={styles.pageHeading}>Choose a Practice Category</Text>
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false} // Keep scrollbar hidden
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryCardTouchable} // Use updated touchable style
            onPress={() => handleSelectCategory(category)}
            activeOpacity={0.8} // Slightly higher opacity for image backgrounds
          >
            <ImageBackground 
              source={category.bgImage} 
              style={styles.categoryCardBackground}
              imageStyle={styles.categoryBackgroundImageStyle} // Apply borderRadius to image itself
              resizeMode="cover"
            >
              {/* Placeholder for lock icon - requires data */}
              {/* {category.isLocked && (
                <View style={styles.lockIconContainer}>
                  <Ionicons name="lock-closed" size={20} color={colors.textLight} />
                </View>
              )} */}
              <View style={styles.cardOverlay}>
                {/* Added Level Text */}
                {/* <Text style={styles.levelText}>Level 1</Text> */}
                <Text style={styles.categoryTitle}>{category.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50, 
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15, 
    zIndex: 10,
    padding: 5,
    // Optional: Add background for better visibility on images near the edge
    // backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    // borderRadius: 15,
  },
  pageHeading: { // Style for the main heading
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    paddingHorizontal: 20, // Align with content padding
    marginBottom: 15, // Reduced space below heading
    marginTop: 10, // Space from top
    textAlign: 'center', // Center the heading
  },
  container: { // Style for ScrollView content
    alignItems: 'center', // Center cards horizontally
    paddingHorizontal: 10, // Adjusted horizontal padding for full-width cards
    paddingBottom: 20, // Padding at the bottom
    paddingTop: 10, // Reduced padding at the top
  },
  categoryCardTouchable: { // Style for the TouchableOpacity wrapper
    width: '100%', // Make cards full-width relative to container padding
    minHeight: 180, // Keep increased card height
    marginBottom: 20, // Keep margin between cards
    borderRadius: 15, // Apply borderRadius here for clipping ImageBackground
    overflow: 'hidden', // Ensure ImageBackground respects borderRadius
    // Add shadow to the touchable wrapper
    shadowColor: colors.shadowColor, 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, 
    shadowRadius: 8, 
    elevation: 5, 
  },
  categoryCardBackground: { // Style for ImageBackground
    flex: 1, // Take full space of TouchableOpacity
    justifyContent: 'flex-end', // Align overlay/text to the bottom
    // Removed alignItems: 'center' - overlay handles text alignment
  },
  categoryBackgroundImageStyle: { // Style passed to imageStyle prop of ImageBackground
     borderRadius: 15, // Ensures the image itself has rounded corners
  },
  cardOverlay: { // Semi-transparent overlay at the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly darker overlay
    paddingVertical: 12, // Adjusted vertical padding
    paddingHorizontal: 12, // Added horizontal padding
    width: '100%', // Cover full width
    // Removed alignItems: 'center' - text components handle their own alignment
  },
  levelText: { // Style for the "Level X" text
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2, // Space between level and title
    opacity: 0.8, // Slightly less prominent
  },
  categoryTitle: { // Updated category title style
    color: colors.textLight, // White text for contrast
    fontSize: 18, // Increased font size
    fontWeight: 'bold', // Make bolder
    // Removed textAlign and marginTop
  },
  // Placeholder style for lock icon container
  // lockIconContainer: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
  //   padding: 4,
  //   borderRadius: 10,
  // },
});

export default CategorySelectionScreen; 