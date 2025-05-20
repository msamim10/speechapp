import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, Alert } from 'react-native';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut as firebaseSignOut, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, updateDoc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
  googleSignInHandler: async (userNameFromInput) => {
    console.warn("UserContext: Default googleSignInHandler called. This should be overridden by the provider.");
    throw new Error("Google Sign-In not implemented in default context.");
  },
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

  // Function to sign in with Google
  const googleSignInHandler = useCallback(async (userNameFromInput) => {
    // Note: GoogleSignin.configure should be called once, typically at app start (e.g., in WelcomeScreen or App.js useEffect)
    // We assume it has been configured before this handler is called.
    console.log("UserContext: googleSignInHandler called with name:", userNameFromInput);
    try {
      await GoogleSignin.hasPlayServices();
      const googleResponse = await GoogleSignin.signIn();
      console.log("UserContext: Raw googleResponse from GoogleSignin.signIn():", JSON.stringify(googleResponse, null, 2));

      // Correctly destructure from googleResponse.data
      const { idToken, user: googleUserInfo } = googleResponse?.data || {}; 

      if (!idToken) {
        console.error("UserContext: idToken is missing from Google response. Full response was:", JSON.stringify(googleResponse, null, 2));
        throw new Error('Google Sign-In failed: No ID token received from response.data.');
      }

      let finalName = userNameFromInput;
      if (!finalName && googleUserInfo?.name) {
        finalName = googleUserInfo.name.split(' ')[0]; // Use first name from Google
      } else if (!finalName) {
        finalName = DEFAULT_USERNAME; // Fallback name
      }

      // Update username in context and AsyncStorage immediately
      // This might be slightly redundant if auth state change also loads it, but ensures UI consistency.
      try {
        await updateUsername(finalName); 
      } catch (nameUpdateError) {
        console.warn("UserContext: Failed to update username during sign-in, proceeding:", nameUpdateError);
      }

      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);
      const firebaseUser = userCredential.user;

      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const now = new Date();
      const userDocSnap = await getDoc(userDocRef);
      const existingData = userDocSnap.exists() ? userDocSnap.data() : {};

      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: finalName, 
        photoURL: firebaseUser.photoURL || googleUserInfo?.photo || null,
        createdAt: existingData.createdAt || now,
        lastLoginAt: now,
        loginCount: (existingData.loginCount || 0) + 1,
        loginHistory: [
          ...(existingData.loginHistory || []),
          { timestamp: now, deviceInfo: { platform: Platform.OS, version: Platform.Version?.toString() } }, // Ensure version is string
        ].slice(-10),
        updatedAt: now,
        provider: 'google',
        isActive: true,
      };

      await setDoc(userDocRef, userData, { merge: true });
      console.log("UserContext: Firebase authentication and Firestore save successful for", firebaseUser.uid);
      // Auth state listener in App.js should handle navigation to MainStack
      // setUser(firebaseUser) will be triggered by onAuthStateChanged listener

    } catch (error) {
      console.error("UserContext: Google Sign-In or Firestore error:", error);
      if (error.code === 'USER_CANCELED') {
        // Don't show alert here, let calling screen handle UI for cancellation
      } else if (error.message && error.message.includes('NETWORK_ERROR')) {
        Alert.alert('Network Error', 'Please check your internet connection and try again.');
      }
      // Re-throw for the calling screen to handle specific UI updates (e.g., stop loading indicator)
      throw error; 
    }
  }, [updateUsername]);

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
      signOut,
      googleSignInHandler,
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