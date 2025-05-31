import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useUser } from './context/UserContext';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from './constants/colors';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { signOut as firebaseSignOut, getAuth, deleteUser } from 'firebase/auth';
import { auth, db } from './firebase';

// Date Formatting Helper - Copied from HomeScreen.js for now
const isSameDay = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const formatTimestamp = (timestamp) => {
  if (!timestamp) return 'Never';
  const date = new Date(timestamp);
  const now = new Date();
  if (isSameDay(date, now)) {
    return `Today at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameDay(date, yesterday)) {
    return `Yesterday at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }
  return date.toLocaleDateString([], {
    year: 'numeric', month: 'short', day: 'numeric'
  });
};

function UserProfileScreen() {
  const navigation = useNavigation();
  const {
    username: currentUsername,
    avatarSource,
    isLoading: isContextLoading,
    updateUsername: updateUsernameInContext,
    updateAvatarUri,
    signOut: signOutFromContext,
  } = useUser();

  const [editingUsername, setEditingUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isFetchingSettings, setIsFetchingSettings] = useState(true);
  const [isSavingName, setIsSavingName] = useState(false);
  const [joinedDate, setJoinedDate] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const userId = auth.currentUser?.uid;

  const fetchUserSettings = useCallback(async () => {
    if (!userId) {
      Alert.alert('Error', 'User not found for settings.');
      setIsFetchingSettings(false);
      return;
    }
    setIsFetchingSettings(true);
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setEmail(userData.email || 'No email found');
        if (userData.createdAt) {
          setJoinedDate(userData.createdAt);
        }
      } else {
        Alert.alert('Error', 'User data not found in Firestore for settings.');
      }
    } catch (error) {
      console.error('Error fetching user settings:', error);
      Alert.alert('Error', 'Could not fetch user settings.');
    } finally {
      setIsFetchingSettings(false);
    }
  }, [userId]);

  useEffect(() => {
    if (!isContextLoading && currentUsername) {
      setEditingUsername(currentUsername);
    }
    if (userId) {
      fetchUserSettings();
    }
  }, [currentUsername, isContextLoading, userId, fetchUserSettings]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      await updateAvatarUri(result.assets[0].uri);
      Alert.alert('Success', 'Avatar updated!');
    }
  };

  const handleSaveUsernameAndName = async () => {
    if (editingUsername.trim() === '') {
      Alert.alert('Invalid Input', 'Username cannot be empty.');
      return;
    }
    if (editingUsername.trim() === currentUsername) {
      Alert.alert('No Changes', 'The new name is the same as the current name.');
      return;
    }
    setIsSavingName(true);
    try {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, { name: editingUsername.trim() });
      await updateUsernameInContext(editingUsername.trim());
      Alert.alert('Success', 'Username updated successfully.');
    } catch (e) {
      console.error('Failed to save username/name:', e);
      Alert.alert('Error', 'Could not save profile data.');
    } finally {
      setIsSavingName(false);
    }
  };

  const handleLogoutCombined = async () => {
    try {
      // First, call the context sign out which handles AsyncStorage and local state reset
      await signOutFromContext(); 
      console.log('User signed out successfully via UserContext (AsyncStorage cleared).');
      
      // Then, sign out from Firebase. 
      // Note: signOutFromContext might already call firebaseSignOut. 
      // If UserContext.signOut ALREADY calls firebaseSignOut(auth), this next line might be redundant
      // or could be removed from UserContext.signOut if we want ProfileScreen to be the sole caller of firebaseSignOut.
      // For now, keeping both to ensure Firebase signout happens if not already done by context.
      // await firebaseSignOut(auth); // This might be redundant if signOutFromContext does it.
      // console.log('Firebase sign-out attempt after context signout.');

    } catch (e) {
      console.error('Failed to logout:', e);
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action is irreversible. All your data will be lost.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const user = getAuth().currentUser;
            if (user) {
              try {
                // Delete user data from Firestore
                const userDocRef = doc(db, "users", user.uid);
                await deleteDoc(userDocRef);
                console.log("User data deleted from Firestore.");

                // Delete user from Firebase Authentication
                await deleteUser(user);
                console.log("User deleted from Firebase Auth.");

                Alert.alert("Account Deleted", "Your account and all associated data have been successfully deleted.");
                
                // Navigate to login or home screen
                // Ensure navigation is to a screen that doesn't require auth
                navigation.navigate('AuthCheck'); // Or your initial/auth check screen like 'Login' or 'Welcome'

              } catch (error) {
                console.error("Error deleting account:", error);
                // Provide more specific error messages if possible
                let errorMessage = "Could not delete your account. Please try again.";
                if (error.code === 'auth/requires-recent-login') {
                  errorMessage = "This operation is sensitive and requires recent authentication. Please sign out and sign back in before trying again.";
                }
                Alert.alert("Error", errorMessage);
              }
            } else {
              Alert.alert("Error", "No user found. Please ensure you are signed in.");
            }
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  const handleFeedbackSubmit = async () => {
    if (feedbackText.trim() === '') {
      Alert.alert('Empty Feedback', 'Please write your feedback before submitting.');
      return;
    }
    if (!userId) {
      Alert.alert('Error', 'You must be logged in to submit feedback.');
      return;
    }

    setIsSubmittingFeedback(true);
    try {
      const feedbackCollectionRef = collection(db, 'feedback');
      await addDoc(feedbackCollectionRef, {
        userId: userId,
        username: currentUsername,
        feedbackText: feedbackText.trim(),
        submittedAt: serverTimestamp(),
        status: 'new',
      });
      Alert.alert('Feedback Sent', 'Thank you for your feedback!');
      setFeedbackText('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      Alert.alert('Submission Error', 'Could not send your feedback. Please try again.');
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const formatPracticeTime = (seconds) => {
    if (seconds == null || isNaN(seconds) || seconds < 0) return '0s';
    if (seconds === 0) return '0s';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h > 0 ? h + 'h ' : ''}${m > 0 ? m + 'm ' : ''}${s}s`;
  };

  if (isContextLoading || isFetchingSettings) {
    return (
      <SafeAreaView style={styles.loadingContainerSafeArea}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerButton} />
      </View> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          {/* <View style={styles.profileSection}>
            <TouchableOpacity onPress={pickImage} style={styles.avatarTouchable}>
              <Image source={avatarSource} style={styles.avatar} />
              <View style={styles.avatarEditIconContainer}>
                <Ionicons name="camera-reverse-outline" size={18} color={colors.cardBackground} />
              </View>
            </TouchableOpacity>
            <Text style={styles.usernameDisplay}>{currentUsername}</Text>
            <TouchableOpacity onPress={handleLogoutCombined} style={styles.inlineLogoutButton}>
              <Ionicons name="log-out-outline" size={18} color={colors.textSecondary} style={styles.inlineLogoutIcon} />
              <Text style={styles.inlineLogoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Edit Username</Text>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={20} color={colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={editingUsername}
                onChangeText={setEditingUsername}
                placeholder="Enter new username"
                placeholderTextColor={colors.textPlaceholder}
              />
              {(editingUsername.trim() !== currentUsername && editingUsername.trim() !== '') && (
                <TouchableOpacity onPress={handleSaveUsernameAndName} style={styles.updateUsernameButton}>
                  <Text style={styles.updateUsernameButtonText}>Update</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Account Information</Text>
            <View style={styles.infoRow}>
              <Ionicons name="mail-outline" size={20} color={colors.textSecondary} style={styles.inputIcon} />
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoText}>{email}</Text>
            </View>
            {userId && (
              <View style={styles.infoRow}>
                <Ionicons name="finger-print-outline" size={20} color={colors.textSecondary} style={styles.inputIcon} />
                <Text style={styles.infoLabel}>User ID:</Text>
                <Text style={styles.infoTextSmall} numberOfLines={1} ellipsizeMode="middle">{userId}</Text>
              </View>
            )}
            {/* {joinedDate && (
              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} style={styles.inputIcon} />
                <Text style={styles.infoLabel}>Joined:</Text>
                <Text style={styles.infoText}>{formatTimestamp(joinedDate)}</Text>
              </View>
            )} */}
            {/* Moved Logout Button/Link */}
            <TouchableOpacity onPress={handleLogoutCombined} style={styles.infoRowButton}>
              <Ionicons name="log-out-outline" size={20} color={colors.danger} style={styles.logoutIconStyle} /> 
              <Text style={[styles.infoLabel, styles.logoutButtonText]}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Support</Text>
            <Text style={styles.subtleText}>If you have a question or a suggestion let us know</Text>
            <TextInput
              style={styles.feedbackInput}
              value={feedbackText}
              onChangeText={setFeedbackText}
              placeholder="Write your thoughts here..."
              placeholderTextColor={colors.textSubtle}
              multiline
              numberOfLines={4}
              editable={!isSubmittingFeedback}
            />
            <TouchableOpacity
              style={[
                styles.button,
                styles.submitFeedbackButton,
                isSubmittingFeedback && styles.disabledButton,
              ]}
              onPress={handleFeedbackSubmit}
              disabled={isSubmittingFeedback}
            >
              {isSubmittingFeedback ? (
                <ActivityIndicator size="small" color={colors.textLight} />
              ) : (
                <Text style={styles.buttonText}>Submit Feedback</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Delete Account Button */}
          <TouchableOpacity onPress={handleDeleteAccount} style={[styles.logoutLink, styles.deleteLink]}>
            <Ionicons name="trash-outline" size={20} color={colors.danger} style={styles.logoutLinkIcon} />
            <Text style={[styles.logoutLinkText, styles.deleteLinkText]}>Delete Account</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  loadingContainerSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.textSecondary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.shadowColor,
    backgroundColor: colors.cardBackground,
  },
  headerButton: {
    padding: 8,
    width: 42,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  scrollContentContainer: {
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  avatarTouchable: {
    position: 'relative',
    marginBottom: 12,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    borderRadius: 55,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: colors.accentTeal,
    backgroundColor: colors.backgroundLight,
  },
  avatarEditIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: colors.accentTeal,
    borderRadius: 18,
    padding: 7,
    borderWidth: 2,
    borderColor: colors.cardBackground,
    elevation: 8,
  },
  usernameDisplay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 5,
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 25,
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.shadowColor,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    fontSize: 16,
    color: colors.textPrimary,
    marginRight: 10,
  },
  saveButton: {
    padding: 10,
    marginLeft: 10,
  },
  updateUsernameButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  updateUsernameButtonText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    marginTop: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
  },
  logoutLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
    marginBottom: 10,
    paddingVertical: 8,
  },
  logoutLinkIcon: {
    marginRight: 6,
  },
  logoutLinkText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  deleteLink: {
    marginTop: 10, // Add some space above the delete button
  },
  deleteLinkText: {
    color: colors.danger, // Use a danger color for the text
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
    marginRight: 8,
    minWidth: 80,
  },
  infoText: {
    fontSize: 16,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  infoTextSmall: {
    fontSize: 13,
    color: colors.textSecondary,
    flexShrink: 1,
  },
  feedbackInput: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.shadowColor,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.textPrimary,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  submitFeedbackButton: {
    backgroundColor: colors.accentTeal,
  },
  disabledButton: {
    opacity: 0.7,
  },
  subtleText: {
    fontSize: 14,
    color: colors.textSubtle,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 20,
  },
  inlineLogoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inlineLogoutIcon: {
    marginRight: 6,
  },
  inlineLogoutButtonText: {
    fontSize: 15,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  infoRowButton: { // Style for the logout button when in infoRow
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    paddingVertical: 12, 
    marginTop: 10,
  },
  logoutIconStyle: { // Specific style for the logout icon in this context
    marginRight: 8, // Keep some space between icon and text
    // No color here, it's defined inline
  },
  logoutButtonText: { // Style for the logout button text
    color: colors.danger,
    fontWeight: '600',
  },
});

export default UserProfileScreen; 