import React, { useState, useEffect, useRef } from 'react';
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
  ActivityIndicator,
} from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session'; 

import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import colors from './constants/colors';
import { useUser } from './context/UserContext';

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const { user: currentUser, loading: userLoading, updateUsername } = useUser();
  const mountedRef = useRef(true);

  console.log("🚀 WelcomeScreen: Component mounted");
  console.log("👤 WelcomeScreen: Current user state:", currentUser ? currentUser.uid : "null");
  
  const discovery = AuthSession.useAutoDiscovery('https://accounts.google.com');

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      iosClientId: '1056919787212-hq11eh305niqp59930jhiugccb5uu0ck.apps.googleusercontent.com',
      redirectUri: AuthSession.makeRedirectUri({ 
        scheme: 'com.googleusercontent.apps.1056919787212-hq11eh305niqp59930jhiugccb5uu0ck' 
      }),
      scopes: ['openid', 'profile', 'email'],
    },
    discovery
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Initialize Google Sign-In
  useEffect(() => {
    console.log("🔄 WelcomeScreen: Initializing Google Sign-In");
    const initialize = async () => {
      if (!mountedRef.current) return;
      
      try {
        await GoogleSignin.configure({
          iosClientId: '1056919787212-hq11eh305niqp59930jhiugccb5uu0ck.apps.googleusercontent.com',
          scopes: ['profile', 'email', 'openid']
        });
        if (mountedRef.current) {
          console.log("✅ WelcomeScreen: Google Sign-In configured successfully");
          setIsInitialized(true);
        }
      } catch (error) {
        if (mountedRef.current) {
          console.error("❌ WelcomeScreen: Google Sign-In configuration failed:", error);
          setError("Failed to initialize Google Sign-In. Please try again later.");
=======
    const handleSignInResult = async () => {
      if (response?.type === 'success') {
        const { authentication } = response;
        if (!authentication || !authentication.idToken) {
            Alert.alert('Sign In Failed', 'Could not get ID token from Google.');
            setError('Authentication failed: Missing ID token.');
            return;
        }
        const credential = GoogleAuthProvider.credential(authentication.idToken);
        try {
            console.log("Attempting Firebase sign-in...");
            const userCredential = await signInWithCredential(auth, credential);
            const user = userCredential.user;
            console.log('Firebase Sign-In Success:', user.uid);

            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, {
              uid: user.uid,
              email: user.email,
              name: name.trim() || user.displayName?.split(' ')[0] || 'User', 
              createdAt: new Date(),
            }, { merge: true }); 

            console.log('User data saved to Firestore for:', user.uid);
        } catch (firebaseError) {
            console.error('Firebase Sign-In Error:', firebaseError);
            Alert.alert('Sign In Error', `Failed to sign in with Firebase: ${firebaseError.message}`);
            setError(`Firebase error: ${firebaseError.message}`);
        }
      }
    };

    initialize();
  }, []);

  // Redirect if user is already signed in
  useEffect(() => {
    if (!mountedRef.current) return;
    
    console.log("🔄 WelcomeScreen: Checking user state for redirection");
    if (currentUser && !userLoading) {
      console.log("🔄 WelcomeScreen: User is signed in, redirecting to Home");
      navigation.replace('Home');
    }
  }, [currentUser, userLoading, navigation]);

  const handleGoogleSignIn = async () => {
    if (!mountedRef.current) return;
    
    console.log("🔄 WelcomeScreen: Starting Google Sign-In process");
    
    if (!isInitialized) {
      console.warn("⚠️ WelcomeScreen: Google Sign-In not initialized");
      Alert.alert('Initialization Error', 'Google Sign-In is not ready yet. Please try again in a moment.');
      return;
    }

    const trimmedName = name.trim();
    if (trimmedName === '') {
      console.warn("⚠️ WelcomeScreen: Empty name provided");
      Alert.alert('Name Required', 'Please enter your name before signing in.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      // First, try to update the username
      console.log("📝 WelcomeScreen: Attempting to update username to:", trimmedName);
      try {
        await updateUsername(trimmedName);
        if (mountedRef.current) {
          console.log("✅ WelcomeScreen: Username updated successfully in context");
        }
      } catch (usernameError) {
        console.error("❌ WelcomeScreen: Failed to update username:", usernameError);
        throw new Error('Failed to save username. Please try again.');
      }

      // Wait a moment to ensure context updates are processed
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log("🔄 WelcomeScreen: Starting Google Sign-In");
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log("✅ WelcomeScreen: Google Sign-In response received:", response);
      
      const { idToken } = response?.data;
      if (!idToken) {
        console.error("❌ WelcomeScreen: No ID token in response");
        throw new Error('No ID token present');
      }

      console.log("🔄 WelcomeScreen: Creating Firebase credential");
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);
      const user = userCredential.user;
      console.log("✅ WelcomeScreen: Firebase authentication successful:", user.uid);

      // Add retry logic for Firestore write
      let retryCount = 0;
      const maxRetries = 3;
      
      while (retryCount < maxRetries) {
        try {
          console.log(`🔄 WelcomeScreen: Attempting Firestore write (attempt ${retryCount + 1})`);
          const userDocRef = doc(db, 'users', user.uid);
          const now = new Date();
          
          const userDoc = await getDoc(userDocRef);
          const existingData = userDoc.exists() ? userDoc.data() : {};
          
          const userData = {
            uid: user.uid,
            email: user.email,
            name: trimmedName || user.displayName?.split(' ')[0] || 'User',
            photoURL: user.photoURL || null,
            createdAt: existingData.createdAt || now,
            lastLoginAt: now,
            loginCount: (existingData.loginCount || 0) + 1,
            loginHistory: [
              ...(existingData.loginHistory || []),
              {
                timestamp: now,
                deviceInfo: {
                  platform: Platform.OS,
                  version: Platform.Version,
                }
              }
            ].slice(-10),
            updatedAt: now,
            provider: 'google',
            isActive: true
          };

          await setDoc(userDocRef, userData, { merge: true });
          console.log("✅ WelcomeScreen: User data saved to Firestore successfully");
          break;
        } catch (firestoreError) {
          retryCount++;
          console.warn(`⚠️ WelcomeScreen: Firestore write attempt ${retryCount} failed:`, firestoreError);
          if (retryCount === maxRetries) {
            throw new Error('Failed to save user data after multiple attempts');
          }
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
        }
      }

      // Wait a moment to ensure context updates are processed
      await new Promise(resolve => setTimeout(resolve, 500));

      if (mountedRef.current) {
        console.log("✅ WelcomeScreen: Sign-in process completed successfully");
        // Navigate to Home screen
        navigation.replace('Home');
      }
    } catch (error) {
      if (mountedRef.current) {
        console.error("❌ WelcomeScreen: Sign-in error:", error);
        Alert.alert('Sign In Error', error.message);
        setError(error.message);
      }
    } finally {
      if (mountedRef.current) {
        console.log("🏁 WelcomeScreen: Sign-in process finished");
        setIsLoading(false);
      }
    }
  };

  if (!isInitialized || userLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.primaryDark} />
          <Text style={styles.loadingText}>Initializing...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome!</Text>
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
            style={[styles.continueButton, (!name.trim() || isLoading) && styles.disabledButton]}
            onPress={handleGoogleSignIn}
            disabled={!name.trim() || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={colors.textLight} />
            ) : (
              <Text style={styles.continueButtonText}>Sign in with Google</Text>
            )}
          </TouchableOpacity>

          {error && (
            <Text style={styles.errorText}>Error: {error}</Text>
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
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 30,
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
    backgroundColor: colors.backgroundLight,
    color: colors.textPrimary,
  },
  continueButton: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: colors.shadowColor,
    elevation: 0,
    shadowOpacity: 0,
  },
  continueButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    marginTop: 15,
    color: colors.error,
    fontSize: 14,
    textAlign: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: colors.textSecondary,
    fontSize: 16,
  }
});

export default WelcomeScreen;