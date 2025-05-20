import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Alert,
  TextInput, // Added for placeholder email/password
} from 'react-native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from './context/UserContext'; // <<< ADDED IMPORT

// Placeholder for email/password sign-in
// const handleEmailPasswordSignIn = async (email, password) => {
//   console.log('Email/Password Sign-In initiated with:', email);
//   // Simulate API call
//   return new Promise(resolve => setTimeout(() => {
//     Alert.alert("Signed In", "Email/Password Sign-In would happen here.");
//     resolve();
//   }, 1500));
// };

function SignInScreen({ navigation }) { // Removed route from props
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [errorGoogle, setErrorGoogle] = useState(null);
  // const [email, setEmail] = useState(''); // For placeholder
  // const [password, setPassword] = useState(''); // For placeholder

  const { googleSignInHandler } = useUser(); // <<< GET HANDLER FROM CONTEXT

  const handleGoogleSignInPress = async () => {
    if (!googleSignInHandler) { // Check if handler from context is available
        Alert.alert("Error", "Sign-in function not available. Please restart the app.");
        return;
    }
    setIsLoadingGoogle(true);
    setErrorGoogle(null);
    try {
      await googleSignInHandler(null); // Pass null for name
    } catch (e) {
      // Specific error handling for user cancellation (no alert needed, just stop loading)
      if (e.code === 'USER_CANCELED' || (e.message && e.message.toLowerCase().includes('cancel'))) {
        console.log("SignInScreen: Google Sign-In cancelled by user.");
      } else {
        setErrorGoogle(e.message || 'An error occurred during Google sign-in.');
        Alert.alert('Google Sign-In Error', e.message || 'An unexpected error occurred.');
      }
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Sign in to continue.</Text>

          {/* Placeholder for Email/Password fields - Can be developed later */}
          {/* 
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            onChangeText={setPassword} 
          />
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Sign In", "Email/Password sign-in coming soon!")}>
            <Text style={styles.buttonText}>Sign In with Email</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text> 
          */}

          <TouchableOpacity
            style={[styles.button, styles.googleButton, isLoadingGoogle && styles.disabledButton]}
            onPress={handleGoogleSignInPress}
            disabled={isLoadingGoogle}
          >
            {isLoadingGoogle ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <>
                <Ionicons name="logo-google" size={20} color={colors.white} style={styles.googleIcon} />
                <Text style={styles.buttonText}>Continue with Google</Text>
              </>
            )}
          </TouchableOpacity>
          {errorGoogle && <Text style={styles.errorText}>{errorGoogle}</Text>}
        </View>
      </View>
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
  input: { // Style for placeholder email/password
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
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
  },
  googleButton: {
    backgroundColor: '#4285F4', // Google's blue
  },
  googleIcon: {
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
  orText: { // Style for "OR" text separator
    fontSize: 16,
    color: colors.textSecondary,
    marginVertical: 15,
    textAlign: 'center',
  },
  errorText: {
    color: colors.danger,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignInScreen; 