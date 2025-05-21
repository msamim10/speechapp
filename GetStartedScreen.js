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
  ActivityIndicator,
  Alert,
} from 'react-native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from './context/UserContext';

// This function will be passed as a prop from the main Welcome/Auth orchestrator
// For now, it's a placeholder.
// const onGoogleButtonPress = async (name) => {
//   console.log('Google Sign-In initiated with name:', name);
//   // Simulate API call
//   return new Promise(resolve => setTimeout(() => {
//     Alert.alert("Signed In", "Google Sign-In would happen here.");
//     resolve();
//   }, 1500));
// };

function GetStartedScreen({ navigation }) {
  const [name, setName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For Google Sign-In
  const [error, setError] = useState(null); // For Google Sign-In

  const { googleSignInHandler } = useUser();

  const handleContinue = () => {
    if (name.trim() === '') {
      Alert.alert('Name Required', 'Please enter your name.');
      return;
    }
    setNameSubmitted(true);
  };

  const handleGoogleSignInPress = async () => {
    if (!googleSignInHandler) {
        Alert.alert("Error", "Sign-in function not available. Please restart the app.");
        return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await googleSignInHandler(name.trim());
    } catch (e) {
      if (e.code === 'USER_CANCELED' || (e.message && e.message.toLowerCase().includes('cancel'))) {
        console.log("GetStartedScreen: Google Sign-In cancelled by user.");
      } else {
        setError(e.message || 'An error occurred during sign-in.');
        Alert.alert('Sign-In Error', e.message || 'An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>

        <View style={styles.content}>
          {!nameSubmitted ? (
            <>
              <Text style={styles.title}>Let's Get Started!</Text>
              <Text style={styles.subtitle}>What should we call you?</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor={colors.textSecondary}
                autoCapitalize="words"
                returnKeyType="done"
              />
              <TouchableOpacity
                style={[styles.button, (!name.trim()) && styles.disabledButton]}
                onPress={handleContinue}
                disabled={!name.trim()}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Hi, {name.trim()}!</Text>
              <Text style={styles.subtitle}>Choose how you'd like to join:</Text>
              
              <TouchableOpacity
                style={[styles.button, styles.emailButton]}
                onPress={() => navigation.navigate('SignUp', { userName: name.trim() })}
              >
                <Ionicons name="mail-outline" size={20} color={colors.white} style={styles.iconStyle} />
                <Text style={styles.buttonText}>Sign Up with Email</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.googleButton, isLoading && styles.disabledButton]}
                onPress={handleGoogleSignInPress}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.white} />
                ) : (
                  <>
                    <Ionicons name="logo-google" size={20} color={colors.white} style={styles.iconStyle} />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                  </>
                )}
              </TouchableOpacity>
              {error && <Text style={styles.errorText}>{error}</Text>}

              <TouchableOpacity 
                style={styles.linkButton} 
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.linkButtonText}>Already have an account? Sign In</Text>
              </TouchableOpacity>
            </>
          )}
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
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    padding: 10,
    zIndex: 1,
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 50,
  },
  emailButton: {
    backgroundColor: colors.secondary,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  iconStyle: {
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.7,
  },
  errorText: {
    color: colors.danger,
    marginTop: 10,
    textAlign: 'center',
  },
  linkButton: {
    marginTop: 10,
    paddingVertical: 10,
  },
  linkButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default GetStartedScreen; 