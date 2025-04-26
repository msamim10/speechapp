import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import colors from './constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

function WarmUpScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const warmUpText = route.params?.warmUpText || 'No warm-up text found.';
  
  // Countdown state
  const [countdown, setCountdown] = useState(4);
  const [showCountdown, setShowCountdown] = useState(true);

  // Countdown effect
  useEffect(() => {
    if (!showCountdown) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // When countdown reaches 0, hide the overlay
      setShowCountdown(false);
    }
  }, [countdown, showCountdown]);

  return (
    <View style={styles.safeAreaContainer}>
      {/* Back Button - Positioned absolutely */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primary} />
      </TouchableOpacity>

      {/* Content Area */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Quick Practice</Text>
        <Text style={styles.warmUpContent}>{warmUpText}</Text>
      </ScrollView>

      {/* Countdown Overlay */}
      {showCountdown && (
        <View style={styles.countdownOverlay}>
          <Text style={styles.countdownText}>{countdown}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50, // Status bar padding
  },
  backButton: {
    position: 'absolute',
    top: 55, // Adjust as needed
    left: 15,
    zIndex: 10,
    padding: 5,
  },
  contentContainer: {
    flexGrow: 1, // Ensure ScrollView content can grow
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 30,
    paddingTop: 60, // Add padding to clear back button
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 30,
    textAlign: 'center',
  },
  warmUpContent: {
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 28, // Improve readability
    textAlign: 'center',
  },
  // Countdown styles
  countdownOverlay: {
    ...StyleSheet.absoluteFillObject, // Make it cover the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    zIndex: 10, // Ensure it's above other elements
  },
  countdownText: {
    fontSize: 120, // Large text
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white text
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default WarmUpScreen; 