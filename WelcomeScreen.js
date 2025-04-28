import React, { useState, useEffect } from 'react';
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
  Button, 
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
// import * as AuthSession from 'expo-auth-session'; 
import * as Google from "expo-auth-session/providers/google";
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; 
import { auth, db } from './firebase'; 
import colors from './constants/colors'; 

WebBrowser.maybeCompleteAuthSession();

function WelcomeScreen({ navigation }) { 
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const WEB_CLIENT_ID = '481724800294-ddn93373khp84q3b8oi3v9v09182dl17.apps.googleusercontent.com';
  const IOS_CLIENT_ID = '481724800294-qf8tpubdlkthcu1dskrmv1ju0lg8vo9r.apps.googleusercontent.com';
  const config = {
    iosClientId: IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    scopes: ['openid', 'profile', 'email'],
  };
  const [request, response, promptAsync] = Google.useAuthRequest(config);

  useEffect(() => {
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
      } else if (response?.type === 'error') {
          console.error('Google Sign-In Error:', response.error);
          Alert.alert('Sign In Error', `Google Sign-In failed: ${response.error?.message || 'Unknown error'}`);
          setError(`Google error: ${response.error?.message}`);
      } else if (response?.type === 'cancel') {
          console.log('Google Sign-In Cancelled');
      }
    };

    if (response) {
        handleSignInResult();
    }
  }, [response]); 

  const handleGoogleSignIn = () => {
    const trimmedName = name.trim();
    if (trimmedName === '') {
      Alert.alert('Name Required', 'Please enter your name before signing in.');
      return;
    }
    setError(null); 
    console.log('Prompting Google Sign-In...');
    promptAsync();
  };

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
            style={[styles.continueButton, !name.trim() && styles.disabledButton]} 
            onPress={handleGoogleSignIn} 
            disabled={!name.trim()} 
          >
            <Text style={styles.continueButtonText}>Sign in with Google</Text>
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
    backgroundColor: colors.borderLight, 
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
  }
});

export default WelcomeScreen;