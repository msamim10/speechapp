import React, { useState, useEffect } from 'react';
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
  ScrollView,
} from 'react-native';
import colors from './constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth, db } from './firebase'; // Assuming db is exported for Firestore
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // For creating user document

function SignUpScreen({ navigation, route }) {
  const initialUserNameFromParams = route.params?.userName || '';
  
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState(initialUserNameFromParams);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }
    // Basic email validation (can be more robust)
    if (!email.includes('@') || !email.includes('.')) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        Alert.alert("Weak Password", "Password should be at least 6 characters long.");
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a user document in Firestore
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          displayName: displayName.trim() || email.split('@')[0],
          photoURL: null, // Or a default avatar URL
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          // Add any other default fields you want for a new user
        });
        console.log("User account created & Firestore document saved!");
      }
      // Navigation to MainStack will be handled by onAuthStateChanged in App.js
    } catch (e) {
      let friendlyMessage = "An unexpected error occurred during sign-up.";
      switch (e.code) {
        case 'auth/email-already-in-use':
          friendlyMessage = "This email address is already in use.";
          break;
        case 'auth/invalid-email':
          friendlyMessage = "The email address is not valid.";
          break;
        case 'auth/weak-password':
          friendlyMessage = "The password is too weak. Please choose a stronger password.";
          break;
        default:
          friendlyMessage = e.message;
          break;
      }
      setError(friendlyMessage);
      Alert.alert('Sign-Up Error', friendlyMessage);
      console.error("Sign-Up Error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </TouchableOpacity>

          <View style={styles.content}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join us to start your practice!</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name or Nickname"
              value={displayName}
              onChangeText={setDisplayName}
              autoCapitalize="words"
              placeholderTextColor={colors.textSecondary}
            />
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
              placeholder="Password (min. 6 characters)"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={colors.textSecondary}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor={colors.textSecondary}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity 
              style={[styles.button, isLoading && styles.disabledButton]} 
              onPress={handleSignUp}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.linkButton}>
              <Text style={styles.linkButtonText}>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
    justifyContent: 'center',
    minHeight: 50,
    marginBottom: 15,
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
    marginBottom: 10, // Added margin bottom for spacing
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

export default SignUpScreen; 