import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
import colors from './constants/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av'; // Import Audio

// --- Warm-up Prompts ---
const warmUpPrompts = [
  "Describe your favorite meal as vividly as possible in 30 seconds.",
  "Explain a simple concept (like how to tie a shoe) to a five-year-old.",
  "Read the first paragraph of a book or article with exaggerated enthusiasm.",
  "Share a fun fact you learned recently and why it interested you.",
  "If you could have any superpower, what would it be and why?",
  "Recite a tongue twister three times fast (e.g., She sells seashells by the seashore).",
  "Imagine you are a tour guide for your own home. What are the highlights?",
  "What's one small thing you're grateful for today and why?",
  "Tell a short, silly joke.",
  "If animals could talk, which one would be the funniest? Why?",
  "Describe your dream vacation in three sentences.",
  "What is your favorite sound, and why does it appeal to you?",
  "If you were a color, which color would you be and what does it represent?",
  "Share a positive affirmation out loud with conviction.",
  "Make up a new word and define it."
];

function WarmUpScreen() {
  const navigation = useNavigation();
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [countdown, setCountdown] = useState(4);
  const [isPracticing, setIsPracticing] = useState(false); // Controls if countdown/audio is active
  const soundRef = useRef(null); // For managing the sound object

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * warmUpPrompts.length);
    return warmUpPrompts[randomIndex];
  };

  useEffect(() => {
    setCurrentPrompt(getRandomPrompt()); // Set initial prompt

    // Audio setup
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
        const { sound } = await Audio.Sound.createAsync(
          require('./assets/sounds/racenoise.mp3') // Correct path to your sound
        );
        soundRef.current = sound;
      } catch (error) {
        console.error('Failed to load sound', error);
      }
    };
    setupAudio();

    return () => {
      // Unload sound when component unmounts
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isPracticing && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isPracticing, countdown]);

  const playSound = async () => {
    if (soundRef.current) {
      try {
        await soundRef.current.replayAsync(); // Use replayAsync to play from the beginning
      } catch (error) {
        console.error('Failed to play sound', error);
      }
    }
  };

  const handleNewPrompt = () => {
    if (isPracticing) return; // Don't change prompt during countdown
    setCurrentPrompt(getRandomPrompt());
  };

  const handleStartPractice = () => {
    if (isPracticing) return;
    playSound(); // Start sound immediately
    setIsPracticing(true);
    setCountdown(4); // Reset countdown
  };
  
  const handleStopPractice = () => {
    if (soundRef.current) {
        soundRef.current.stopAsync();
    }
    setIsPracticing(false);
    setCountdown(4); // Reset countdown for next time
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
            if (isPracticing) handleStopPractice();
            navigation.goBack();
        }} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quick Practice</Text>
        <View style={{ width: 28 }} />{/* Placeholder for spacing */}
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.promptCard}>
          <Text style={styles.promptText}>{currentPrompt}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            isPracticing ? styles.stopButton : styles.primaryButton,
          ]}
          onPress={isPracticing ? handleStopPractice : handleStartPractice}
        >
          <Ionicons 
            name={isPracticing ? "stop-circle-outline" : "play-circle-outline"}
            size={24} 
            color="white" 
            style={styles.buttonIcon}
          />
          <Text style={[
            styles.buttonText,
            isPracticing && countdown > 0 && styles.countdownButtonText
          ]}>
            {isPracticing
              ? (countdown > 0 ? countdown.toString() : "Stop Practice")
              : "Start Timed Practice"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={handleNewPrompt}
          disabled={isPracticing}
        >
          <Ionicons name="shuffle-outline" size={24} color={colors.primary} style={styles.buttonIcon} />
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>New Prompt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight || '#F8F9FA',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight || '#E9ECEF',
    backgroundColor: colors.white || 'white',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary || '#212529',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  promptCard: {
    backgroundColor: colors.white || 'white',
    borderRadius: 12,
    padding: 25,
    marginBottom: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    minHeight: 150, // Ensure card has a decent size
    justifyContent: 'center',
  },
  promptText: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.textPrimary || '#343A40',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20, // Adjusted padding for potentially larger text
    borderRadius: 30,
    width: '90%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 60, // Ensure button is tall enough
  },
  buttonIcon: {
    marginRight: 8, // Add some space between icon and text
  },
  primaryButton: {
    backgroundColor: colors.primary || '#007AFF',
  },
  secondaryButton: {
    backgroundColor: colors.white || 'white',
    borderWidth: 1.5,
    borderColor: colors.primary || '#007AFF',
  },
  stopButton: {
    backgroundColor: colors.danger || '#DC3545', // A typical color for stop/danger
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white || 'white',
  },
  secondaryButtonText: {
    color: colors.primary || '#007AFF',
  },
  countdownButtonText: { // Style for the large countdown numbers
    fontSize: 28, // Make numbers larger
    fontWeight: 'bold',
    color: colors.white || 'white', // Ensure text color is white for stopButton as well
  },
});

export default WarmUpScreen; 