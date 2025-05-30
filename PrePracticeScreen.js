// PrePracticeScreen.js (New File)
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import colors from './constants/colors'; // Assuming you have this
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const COUNTDOWN_SECONDS = 5;
const FAVORITES_KEY = '@favoritePromptIds'; // Key for AsyncStorage

function PrePracticeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedPrompt, categoryPrompts, isFromNextPrompt } = route.params || {}; // Ensure params are destructured safely

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const timerRef = useRef(null);
  const [isFavorited, setIsFavorited] = useState(false); // State for favorite status

  // Load initial favorite status
  useEffect(() => {
    if (selectedPrompt?.id) {
      const checkIfFavorited = async () => {
        try {
          const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
          if (storedFavorites !== null) {
            const favoriteIds = JSON.parse(storedFavorites);
            setIsFavorited(favoriteIds.includes(selectedPrompt.id));
          }
        } catch (e) {
          console.error("Failed to load favorite status.", e);
        }
      };
      checkIfFavorited();
    }
  }, [selectedPrompt?.id]);

  const handleToggleFavorite = async () => {
    if (!selectedPrompt?.id) return;

    const newFavoritedStatus = !isFavorited;
    setIsFavorited(newFavoritedStatus);

    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
      let favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (newFavoritedStatus) {
        // Add to favorites if not already there
        if (!favoriteIds.includes(selectedPrompt.id)) {
          favoriteIds.push(selectedPrompt.id);
        }
      } else {
        // Remove from favorites
        favoriteIds = favoriteIds.filter(id => id !== selectedPrompt.id);
      }
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error("Failed to update favorite status.", e);
      // Optionally revert UI state if storage fails
      setIsFavorited(!newFavoritedStatus);
    }
  };

  const handleGoHome = () => {
    clearInterval(timerRef.current); // Stop the countdown if active
    navigation.navigate('PracticeTab', { screen: 'CategorySelection' });
  };

  // Effect to start/reset countdown when screen comes into focus or selectedPrompt changes
  useFocusEffect(
    useCallback(() => {
      if (!selectedPrompt) {
        console.error("PrePracticeScreen (focus): No selectedPrompt provided!");
        if (navigation.canGoBack()) navigation.goBack();
        else navigation.navigate("PracticeTab", { screen: "CategorySelection" }); // Fallback
        return;
      }

      console.log(`PrePracticeScreen focused/prompt changed: ${selectedPrompt.title}. Resetting countdown.`);
      clearInterval(timerRef.current); // Clear any existing timer
      setCountdown(COUNTDOWN_SECONDS); // Reset countdown state

      timerRef.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) { // When it reaches 1, next tick will be 0
            clearInterval(timerRef.current);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => {
        console.log(`PrePracticeScreen unfocused/cleanup: ${selectedPrompt.title}`);
        clearInterval(timerRef.current);
      };
    }, [selectedPrompt, navigation]) // Dependency: selectedPrompt ensures it reruns if the prompt itself changes
  );

  // Original useEffect for navigation when countdown hits 0 (can remain as is)
  useEffect(() => {
    if (countdown === 0) {
      // clearInterval(timerRef.current); // Already cleared by the countdown setter or focus effect cleanup
      if (selectedPrompt && categoryPrompts) {
        navigation.push('Teleprompter', { 
          selectedPromptId: selectedPrompt.id,
          categoryPrompts: categoryPrompts,
          isNextPromptSequence: !!isFromNextPrompt, 
        });
      } else {
        console.error("PrePracticeScreen: Countdown finished but prompt data missing for navigation.");
        if (navigation.canGoBack()) navigation.goBack();
        else navigation.navigate("PracticeTab", { screen: "CategorySelection" }); // Fallback
      }
    }
  }, [countdown, navigation, selectedPrompt, categoryPrompts, isFromNextPrompt]);

  const handleSkip = () => {
    clearInterval(timerRef.current);
    if (selectedPrompt && categoryPrompts) {
      navigation.push('Teleprompter', {
        selectedPromptId: selectedPrompt.id,
        categoryPrompts: categoryPrompts,
        isNextPromptSequence: !!isFromNextPrompt,
      });
    } else {
      console.error("PrePracticeScreen: Skip pressed but prompt data missing for navigation.");
      navigation.goBack();
    }
  };

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
      <TouchableOpacity onPress={handleGoHome} style={styles.homeButton}>
        <Ionicons name="home-outline" size={28} color={colors.primaryDark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
        <Ionicons name={isFavorited ? "star" : "star-outline"} size={28} color={colors.playfulYellow} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Get Ready!</Text>
        
        <View style={styles.promptInfoContainer}>
            <Text style={styles.promptTitleLabel}>Topic:</Text>
            <Text style={styles.promptTitle}>{selectedPrompt.title || 'Unnamed Prompt'}</Text>
            <Text style={styles.promptSummaryLabel}>You'll be speaking about:</Text>
            <Text style={styles.promptSummary}>{summaryText}</Text>
        </View>

        <View style={styles.countdownContainer}>
          <View style={styles.timerRow}> 
            <Text style={styles.countdownText}>{countdown}</Text>
            <Ionicons name="hourglass-outline" size={30} color={colors.accentTeal} style={styles.iconStyle}/>
          </View>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: colors.playfulLime,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  countdownText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  iconStyle: {
      marginLeft: 15,
  },
  skipButton: {
    marginTop: 5,
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  skipButtonText: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 16,
    color: colors.textSubtle,
    textAlign: 'center',
    position: 'absolute',
    bottom: 40,
  },
  homeButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 55,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
});

export default PrePracticeScreen; 