import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors'; // Import colors

function CategorySelectionScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Select a Category</Text> */}
      
      {/* Button to navigate to Prompt Selection for All Prompts (Random) */}
      <TouchableOpacity 
        style={styles.categoryButton}
        onPress={() => navigation.navigate('PromptSelection', { category: 'All' })} // Pass 'All' category
        activeOpacity={0.7} // Added feedback
      >
        <Text style={styles.buttonText}>Random</Text>
      </TouchableOpacity>

      {/* Add more category buttons here in the future */}
      {/* Example:
      <TouchableOpacity 
        style={styles.categoryButton}
        onPress={() => navigation.navigate('PromptSelection', { category: 'Public Speech' })} 
      >
        <Text style={styles.buttonText}>Public Speech</Text>
      </TouchableOpacity> 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25, // Consistent padding
    paddingTop: 50, // Add padding for status bar
    backgroundColor: colors.background, // Use background color
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: { // Keeping commented out title styling consistent just in case
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: colors.textPrimary,
  },
  categoryButton: {
    backgroundColor: colors.primary, // Use primary color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10, // Consistent rounding
    // Add shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 10, // Add some margin from the top nav bar
  },
  buttonText: {
    color: colors.buttonText, // Use button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategorySelectionScreen; 