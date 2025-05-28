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
          <Ionicons name="arrow-back" size={28} color="#333333" />
        </TouchableOpacity>

        <View style={styles.content}>
          {!nameSubmitted ? (
            <>
              <View style={styles.headerSection}>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.subtitle}>Let's personalize your experience</Text>
              </View>
              
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Your name</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  placeholderTextColor="#A0A0A0"
                  autoCapitalize="words"
                  returnKeyType="done"
                  onSubmitEditing={handleContinue}
                />
              </View>
              
              <TouchableOpacity
                style={[styles.continueButton, (!name.trim()) && styles.disabledButton]}
                onPress={handleContinue}
                disabled={!name.trim()}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={styles.continueIcon} />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.headerSection}>
                <Text style={styles.welcomeBackText}>Welcome, {name.trim()}!</Text>
                <Text style={styles.choiceSubtitle}>Choose your sign-up method</Text>
              </View>
              
              <View style={styles.authOptionsContainer}>
                <TouchableOpacity
                  style={[styles.authButton, styles.emailButton]}
                  onPress={() => navigation.navigate('SignUp', { userName: name.trim() })}
                >
                  <View style={styles.authButtonContent}>
                    <View style={styles.iconContainer}>
                      <Ionicons name="mail-outline" size={24} color="#007AFF" />
                    </View>
                    <View style={styles.authTextContainer}>
                      <Text style={styles.authButtonTitle}>Email</Text>
                      <Text style={styles.authButtonSubtitle}>Sign up with your email address</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                  </View>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.dividerLine} />
                </View>

                <TouchableOpacity
                  style={[styles.authButton, styles.googleButton, isLoading && styles.disabledButton]}
                  onPress={handleGoogleSignInPress}
                  disabled={isLoading}
                >
                  <View style={styles.authButtonContent}>
                    <View style={styles.iconContainer}>
                      {isLoading ? (
                        <ActivityIndicator color="#4285F4" size="small" />
                      ) : (
                        <Ionicons name="logo-google" size={24} color="#4285F4" />
                      )}
                    </View>
                    <View style={styles.authTextContainer}>
                      <Text style={styles.authButtonTitle}>Google</Text>
                      <Text style={styles.authButtonSubtitle}>Continue with Google account</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                  </View>
                </TouchableOpacity>
              </View>

              {error && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              <View style={styles.signInLinkContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.signInLink}>Sign In</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    padding: 12,
    zIndex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'stretch',
  },
  headerSection: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
  welcomeBackText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  choiceSubtitle: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'center',
  },
  inputSection: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 17,
    backgroundColor: '#FAFAFA',
    color: '#000000',
  },
  continueButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  continueIcon: {
    marginLeft: 8,
  },
  authOptionsContainer: {
    marginBottom: 32,
  },
  authButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  authButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  authTextContainer: {
    flex: 1,
  },
  authButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  authButtonSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#999999',
    fontWeight: '500',
  },
  disabledButton: {
    opacity: 0.6,
  },
  errorContainer: {
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#CC0000',
    fontSize: 14,
    textAlign: 'center',
  },
  signInLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  signInText: {
    fontSize: 15,
    color: '#666666',
    marginRight: 4,
  },
  signInLink: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default GetStartedScreen; 