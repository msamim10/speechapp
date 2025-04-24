import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Select a category to practice:</Text>
      
      {/* Button to navigate to Category Selection - REMOVED */}
      {/* 
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => navigation.navigate('CategorySelection')} 
        activeOpacity={0.7}
      >
        <Text style={styles.actionButtonText}>Let's Practice</Text>
      </TouchableOpacity>
      */}

      {/* Removed old category buttons */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  actionButtonText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 