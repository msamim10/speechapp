// PrePracticeScreen.js (New File)
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from './constants/colors'; // Assuming you have this
import Ionicons from '@expo/vector-icons/Ionicons';

const COUNTDOWN_SECONDS = 5;

function PrePracticeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedPrompt, categoryPrompts } = route.params || {}; // Ensure params are destructured safely

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!selectedPrompt) {
      console.error("PrePracticeScreen: No selectedPrompt provided!");
      // Potentially navigate back or show an error
      navigation.goBack();
      return;
    }

    timerRef.current = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [selectedPrompt, navigation]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerRef.current);
      if (selectedPrompt && categoryPrompts) {
        navigation.replace('Teleprompter', { // Use replace to avoid back navigation to this screen
          selectedPromptId: selectedPrompt.id,
          categoryPrompts: categoryPrompts,
          // Pass any other necessary params to TeleprompterScreen
        });
      } else {
        console.error("PrePracticeScreen: Countdown finished but prompt data missing for navigation.");
        // Fallback navigation if data is somehow missing
        navigation.goBack();
      }
    }
  }, [countdown, navigation, selectedPrompt, categoryPrompts]);

  if (!selectedPrompt) {
    // This could be a more user-friendly loading/error state
    return (
      <SafeAreaView style={styles.safeAreaLoading}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading prompt...</Text>
      </SafeAreaView>
    );
  }

  // Use the new summary field directly from the prompt object
  const summaryText = selectedPrompt.summary || "Get ready to practice!"; // Fallback if summary is missing


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Get Ready!</Text>
        
        <View style={styles.promptInfoContainer}>
            <Text style={styles.promptTitleLabel}>Topic:</Text>
            <Text style={styles.promptTitle}>{selectedPrompt.title || 'Unnamed Prompt'}</Text>
            <Text style={styles.promptSummaryLabel}>You'll be speaking about:</Text>
            <Text style={styles.promptSummary}>{summaryText}</Text>
        </View>

        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>{countdown}</Text>
          <Ionicons name="hourglass-outline" size={30} color={colors.accentTeal} style={styles.iconStyle}/>
        </View>
        
        <Text style={styles.footerText}>Focus and prepare to speak.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  safeAreaLoading: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.textSecondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 30,
  },
  promptInfoContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  promptTitleLabel:{
    fontSize: 16,
    color: colors.textSubtle,
    marginBottom: 4,
  },
  promptTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.accentTeal,
    textAlign: 'center',
    marginBottom: 15,
  },
  promptSummaryLabel:{
    fontSize: 16,
    color: colors.textSubtle,
    marginTop:10,
    marginBottom: 4,
  },
  promptSummary: {
    fontSize: 17,
    color: colors.textPrimary,
    textAlign: 'center',
    lineHeight: 24,
  },
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: colors.playfulLime,
    paddingHorizontal:30,
    paddingVertical:15,
    borderRadius: 50,
  },
  countdownText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  iconStyle: {
      marginLeft: 15,
  },
  footerText: {
    fontSize: 16,
    color: colors.textSubtle,
    textAlign: 'center',
    position: 'absolute',
    bottom: 40,
  }
});

export default PrePracticeScreen; 