import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { promptsData } from './data/prompts.js'; // Import the full data
import colors from './constants/colors'; // Import colors
import Ionicons from '@expo/vector-icons/Ionicons'; // Ensure Ionicons is imported
import { useFocusEffect } from '@react-navigation/native';
import { handlePromptViewAttempt } from './RevenueCatService'; 

function PromptSelectionScreen({ route, navigation }) {
  // Get the category passed from HomeScreen
  const { category } = route.params;
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useFocusEffect(
    useCallback(() => {
      console.log('PromptSelectionScreen focused');
      console.log('Navigation state on PromptSelectionScreen focus:', JSON.stringify(navigation.getState(), null, 2));
      return () => {
        // Optional: console.log('PromptSelectionScreen unfocused');
      };
    }, [navigation])
  );

  // Determine which prompts to display
  const getFilteredPrompts = () => {
    let prompts = category === 'All' 
      ? promptsData.flat() // Show all if category is 'All' - flatten if promptsData is nested
      : promptsData.filter(prompt => prompt.category === category); // Otherwise, filter by category

    if (searchQuery.trim() !== '') {
      prompts = prompts.filter(prompt => 
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return prompts;
  };
  const displayPrompts = getFilteredPrompts();

  // Determine the header text
  const headerText = category === 'All' ? 'All Prompts' : `${category} Prompts`;

  const handleSelectPrompt = async (item) => {
    // Navigate to PrePracticeScreen first, passing the selected item and the appropriate list
    await handlePromptViewAttempt(navigation, {
      screen: "PrePractice", // Directly navigate to PrePractice (it's in the same stack)
      params: {
        selectedPrompt: item,       // Pass the whole prompt object
        categoryPrompts: displayPrompts, // Pass the list being displayed
      }
    });
  };

  // --- New Handler for Random Prompt Selection ---
  const handleRandomPromptSelect = () => {
    if (displayPrompts && displayPrompts.length > 0) {
      const randomIndex = Math.floor(Math.random() * displayPrompts.length);
      const randomPrompt = displayPrompts[randomIndex];
      handleSelectPrompt(randomPrompt); // Reuse existing navigation logic
    }
  };
  // --- End New Handler ---

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.promptCard} 
      onPress={() => handleSelectPrompt(item)}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <Image
          source={item.image} 
          style={styles.promptImageThumbnail}
          resizeMode="cover"
        />
        <Text style={styles.promptTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.safeAreaContainer}>
      {/* Existing Content - Wrapped in a container View for layout */}
      <View style={styles.contentContainer}>
        {/* Random Prompt Button and Search Bar Container */}      
        <View style={styles.topControlsContainer}>
          {/* <TouchableOpacity onPress={handleGoBack} style={styles.backButtonInRow}>
            <Ionicons name="arrow-back" size={28} color={colors.primary} />
          </TouchableOpacity> */}
          {displayPrompts && displayPrompts.length > 0 && (
            <TouchableOpacity 
              style={styles.randomButton} 
              onPress={handleRandomPromptSelect}
              activeOpacity={0.7}
            >
              <Text style={styles.randomButtonText}>Random</Text>
            </TouchableOpacity>
          )}
          <TextInput
            style={styles.searchBar}
            placeholder="Search prompts..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={colors.textSubtle}
          />
        </View>

        {/* Prompt List */}
        <FlatList
          data={displayPrompts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text>No prompts found for this category.</Text>}
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1, 
    paddingTop: 50, // This might need adjustment now that arrow is in flow
    backgroundColor: colors.background,
  },
  backButton: { // This style is no longer used for the in-flow button
    // position: 'absolute',
    // top: 55,
    // left: 15, 
    // zIndex: 10,
    // padding: 5,
  },
  backButtonInRow: { // New style for the in-flow back button
    padding: 5, // Keep some touch area
    marginRight: 5, // Space before random button
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15, // Adjusted from 50, as arrow is now in flow
  },
  listStyle: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  promptCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promptImageThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  promptTitle: { 
    fontSize: 18,
    fontWeight: '500',
    color: colors.textPrimary,
    flex: 1,
  },
  randomButton: {
    backgroundColor: colors.accentTeal,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  randomButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  topControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    height: 44,
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.shadowColor,
  },
});

export default PromptSelectionScreen; 