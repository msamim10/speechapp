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
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { auth, db } from './firebase'; 
import colors from './constants/colors'; 

function WelcomeScreen({ navigation }) { 
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: '1056919787212-hq11eh305niqp59930jhiugccb5uu0ck.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    const trimmedName = name.trim();
    if (trimmedName === '') {
      Alert.alert('Name Required', 'Please enter your name before signing in.');
      return;
    }
    setError(null);

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      if (!userInfo.idToken) {
        throw new Error('No ID token present');
      }

      const credential = GoogleAuthProvider.credential(userInfo.idToken);
      const userCredential = await signInWithCredential(auth, credential);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        name: name.trim() || user.displayName?.split(' ')[0] || 'User',
        createdAt: new Date(),
      }, { merge: true });

      console.log('User signed in successfully:', user.uid);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      Alert.alert('Sign In Error', error.message);
      setError(error.message);
    }
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