import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define simple warm-up prompts
const warmUpPrompts = [
  { id: 'warmup1', text: "The quick brown fox jumps over the lazy dog. Repeat clearly." },
  { id: 'warmup2', text: "She sells seashells by the seashore. Focus on the 's' sounds." },
  { id: 'warmup3', text: "Unique New York, unique New York. Practice articulation." },
  { id: 'warmup4', text: "Take a deep breath in... and exhale slowly. Focus on breath control." },
  { id: 'warmup5', text: "Red lorry, yellow lorry. Speed up gradually." }
];

function HomeScreen() {
  const navigation = useNavigation();

  const navigateToPractice = () => {
    navigation.navigate('PracticeTab');
  };

  // Handler for the warm-up button
  const handleWarmUpPress = () => {
    // 1. Select random warm-up prompt text
    const randomIndex = Math.floor(Math.random() * warmUpPrompts.length);
    const randomWarmUpText = warmUpPrompts[randomIndex].text;

    // 2. Navigate to the dedicated WarmUpScreen
    navigation.navigate('WarmUp', { // Navigate to 'WarmUp' route
      warmUpText: randomWarmUpText, // Pass text as param
    });
  };

  return (
    <View style={styles.safeAreaContainer}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBarContainer}>
          <Text style={styles.topBarTitle}>SpeakEasy</Text>
        </View>

        <View style={styles.heroContainer}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.heroSubtitle}>Ready to improve your speaking?</Text>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={navigateToPractice}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonText}>Start Practicing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Today's Stats</Text>
          <View style={styles.statsBox}>
            <Text style={styles.statsText}>Speeches this week: <Text style={styles.statsValue}>0</Text></Text>
            <Text style={styles.statsText}>Total practice time: <Text style={styles.statsValue}>0m</Text></Text>
            <Text style={styles.statsText}>Streak: <Text style={styles.statsValue}>0</Text> days</Text>
          </View>
        </View>

        {/* --- Quick Warm-up Button --- */}
        <View style={styles.warmUpSection}> 
          <TouchableOpacity 
            style={styles.warmUpButton} 
            onPress={handleWarmUpPress}
            activeOpacity={0.7}
          >
            <Ionicons name="flame-outline" size={20} color={colors.buttonText} />
            <Text style={styles.warmUpButtonText}>Quick Warm-up</Text>
          </TouchableOpacity>
        </View>

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
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  topBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  topBarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  heroContainer: {
    padding: 25,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 25,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14, 
    paddingHorizontal: 45,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  actionButtonText: {
    color: colors.buttonText,
    fontSize: 17,
    fontWeight: 'bold',
  },
  statsContainer: {
    marginHorizontal: 15,
    marginBottom: 30,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
  },
  statsBox: {
  },
  statsText: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: 10,
    lineHeight: 22,
  },
  statsValue: {
    fontWeight: '600',
    color: colors.textPrimary,
  },
  // --- Styles for Warm-up Button --- 
  warmUpSection: {
    alignItems: 'center', // Center the button horizontally
    marginTop: 10, // Add space above the warm-up button
    marginHorizontal: 15, // Align with other content
  },
  warmUpButton: {
    flexDirection: 'row', // Icon and text side-by-side
    alignItems: 'center',
    backgroundColor: colors.success, // Use a different color (e.g., green)
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, // Make it pill-shaped
    // Add shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  warmUpButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, // Space between icon and text
  },
  // --- End Warm-up Styles --- 
});

export default HomeScreen; 