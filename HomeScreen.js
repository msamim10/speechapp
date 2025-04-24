import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen() {
  const navigation = useNavigation();

  const navigateToPractice = () => {
    navigation.navigate('PracticeTab');
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
});

export default HomeScreen; 