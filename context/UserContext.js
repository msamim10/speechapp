import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

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
  user: null,
  username: DEFAULT_USERNAME,
  avatarUri: null,
  avatarSource: DEFAULT_AVATAR,
  currentStreak: 0,
  lastPracticedTimestamp: null,
  isLoading: true,
  updateUsername: async (newUsername) => {
    console.log("📝 UserContext: Default updateUsername called");
  },
  updateAvatarUri: async (newUri) => {},
  recordPracticeSession: async () => {},
  signOut: async () => {},
});

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [avatarUri, setAvatarUri] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastPracticedTimestamp, setLastPracticedTimestamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for Firebase auth state changes
  useEffect(() => {
    console.log("🔄 UserContext: Setting up auth state listener");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🔄 UserContext: Auth state changed, user:", user ? user.uid : "null");
      setUser(user);
      if (user) {
        console.log("🔄 UserContext: User is signed in, loading data");
        loadUserData();
      } else {
        console.log("🔄 UserContext: User is signed out, resetting to defaults");
        setUsername(DEFAULT_USERNAME);
        setAvatarUri(null);
        setCurrentStreak(0);
        setLastPracticedTimestamp(null);
        setIsLoading(false);
      }
    });

    return () => {
      console.log("🔄 UserContext: Cleaning up auth state listener");
      unsubscribe();
    };
  }, []);

  // Load user data from storage
  const loadUserData = async () => {
    console.log("📥 UserContext: Starting to load user data");
    setIsLoading(true);
    try {
      const storedUsername = await AsyncStorage.getItem(USERNAME_KEY);
      console.log("📥 UserContext: Loaded stored username:", storedUsername);
      
      const storedAvatarUri = await AsyncStorage.getItem(AVATAR_URI_KEY);
      const storedLastPracticed = await AsyncStorage.getItem(LAST_PRACTICED_KEY);
      const storedStreak = await AsyncStorage.getItem(STREAK_KEY);

      setUsername(storedUsername !== null ? storedUsername : DEFAULT_USERNAME);
      setAvatarUri(storedAvatarUri);

      if (storedLastPracticed) {
        const lastPracticedDate = new Date(parseInt(storedLastPracticed, 10));
        const savedStreak = storedStreak ? parseInt(storedStreak, 10) : 0;
        let initialStreak = 0;

        const now = new Date();
        if (isSameDay(lastPracticedDate, now) || isYesterday(lastPracticedDate, now)) {
          initialStreak = savedStreak;
        }
        setLastPracticedTimestamp(lastPracticedDate.getTime());
        setCurrentStreak(initialStreak);
      }
    } catch (e) {
      console.error("❌ UserContext: Failed to load user data:", e);
      setUsername(DEFAULT_USERNAME);
      setAvatarUri(null);
      setCurrentStreak(0);
      setLastPracticedTimestamp(null);
    } finally {
      console.log("✅ UserContext: Finished loading user data");
      setIsLoading(false);
    }
  };

  // Function to update username and save to storage
  const updateUsername = useCallback(async (newUsername) => {
    console.log("📝 UserContext: Attempting to update username to:", newUsername);
    const trimmedUsername = newUsername.trim();
    if (trimmedUsername === '') {
      console.warn("⚠️ UserContext: Attempted to save empty username");
      return;
    }
    try {
      console.log("📝 UserContext: Saving username to AsyncStorage");
      await AsyncStorage.setItem(USERNAME_KEY, trimmedUsername);
      console.log("📝 UserContext: Updating username state");
      setUsername(trimmedUsername);
      console.log("✅ UserContext: Username updated successfully:", trimmedUsername);
      
      // Force a re-render by updating the state
      setUser(prevUser => ({ ...prevUser }));
    } catch (e) {
      console.error("❌ UserContext: Failed to save username:", e);
      throw e;
    }
  }, []);

  // Function to update avatar URI and save to storage
  const updateAvatarUri = useCallback(async (newUri) => {
    try {
      if (newUri) {
        await AsyncStorage.setItem(AVATAR_URI_KEY, newUri);
        setAvatarUri(newUri);
      } else {
        await AsyncStorage.removeItem(AVATAR_URI_KEY);
        setAvatarUri(null);
      }
    } catch (e) {
      console.error('Failed to save avatar URI to storage.', e);
    }
  }, []);

  // Function to record a practice session completion
  const recordPracticeSession = useCallback(async () => {
    const now = new Date();
    const nowTimestamp = now.getTime();
    let newStreak = 1;

    if (lastPracticedTimestamp) {
      const lastPracticeDate = new Date(lastPracticedTimestamp);
      if (isSameDay(lastPracticeDate, now)) {
        newStreak = currentStreak;
      } else if (isYesterday(lastPracticeDate, now)) {
        newStreak = currentStreak + 1;
      }
    }

    try {
      await AsyncStorage.setItem(LAST_PRACTICED_KEY, nowTimestamp.toString());
      await AsyncStorage.setItem(STREAK_KEY, newStreak.toString());
      setLastPracticedTimestamp(nowTimestamp);
      setCurrentStreak(newStreak);
    } catch (e) {
      console.error('Failed to save practice session data', e);
    }
  }, [lastPracticedTimestamp, currentStreak]);

  // Function to sign out user
  const signOut = useCallback(async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        // Update last logout time in Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          lastLogoutAt: serverTimestamp(),
          isActive: false
        });
      }
      
      await firebaseSignOut(auth);
      // Clear local storage
      await AsyncStorage.multiRemove([USERNAME_KEY, AVATAR_URI_KEY, LAST_PRACTICED_KEY, STREAK_KEY]);
      // Reset state
      setUsername(DEFAULT_USERNAME);
      setAvatarUri(null);
      setCurrentStreak(0);
      setLastPracticedTimestamp(null);
    } catch (e) {
      console.error("❌ UserContext: Failed to sign out:", e);
      throw e;
    }
  }, []);

  // Determine the source for the Image component
  // If avatarUri exists, use it, otherwise use the default placeholder
  const avatarSource = avatarUri ? { uri: avatarUri } : DEFAULT_AVATAR;

  return (
    <UserContext.Provider value={{
      user,
      username,
      avatarUri,
      avatarSource,
      currentStreak,
      lastPracticedTimestamp,
      isLoading,
      updateUsername,
      updateAvatarUri,
      recordPracticeSession,
      signOut
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 