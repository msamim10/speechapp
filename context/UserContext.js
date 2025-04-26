import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native'; // Import Platform

// Storage Keys
const USERNAME_KEY = '@userProfile_username';
const AVATAR_URI_KEY = '@userProfile_avatarUri';
const LAST_PRACTICED_KEY = '@userProfile_lastPracticedTimestamp';
const STREAK_KEY = '@userProfile_currentStreak';

// Defaults
const DEFAULT_USERNAME = 'User';
// Define the path to your default avatar image
const DEFAULT_AVATAR = require('../assets/avatars/default_avatar.png');

// --- Date Helper Functions ---
const isSameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const isYesterday = (d1, d2) => {
  const yesterday = new Date(d2);
  yesterday.setDate(d2.getDate() - 1);
  return isSameDay(d1, yesterday);
};
// --- End Date Helpers ---

// Create the context
const UserContext = createContext({
  username: DEFAULT_USERNAME,
  avatarUri: null, // Initialize avatarUri state
  avatarSource: DEFAULT_AVATAR, // Provide default source initially
  currentStreak: 0, // Add streak
  lastPracticedTimestamp: null, // Add timestamp
  isLoading: true,
  updateUsername: async (newUsername) => {}, // Placeholder async function
  updateAvatarUri: async (newUri) => {}, // Placeholder for avatar update
  recordPracticeSession: async () => {}, // Add practice recording function
});

// Create the provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [avatarUri, setAvatarUri] = useState(null); // State for avatar URI
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastPracticedTimestamp, setLastPracticedTimestamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from storage on mount
  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      try {
        const storedUsername = await AsyncStorage.getItem(USERNAME_KEY);
        const storedAvatarUri = await AsyncStorage.getItem(AVATAR_URI_KEY);
        const storedLastPracticed = await AsyncStorage.getItem(LAST_PRACTICED_KEY);
        const storedStreak = await AsyncStorage.getItem(STREAK_KEY);

        setUsername(storedUsername !== null ? storedUsername : DEFAULT_USERNAME);
        setAvatarUri(storedAvatarUri); // Can be null if not set

        // Calculate initial streak based on stored data
        const lastPracticedDate = storedLastPracticed ? new Date(parseInt(storedLastPracticed, 10)) : null;
        const savedStreak = storedStreak ? parseInt(storedStreak, 10) : 0;
        let initialStreak = 0;

        if (lastPracticedDate) {
            const now = new Date();
            if (isSameDay(lastPracticedDate, now) || isYesterday(lastPracticedDate, now)) {
                initialStreak = savedStreak;
            } // else: streak broken, defaults to 0
            setLastPracticedTimestamp(lastPracticedDate.getTime()); // Store timestamp number
        }
        setCurrentStreak(initialStreak);

      } catch (e) {
        console.error('Failed to load user data from storage.', e);
        setUsername(DEFAULT_USERNAME);
        setAvatarUri(null);
        setCurrentStreak(0);
        setLastPracticedTimestamp(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Function to update username and save to storage
  const updateUsername = useCallback(async (newUsername) => {
    const trimmedUsername = newUsername.trim();
    if (trimmedUsername === '') {
      console.warn('Attempted to save empty username.');
      // Optionally, provide feedback to the user via Alert or state
      return; // Prevent saving empty string
    }
    try {
      await AsyncStorage.setItem(USERNAME_KEY, trimmedUsername);
      setUsername(trimmedUsername); // Update state after successful save
      console.log('Username saved successfully:', trimmedUsername);
    } catch (e) {
      console.error('Failed to save username to storage.', e);
      // Optionally, provide feedback to the user
    }
  }, []);

  // Function to update avatar URI and save to storage
  const updateAvatarUri = useCallback(async (newUri) => {
    try {
      if (newUri) {
        await AsyncStorage.setItem(AVATAR_URI_KEY, newUri);
        setAvatarUri(newUri);
        console.log('Avatar URI saved successfully:', newUri);
      } else {
        // Handle case where user might want to remove avatar
        await AsyncStorage.removeItem(AVATAR_URI_KEY);
        setAvatarUri(null);
        console.log('Avatar URI removed.');
      }
    } catch (e) {
      console.error('Failed to save avatar URI to storage.', e);
    }
  }, []);

  // Function to record a practice session completion
  const recordPracticeSession = useCallback(async () => {
    const now = new Date();
    const nowTimestamp = now.getTime();
    let newStreak = 1; // Default for first practice or broken streak

    if (lastPracticedTimestamp) {
      const lastPracticeDate = new Date(lastPracticedTimestamp);
      if (isSameDay(lastPracticeDate, now)) {
        // Already practiced today, streak doesn't change
        newStreak = currentStreak;
        console.log("Practice recorded today already, streak remains:", newStreak);
      } else if (isYesterday(lastPracticeDate, now)) {
        // Practiced yesterday, increment streak
        newStreak = currentStreak + 1;
        console.log("Practiced yesterday, incrementing streak to:", newStreak);
      } // Else: Gap > 1 day, streak resets to 1 (default)
      else {
        console.log("Practice gap detected, resetting streak to 1.");
      }
    }
     else {
        console.log("First practice recorded, setting streak to 1.");
     }

    try {
      await AsyncStorage.setItem(LAST_PRACTICED_KEY, nowTimestamp.toString());
      await AsyncStorage.setItem(STREAK_KEY, newStreak.toString());
      setLastPracticedTimestamp(nowTimestamp);
      setCurrentStreak(newStreak);
      console.log('Practice session recorded. Timestamp:', nowTimestamp, 'New Streak:', newStreak);
    } catch (e) {
      console.error('Failed to save practice session data', e);
    }
  }, [lastPracticedTimestamp, currentStreak]);

  // Determine the source for the Image component
  // If avatarUri exists, use it, otherwise use the default placeholder
  const avatarSource = avatarUri ? { uri: avatarUri } : DEFAULT_AVATAR;

  return (
    <UserContext.Provider value={{
        username,
        avatarUri,
        avatarSource,
        currentStreak,
        lastPracticedTimestamp,
        isLoading,
        updateUsername,
        updateAvatarUri,
        recordPracticeSession
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
}; 