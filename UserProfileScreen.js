import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
// Remove direct AsyncStorage import if no longer needed directly here
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from './context/UserContext'; // Import the custom hook
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons for save button
import colors from './constants/colors'; // Import colors for styling
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Remove the key definition if using context's key
// const USERNAME_KEY = '@userProfile_username';

// --- Date Formatting Helper ---
// const formatTimestamp = (timestamp) => {
//   if (!timestamp) return 'Never';
//   const date = new Date(timestamp);
//   const now = new Date();
//
//   // Simple relative dates
//   if (isSameDay(date, now)) {
//     return `Today at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
//   }
//   const yesterday = new Date(now);
//   yesterday.setDate(now.getDate() - 1);
//   if (isSameDay(date, yesterday)) {
//     return `Yesterday at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
//   }
//
//   // Default date format for older dates
//   return date.toLocaleDateString([], {
//     year: 'numeric', month: 'short', day: 'numeric'
//   });
// };
//
// // Re-add isSameDay here as it's used in formatTimestamp
// const isSameDay = (d1, d2) => {
//   return d1.getFullYear() === d2.getFullYear() &&
//          d1.getMonth() === d2.getMonth() &&
//          d1.getDate() === d2.getDate();
// };
// --- End Date Formatting ---

function UserProfileScreen() {
  const navigation = useNavigation(); // Get navigation object
  // Get data and functions from context
  const {
    username: currentUsername,
    avatarSource, // Get the resolved image source
    // currentStreak,
    // lastPracticedTimestamp,
    isLoading: isContextLoading,
    updateUsername,
    updateAvatarUri, // Get the update function
  } = useUser();

  // Local state for the input field only
  const [editingUsername, setEditingUsername] = useState('');

  // Initialize local editing state when context data loads or changes
  useEffect(() => {
    if (!isContextLoading) {
      setEditingUsername(currentUsername);
    }
  }, [currentUsername, isContextLoading]);

  // --- Image Picker Logic --- //
  const pickImage = async () => {
    // Request permissions first
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Allow basic editing (crop/rotate)
      aspect: [1, 1], // Force square aspect ratio
      quality: 0.5, // Reduce quality slightly for storage/performance
    });

    console.log(result);

    if (!result.canceled) {
      // Update the avatar URI in the context
      await updateAvatarUri(result.assets[0].uri);
      Alert.alert('Success', 'Avatar updated!');
    }
  };
  // --- End Image Picker Logic --- //

  // Save username using the context's update function
  const handleSaveUsername = async () => {
    if (editingUsername.trim() === '') {
      Alert.alert('Invalid Input', 'Username cannot be empty.');
      return;
    }
    if (editingUsername.trim() === currentUsername) {
      // Optional: Don't show success if username hasn't changed
      return;
    }
    try {
      await updateUsername(editingUsername);
      Alert.alert('Success', 'Username updated successfully.');
    } catch (e) {
      console.error('Failed to save username via context.', e);
      Alert.alert('Error', 'Could not save profile data.');
    }
  };

  // Add Back Handler
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Display loading indicator based on context loading state
  if (isContextLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Add Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primaryDark} />
      </TouchableOpacity>

      {/* Avatar Display and Selection */}
      <TouchableOpacity onPress={pickImage} style={styles.avatarTouchable}>
        <Image source={avatarSource} style={styles.avatar} />
        <View style={styles.editIconContainer}>
            <Ionicons name="pencil" size={18} color={colors.textLight} />
        </View>
      </TouchableOpacity>

      {/* Username Display */}
      <View style={styles.usernameSection}>
          <Text style={styles.usernameDisplay}>{currentUsername}</Text>
      </View>

      {/* Username Edit Section */}
      <View style={styles.fieldContainer}>
        <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={editingUsername}
              onChangeText={setEditingUsername}
              placeholder="Edit username"
              placeholderTextColor={colors.textSecondary}
            />
            {editingUsername !== currentUsername && editingUsername.trim() !== '' && (
                 <TouchableOpacity onPress={handleSaveUsername} style={styles.saveButton}>
                    <Ionicons name="checkmark-circle" size={28} color={colors.success} />
                 </TouchableOpacity>
            )}
        </View>
      </View>

      {/* Spacer to push content */}
      <View style={{ flex: 1 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80, // Increased paddingTop to make space for back button
  },
  avatarTouchable: {
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.accentTeal,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0, // Adjusted position slightly
    right: 0, // Adjusted position slightly
    backgroundColor: colors.primaryDark,
    borderRadius: 15,
    padding: 5,
    borderWidth: 2, // Add border to make it pop
    borderColor: colors.backgroundLight, // Match background
  },
  usernameSection: {
      marginBottom: 15, // Reduced margin before stats
      alignItems: 'center',
  },
  usernameDisplay: {
      fontSize: 22,
      fontWeight: '600',
      color: colors.primaryDark,
  },
  fieldContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 12,
    backgroundColor: colors.backgroundLight,
    paddingLeft: 15,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.primaryDark,
  },
  saveButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    position: 'absolute',
    top: 55, // Adjust as needed for status bar height
    left: 20,
    zIndex: 10,
    padding: 8,
  },
});

export default UserProfileScreen; 