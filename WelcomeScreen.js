import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from './context/UserContext'; // Import useUser hook
import colors from './constants/colors'; // Use theme colors

const USERNAME_KEY = '@userProfile_username'; // Use the same key as UserContext

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const { updateUsername } = useUser(); // Get update function from context

  const handleContinue = async () => {
    const trimmedName = name.trim();
    if (trimmedName === '') {
      Alert.alert('Name Required', 'Please enter your name to continue.');
      return;
    }

    try {
      // Save directly to AsyncStorage (context will pick it up on next load, but we update context state immediately too)
      await AsyncStorage.setItem(USERNAME_KEY, trimmedName);
      // Update the context state immediately for a smooth transition
      await updateUsername(trimmedName); 
      // Navigate to the main part of the app (assuming it's named 'MainTabs' in your RootStack)
      navigation.replace('MainTabs'); // Use replace to prevent going back to WelcomeScreen
    } catch (e) {
      console.error('Failed to save name or navigate.', e);
      Alert.alert('Error', 'Could not save your name. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Public Speaking App!</Text>
          <Text style={styles.subtitle}>What should we call you?</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={colors.textSecondary}
            autoCapitalize="words"
            returnKeyType="done"
            onSubmitEditing={handleContinue} // Allow pressing return key to continue
          />

          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primaryDark,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 30,
    color: colors.primaryDark,
  },
  continueButton: {
    width: '100%',
    backgroundColor: colors.accentTeal,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  continueButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen; 