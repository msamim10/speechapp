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
const POINTS_KEY = '@userProfile_points';

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

// --- Name Helper Function ---
const getFirstName = (fullName) => {
  if (!fullName || typeof fullName !== 'string') {
    return ''; // Return empty string or a default if no name
  }
  return fullName.split(' ')[0]; // Get the first part of the name
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
  points: 0,
  isLoading: true,
  updateUsername: async (newUsername) => {
    console.log("📝 UserContext: Default updateUsername called");
  },
  updateAvatarUri: async (newUri) => {},
  recordPracticeSession: async () => {},
  incrementPoints: async () => {},
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
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for Firebase auth state changes
  useEffect(() => {
    console.log("🔄 UserContext: Setting up auth state listener");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("🔄 UserContext: Auth state changed, user:", currentUser ? currentUser.uid : "null");
      setUser(currentUser);
      if (currentUser) {
        console.log("🔄 UserContext: User is signed in, loading data for UID:", currentUser.uid);
        loadUserDataFromFirestore(currentUser);
      } else {
        console.log("🔄 UserContext: User is signed out, resetting to defaults");
        setUsername(DEFAULT_USERNAME);
        setAvatarUri(null);
        setCurrentStreak(0);
        setLastPracticedTimestamp(null);
        setPoints(0);
        setIsLoading(false);
      }
    });

    return () => {
      console.log("🔄 UserContext: Cleaning up auth state listener");
      unsubscribe();
    };
  }, []);

  // Load user data from storage AND FIRESTORE
  const loadUserDataFromFirestore = async (firebaseUser) => {
    if (!firebaseUser || !firebaseUser.uid) {
      console.warn("⚠️ UserContext: loadUserDataFromFirestore called without a firebaseUser or UID.");
      setIsLoading(false);
      return;
    }
    console.log("📥 UserContext: Starting to load user data from Firestore for UID:", firebaseUser.uid);
    setIsLoading(true);
    let displayNameFromStore = null;
    let finalUsername = DEFAULT_USERNAME;

    try {
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        console.log(" Firestore user data:", userData);
        displayNameFromStore = userData.displayName;
        if (displayNameFromStore) {
          finalUsername = getFirstName(displayNameFromStore);
        } else if (firebaseUser.email) { // Fallback to email prefix if displayName is missing
          finalUsername = getFirstName(firebaseUser.email.split('@')[0]);
        }
        // Persist the determined username to AsyncStorage
        await AsyncStorage.setItem(USERNAME_KEY, finalUsername);
      } else {
        console.log(" User document does not exist in Firestore. Will use default/email-based name.");
        // If no Firestore doc, try to construct a name from Firebase Auth user email if available
        if (firebaseUser.email) {
          finalUsername = getFirstName(firebaseUser.email.split('@')[0]);
          await AsyncStorage.setItem(USERNAME_KEY, finalUsername); // Save it
        } else {
          await AsyncStorage.setItem(USERNAME_KEY, DEFAULT_USERNAME); // Save default
        }
      }
      setUsername(finalUsername);

      // Load other data from AsyncStorage as before
      const storedAvatarUri = await AsyncStorage.getItem(AVATAR_URI_KEY);
      const storedLastPracticed = await AsyncStorage.getItem(LAST_PRACTICED_KEY);
      const storedStreak = await AsyncStorage.getItem(STREAK_KEY);
      const storedPoints = await AsyncStorage.getItem(POINTS_KEY);

      setAvatarUri(storedAvatarUri);
      setPoints(storedPoints ? parseInt(storedPoints, 10) : 0);

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
      console.error("❌ UserContext: Failed to load user data from Firestore/AsyncStorage:", e);
      // Fallback to defaults in case of error, potentially also clear USERNAME_KEY
      setUsername(DEFAULT_USERNAME);
      await AsyncStorage.setItem(USERNAME_KEY, DEFAULT_USERNAME);
      setAvatarUri(null);
      setCurrentStreak(0);
      setLastPracticedTimestamp(null);
      setPoints(0);
    } finally {
      console.log("✅ UserContext: Finished loading user data. Username set to:", finalUsername, "Points:", points);
      setIsLoading(false);
    }
  };

  // Function to update username and save to storage AND FIRESTORE
  const updateUsernameInContextAndStorage = useCallback(async (newUsername) => {
    console.log("📝 UserContext: Attempting to update username (display name) to:", newUsername);
    const trimmedUsername = newUsername.trim();
    if (trimmedUsername === '') {
      console.warn("⚠️ UserContext: Attempted to save empty username");
      Alert.alert("Invalid Name", "Display name cannot be empty.");
      return false; // Indicate failure
    }
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, { displayName: trimmedUsername, updatedAt: serverTimestamp() });
        console.log(" Firestore displayName updated.");
      }
      // Update AsyncStorage with the potentially full new name
      await AsyncStorage.setItem(USERNAME_KEY, getFirstName(trimmedUsername)); 
      setUsername(getFirstName(trimmedUsername)); // Update context state with first name
      console.log("✅ UserContext: Username updated successfully. Context state (first name):", getFirstName(trimmedUsername));
      return true; // Indicate success
    } catch (e) {
      console.error("❌ UserContext: Failed to save username:", e);
      Alert.alert("Error", "Could not update your name. Please try again.");
      throw e; // Re-throw for caller to handle if needed
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

  // Function to increment points
  const incrementPoints = useCallback(async () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    try {
      await AsyncStorage.setItem(POINTS_KEY, newPoints.toString());
      console.log("✅ UserContext: Points incremented to", newPoints);
      if (newPoints > 0 && newPoints % 10 === 0) {
        Alert.alert(
          "🎉 Milestone Reached! 🎉",
          `Congratulations! You've reached ${newPoints} points! Keep up the great work!`,
          [{ text: "Awesome!" }]
        );
      }
    } catch (e) {
      console.error("❌ UserContext: Failed to save points:", e);
    }
  }, [points]);

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
      await AsyncStorage.multiRemove([USERNAME_KEY, AVATAR_URI_KEY, LAST_PRACTICED_KEY, STREAK_KEY, POINTS_KEY]);
      // Reset state
      setUsername(DEFAULT_USERNAME);
      setAvatarUri(null);
      setCurrentStreak(0);
      setLastPracticedTimestamp(null);
      setPoints(0);
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

      // Create Firebase credential
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, googleCredential);
      const firebaseUser = userCredential.user;

      // Save/Update user data in Firestore
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        const userDataToSet = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: finalName, // This is the full name from Google or input
          photoURL: googleUserInfo?.photo || firebaseUser.photoURL || null,
          lastLoginAt: serverTimestamp(),
          isActive: true,
        };
        if (userDocSnap.exists()) {
          await updateDoc(userDocRef, userDataToSet);
          console.log("UserContext: Google Sign-In - Firestore document updated for UID:", firebaseUser.uid);
        } else {
          userDataToSet.createdAt = serverTimestamp();
          await setDoc(userDocRef, userDataToSet);
          console.log("UserContext: Google Sign-In - New Firestore document created for UID:", firebaseUser.uid);
        }
        // The onAuthStateChanged listener will call loadUserDataFromFirestore, 
        // which will parse and set the first name for the greeting.
      }

      // The username state (for greeting) will be updated by onAuthStateChanged -> loadUserDataFromFirestore
      // No need to call updateUsernameInContextAndStorage here directly, as it will be handled.

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
      points,
      isLoading,
      updateUsername: updateUsernameInContextAndStorage,
      updateAvatarUri,
      recordPracticeSession,
      incrementPoints,
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