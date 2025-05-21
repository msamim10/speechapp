import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Ionicons from '@expo/vector-icons/Ionicons';

import colors from './constants/colors';

function WelcomeScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [isInitializingGS, setIsInitializingGS] = useState(true);

  useEffect(() => {
    const initializeGoogleSignIn = async () => {
      try {
        console.log("WelcomeScreen: Configuring Google Sign-In...");
        await GoogleSignin.configure({
          iosClientId: '481724800294-qf8tpubdlkthcu1dskrmv1ju0lg8vo9r.apps.googleusercontent.com',
          scopes: ['profile', 'email', 'openid'],
        });
        console.log("WelcomeScreen: Google Sign-In configured.");
        setIsInitializingGS(false);
      } catch (err) {
        console.error("WelcomeScreen: Failed to initialize Google Sign-In:", err);
        setError("Google Sign-In setup failed. Please restart the app or try again later.");
        setIsInitializingGS(false);
      }
    };
    initializeGoogleSignIn();
  }, []);

  if (isInitializingGS) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerCentered}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Initializing Sign-In...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf-outline" size={80} color={colors.primary} /> 
          <Text style={styles.appName}>SpeechApp</Text>
        </View>

          <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Choose how you'd like to start.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GetStarted')}
          disabled={isInitializingGS}
        >
          <Ionicons name="person-add-outline" size={20} color={colors.white} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

          <TouchableOpacity
          style={[styles.button, styles.signInButton]}
          onPress={() => navigation.navigate('SignIn')}
          disabled={isInitializingGS}
          >
          <Ionicons name="log-in-outline" size={20} color={colors.primary} style={styles.buttonIconAlt} />
          <Text style={[styles.buttonText, styles.signInButtonText]}>Sign In</Text>
          </TouchableOpacity>

          {error && (
          <Text style={styles.errorText}>{error}</Text>
          )}
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
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 10,
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
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    maxWidth: 350,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonIconAlt: {
    marginRight: 10,
    color: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  signInButtonText: {
    color: colors.primary,
  },
  errorText: {
    color: colors.danger,
    marginTop: 20,
    textAlign: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
      color: colors.textSecondary
  },
});

export default WelcomeScreen;