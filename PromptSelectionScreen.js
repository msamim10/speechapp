import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { promptsData } from './data/prompts.js'; // Import the full data

function PromptSelectionScreen({ route, navigation }) {
  // Get the category passed from HomeScreen
  const { category } = route.params;

  // Filter the prompts based on the passed category
  const categoryPrompts = promptsData.filter(prompt => prompt.category === category);

  const handleSelectPrompt = (item) => {
    // Navigate to Teleprompter, passing the selected ID and the list for this category
    navigation.navigate('Teleprompter', {
      selectedPromptId: item.id,
      categoryPrompts: categoryPrompts, // Pass the filtered list
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectPrompt(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category} Prompts</Text>
      <FlatList
        data={categoryPrompts} // Use the filtered list
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No prompts found for this category.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: { 
    fontSize: 16,
    color: '#333',
  },
});

export default PromptSelectionScreen; 