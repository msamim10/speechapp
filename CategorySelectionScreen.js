import React from 'react';
// Import FlatList if planning for many categories, otherwise map is fine for few
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors'; // Import colors
import Ionicons from '@expo/vector-icons/Ionicons'; // Keep Ionicons

// Define categories (including Random and placeholders)
const categories = [
  { id: 'random', name: 'Random', icon: 'shuffle-outline' }, // Add icon names
  { id: 'speeches', name: 'Speeches', icon: 'megaphone-outline' },
  { id: 'interviews', name: 'Interviews', icon: 'people-outline' },
  { id: 'presentations', name: 'Presentations', icon: 'easel-outline' },
  { id: 'social', name: 'Situational/Specific', icon: 'chatbubbles-outline' },
  { id: 'meetings', name: 'Social & Casual', icon: 'briefcase-outline' },
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
    } else {
      // Fallback for any other unexpected category
      console.warn(`Unhandled category navigation: ${category.name} (ID: ${category.id})`);
      navigation.navigate('ComingSoonScreen', { categoryName: category.name });
    }
  };

  return (
    <View style={styles.safeAreaContainer}>
      {/* Added Page Heading */}
      <Text style={styles.pageHeading}>Choose a Practice Category</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryCard}
            onPress={() => handleSelectCategory(category)}
            activeOpacity={0.7}
          >
            {/* Use the icon name from the category object */}
            <Ionicons name={category.icon} size={40} color={colors.primary} /> 
            <Text style={styles.categoryTitle}>{category.name}</Text>
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
  pageHeading: { // Style for the main heading
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    paddingHorizontal: 20, // Align with content padding
    marginBottom: 20, // Space below heading
    marginTop: 10, // Space from top
  },
  container: { // Style for ScrollView content
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-around', 
    paddingHorizontal: 15, // Adjusted padding
    paddingBottom: 20, // Padding at the bottom
  },
  categoryCard: {
    backgroundColor: colors.cardBackground, 
    borderRadius: 12, // Slightly more rounded
    padding: 15, // Adjusted padding
    width: '47%', // Slightly wider 
    aspectRatio: 1, 
    marginBottom: 20, // Increased spacing
    alignItems: 'center', 
    justifyContent: 'center', 
    // Refined shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Slightly more elevation
  },
  categoryTitle: {
    color: colors.textPrimary, 
    fontSize: 15, // Slightly smaller
    fontWeight: '600', 
    textAlign: 'center',
    marginTop: 12, // Increased space for icon
  },
});

export default CategorySelectionScreen; 