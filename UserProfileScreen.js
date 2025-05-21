import React, { useState, useEffect } from 'react';
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
    currentStreak,
    totalPracticeTime,
    lastPracticedTimestamp,
    isLoading: isContextLoading,
    updateUsername,
    updateAvatarUri,
    signOut,
  } = useUser();

  const [editingUsername, setEditingUsername] = useState('');

  useEffect(() => {
    if (!isContextLoading && currentUsername) {
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
    if (!result.canceled && result.assets && result.assets.length > 0) {
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
      await updateUsername(editingUsername.trim());
      Alert.alert('Success', 'Username updated successfully.');
    } catch (e) {
      console.error('Failed to save username via context.', e);
      Alert.alert('Error', 'Could not save profile data.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error('Failed to logout:', e);
      Alert.alert('Error', 'Failed to logout. Please try again.');
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

  if (isContextLoading) {
    return (
      <SafeAreaView style={styles.loadingContainerSafeArea}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.headerButton}>
          <Ionicons name="settings-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <View style={styles.profileSection}>
            <TouchableOpacity onPress={pickImage} style={styles.avatarTouchable}>
              <Image source={avatarSource} style={styles.avatar} />
              <View style={styles.avatarEditIconContainer}>
                <Ionicons name="camera-reverse-outline" size={20} color={colors.white} />
              </View>
            </TouchableOpacity>
            <Text style={styles.usernameDisplay}>{currentUsername}</Text>
          </View>

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
                <TouchableOpacity onPress={handleSaveUsername} style={styles.saveButton}>
                  <Ionicons name="checkmark-done-outline" size={24} color={colors.primary} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Statistics</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Ionicons name="flame-outline" size={28} color={colors.primary} />
                <Text style={styles.statValue}>{currentStreak || 0}</Text>
                <Text style={styles.statLabel}>Day Streak</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="stats-chart-outline" size={28} color={colors.primary} />
                <Text style={styles.statValue}>{formatPracticeTime(totalPracticeTime)}</Text>
                <Text style={styles.statLabel}>Total Practice</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="calendar-outline" size={28} color={colors.primary} />
                <Text style={styles.statValue}>{formatTimestamp(lastPracticedTimestamp)}</Text>
                <Text style={styles.statLabel}>Last Practiced</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.logoutButton]}>
            <Ionicons name="log-out-outline" size={22} color={colors.white} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight || '#F8F9FA',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  loadingContainerSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight || '#F8F9FA',
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight || '#E9ECEF',
    backgroundColor: colors.white || 'white',
  },
  headerButton: {
    padding: 5,
    width: 38,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary || '#212529',
  },
  scrollContentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarTouchable: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.primary,
    backgroundColor: colors.borderLight,
  },
  avatarEditIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 8,
    borderWidth: 2,
    borderColor: colors.white,
  },
  usernameDisplay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary || '#212529',
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 25,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary || '#343A40',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight || '#F8F9FA',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderLight || '#DEE2E6',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 16,
    color: colors.textPrimary || '#343A40',
  },
  saveButton: {
    padding: 8, 
    marginLeft: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    backgroundColor: colors.white || 'white',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minHeight: 110,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 5,
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonIcon: {
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: colors.danger || '#DC3545',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white || 'white',
  },
});

export default UserProfileScreen; 