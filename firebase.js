// PublicSpeakingApp/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// *** IMPORTANT: Make sure these are your ACTUAL credentials ***
const firebaseConfig = {
  apiKey: "AIzaSyAMsnO2MlWFoXlcp6aNbqLwpcXQaIrIbq0",
  authDomain: "publicspeakingapp-9f1d4.firebaseapp.com",
  projectId: "publicspeakingapp-9f1d4",
  storageBucket: "publicspeakingapp-9f1d4.firebasestorage.app",
  messagingSenderId: "481724800294",
  appId: "1:481724800294:web:896b7d7b9311da0a4535e7",
  measurementId: "G-TP2G7EPK8X"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw error;
}

// Initialize Firebase Auth with persistence
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  console.log("Firebase Auth initialized successfully");
} catch (error) {
  console.error("Firebase Auth initialization error:", error);
  auth = getAuth(app); // Fallback to basic initialization
}

// Initialize Firestore with offline persistence
let db;
try {
  db = getFirestore(app);
  console.log("Firestore initialized successfully");
  
  // For React Native, persistence is enabled by default
  // No need to call enablePersistence()
} catch (error) {
  console.error("Firestore initialization error:", error);
  throw error;
}

export { auth, db };
