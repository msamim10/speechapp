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
  TextInput,
} from 'react-native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from './context/UserContext';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignInScreen({ navigation }) {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [errorGoogle, setErrorGoogle] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);

  const { googleSignInHandler } = useUser();

  const handleGoogleSignInPress = async () => {
    if (!googleSignInHandler) {
        Alert.alert("Error", "Sign-in function not available. Please restart the app.");
        return;
    }
    setIsLoadingGoogle(true);
    setErrorGoogle(null);
    try {
      await googleSignInHandler(null);
    } catch (e) {
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

  const handleEmailPasswordSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }
    setIsLoadingEmail(true);
    setErrorEmail(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Email Sign-In Successful");
    } catch (e) {
      let friendlyMessage = "An unexpected error occurred during sign-in.";
      switch (e.code) {
        case 'auth/user-not-found':
          friendlyMessage = "No user found with this email. Please sign up or check your email.";
          break;
        case 'auth/wrong-password':
          friendlyMessage = "Incorrect password. Please try again.";
          break;
        case 'auth/invalid-email':
          friendlyMessage = "The email address is not valid.";
          break;
        default:
          friendlyMessage = e.message;
          break;
      }
      setErrorEmail(friendlyMessage);
      Alert.alert('Sign-In Error', friendlyMessage);
      console.error("Email Sign-In Error:", e);
    } finally {
      setIsLoadingEmail(false);
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

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={colors.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={colors.textSecondary}
          />
          {errorEmail && <Text style={styles.errorText}>{errorEmail}</Text>}
          <TouchableOpacity 
            style={[styles.button, styles.emailButton, isLoadingEmail && styles.disabledButton]} 
            onPress={handleEmailPasswordSignIn}
            disabled={isLoadingEmail}
          >
            {isLoadingEmail ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Sign In with Email</Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

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
  input: {
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
    minHeight: 50,
  },
  emailButton: {
    backgroundColor: colors.primary,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    marginTop: 10,
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
  orText: {
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
  linkButton: {
    marginTop: 15,
    paddingVertical: 10,
  },
  linkButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SignInScreen; 