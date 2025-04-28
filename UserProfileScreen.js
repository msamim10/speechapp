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
import { useUser } from './context/UserContext';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from './constants/colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGOUT_TIME_KEY = '@userProfile_lastLogoutTime';

function UserProfileScreen() {
  const navigation = useNavigation();
  const {
    username: currentUsername,
    avatarSource,
    isLoading: isContextLoading,
    updateUsername,
    updateAvatarUri,
    signOut,
  } = useUser();

  const [editingUsername, setEditingUsername] = useState('');

  useEffect(() => {
    if (!isContextLoading) {
      setEditingUsername(currentUsername);
    }
  }, [currentUsername, isContextLoading]);

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

    console.log(result);

    if (!result.canceled) {
      await updateAvatarUri(result.assets[0].uri);
      Alert.alert('Success', 'Avatar updated!');
    }
  };

  const handleSaveUsername = async () => {
    if (editingUsername.trim() === '') {
      Alert.alert('Invalid Input', 'Username cannot be empty.');
      return;
    }
    if (editingUsername.trim() === currentUsername) {
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

  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate('Welcome');
    } catch (e) {
      console.error('Failed to logout:', e);
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

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
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={colors.primaryDark} />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.avatarTouchable}>
        <Image source={avatarSource} style={styles.avatar} />
        <View style={styles.editIconContainer}>
            <Ionicons name="pencil" size={18} color={colors.textLight} />
        </View>
      </TouchableOpacity>

      <View style={styles.usernameSection}>
          <Text style={styles.usernameDisplay}>{currentUsername}</Text>
      </View>

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

      <TouchableOpacity 
        onPress={handleLogout} 
        style={styles.logoutButton}
      >
        <Ionicons name="log-out-outline" size={24} color={colors.error} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

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
    paddingTop: 80,
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
    bottom: 0,
    right: 0,
    backgroundColor: colors.primaryDark,
    borderRadius: 15,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.backgroundLight,
  },
  usernameSection: {
      marginBottom: 15,
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
    top: 55,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundLight,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
  },
  logoutText: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default UserProfileScreen; 