// PublicSpeakingApp/SettingsScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from './firebase';
import colors from './constants/colors'; // Assuming you have a colors file

function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const userId = auth.currentUser?.uid;

  // Fetch user data
  const fetchUserData = useCallback(async () => {
    if (!userId) {
      Alert.alert('Error', 'User not found.');
      setIsLoading(false);
      navigation.navigate('Welcome'); // Or appropriate screen
      return;
    }
    setIsLoading(true);
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setName(userData.name || '');
        setNewName(userData.name || ''); // Initialize edit field
        setEmail(userData.email || 'No email found');
      } else {
        Alert.alert('Error', 'User data not found in Firestore.');
        // Handle case where user exists in Auth but not Firestore
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Could not fetch user data.');
    } finally {
      setIsLoading(false);
    }
  }, [userId, navigation]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle saving the updated name
  const handleSaveName = async () => {
    if (!userId) {
      Alert.alert('Error', 'User not identified.');
      return;
    }
    const trimmedNewName = newName.trim();
    if (trimmedNewName === '' || trimmedNewName === name) {
      Alert.alert('No Changes', 'Please enter a new name to save.');
      return;
    }

    setIsSaving(true);
    try {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, { name: trimmedNewName });
      setName(trimmedNewName); // Update local state to reflect saved name
      Alert.alert('Success', 'Your name has been updated.');
    } catch (error) {
      console.error('Error updating name:', error);
      Alert.alert('Error', 'Could not update your name.');
    } finally {
      setIsSaving(false);
    }
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The onAuthStateChanged listener in App.js will handle navigation
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Sign Out Error:', error);
      Alert.alert('Error', 'Could not sign you out.');
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeAreaLoading}>
        <ActivityIndicator size="large" color={colors.primaryDark} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Current Name:</Text>
          <Text style={styles.infoText}>{name}</Text>
        </View>

        <Text style={styles.label}>Update Name:</Text>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
          placeholder="Enter new name"
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="words"
          returnKeyType="done"
          editable={!isSaving} // Disable input while saving
        />

        <TouchableOpacity
          style={[styles.button, styles.saveButton, (isSaving || newName.trim() === '' || newName.trim() === name) && styles.disabledButton]}
          onPress={handleSaveName}
          disabled={isSaving || newName.trim() === '' || newName.trim() === name}
        >
          {isSaving ? (
            <ActivityIndicator color={colors.textLight} />
          ) : (
            <Text style={styles.buttonText}>Save Name</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signOutButton]}
          onPress={handleSignOut}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  safeAreaLoading: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primaryDark,
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: 8,
    marginRight: 10,
    minWidth: 110, // Align labels
  },
  infoText: {
    fontSize: 16,
    color: colors.primaryDark,
    flexShrink: 1, // Allow text to wrap if needed
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
    color: colors.primaryDark,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  saveButton: {
    backgroundColor: colors.accentTeal,
  },
  signOutButton: {
    backgroundColor: colors.danger, // Or a suitable color for sign out
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: colors.borderLight,
    opacity: 0.7,
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
