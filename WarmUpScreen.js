import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import colors from './constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

function WarmUpScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const warmUpText = route.params?.warmUpText || 'No warm-up text found.';

  return (
    <View style={styles.safeAreaContainer}>
      {/* Back Button - Positioned absolutely */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primary} />
      </TouchableOpacity>

      {/* Content Area */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Quick Warm-up</Text>
        <Text style={styles.warmUpContent}>{warmUpText}</Text>
      </ScrollView>
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
});

export default WarmUpScreen; 