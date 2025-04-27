import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { promptsData } from './data/prompts.js'; // Import the full data
import colors from './constants/colors'; // Import colors
import Ionicons from '@expo/vector-icons/Ionicons'; // Ensure Ionicons is imported

function PromptSelectionScreen({ route, navigation }) {
  // Get the category passed from HomeScreen
  const { category } = route.params;

  // Determine which prompts to display
  const displayPrompts = category === 'All' 
    ? promptsData // Show all if category is 'All'
    : promptsData.filter(prompt => prompt.category === category); // Otherwise, filter

  // Determine the header text
  const headerText = category === 'All' ? 'All Prompts' : `${category} Prompts`;

  const handleSelectPrompt = (item) => {
    // Navigate to Teleprompter, passing the selected ID and the appropriate list
    navigation.navigate('Teleprompter', {
      selectedPromptId: item.id,
      categoryPrompts: displayPrompts, // Pass the list being displayed
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
      {/* Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primary} />
      </TouchableOpacity>

      {/* Existing Content - Wrapped in a container View for layout */}
      <View style={styles.contentContainer}>
        {/* Random Prompt Button */}
        {displayPrompts && displayPrompts.length > 0 && (
          <TouchableOpacity 
            style={styles.randomButton} 
            onPress={handleRandomPromptSelect}
            activeOpacity={0.7}
          >
            <Text style={styles.randomButtonText}>Choose Random Prompt</Text>
          </TouchableOpacity>
        )}

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
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15, 
    zIndex: 10,
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
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
    padding: 15,
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
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  promptTitle: { 
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    flex: 1,
  },
  randomButton: {
    backgroundColor: colors.success,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
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
});

export default PromptSelectionScreen; 