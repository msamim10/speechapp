import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import colors from './constants/colors';

// Configure Google Sign-In
GoogleSignin.configure({
  iosClientId: '1056919787212-hq11eh305niqp59930jhiugccb5uu0ck.apps.googleusercontent.com',
  scopes: ['openid', 'profile', 'email'],
  webClientId: '1056919787212-hq11eh305niqp59930jhiugccb5uu0ck.apps.googleusercontent.com',
  offlineAccess: true,
});

const GoogleSignIn = ({ onSignInSuccess, onSignInError, disabled }) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onSignInSuccess(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        onSignInError('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        onSignInError('Sign in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        onSignInError('Play services not available or outdated');
      } else {
        onSignInError(error.message);
      }
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, disabled && styles.disabledButton]} 
      onPress={signIn}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
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
    backgroundColor: colors.primaryDark,
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoogleSignIn; 