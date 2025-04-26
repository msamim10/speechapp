import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import colors from './constants/colors'; // Import colors for styling
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import { categoryImageSources, defaultImages, preloadImages } from './constants/imageUtils';
import { UserProvider } from './context/UserContext'; // Import the UserProvider
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Import Screens
import WelcomeScreen from './WelcomeScreen'; // Import the new WelcomeScreen
import HomeScreen from './HomeScreen'; // Home tab component
import CategorySelectionScreen from './CategorySelectionScreen'; // Start of practice flow
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';
import ComingSoonScreen from './ComingSoonScreen'; // Import ComingSoonScreen
import WarmUpScreen from './WarmUpScreen'; // Import the new screen
import UserProfileScreen from './UserProfileScreen'; // Import the new UserProfileScreen
// Removed SavedPromptsScreen and SettingsScreen imports

// Define Navigators
const PracticeStackNav = createNativeStackNavigator(); // Renamed for clarity
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator(); // New Root Stack
const USERNAME_KEY = '@userProfile_username'; // Define key here too

// Sound paths for preloading
const commonSoundPaths = {
  clapping: require('./assets/sounds/clapping.mp3'),
  room: require('./assets/sounds/room.mp3'),
};

// Define the Stack for the Practice Flow
function PracticeStack() {
  return (
    // This Stack Navigator handles navigation within the Practice tab
    <PracticeStackNav.Navigator 
      initialRouteName="CategorySelection" 
      screenOptions={{ headerShown: false }} // Headers managed within this stack if needed, or none
    >
      <PracticeStackNav.Screen 
        name="CategorySelection" 
        component={CategorySelectionScreen} 
        // options={{ title: 'Select Category' }} // Example if header was shown
      />
      <PracticeStackNav.Screen 
        name="PromptSelection" 
        component={PromptSelectionScreen} 
      />
      <PracticeStackNav.Screen 
        name="Teleprompter" 
        component={TeleprompterScreen} 
        // Remove options from here, handle visibility in Tab options
        // options={{
        //   tabBarStyle: { display: 'none' }, 
        // }}
      />
      <PracticeStackNav.Screen 
        name="ComingSoonScreen" 
        component={ComingSoonScreen} 
      />
    </PracticeStackNav.Navigator>
  );
}

// Define the Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({ 
        headerShown: false, 
        tabBarActiveTintColor: colors.accentTeal,
        tabBarInactiveTintColor: colors.playfulIconInactive,
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PracticeTab') {
            iconName = focused ? 'mic' : 'mic-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;
          if (route.name === 'HomeTab') {
            label = 'Home';
          } else if (route.name === 'PracticeTab') {
            label = 'Practice';
          } else if (route.name === 'ProfileTab') {
            label = 'Profile';
          }
          return <Text style={[styles.tabLabelStyle, { color: color }]}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ 
          // title: 'Home' // Title is now handled by tabBarLabel
        }} 
      />
      <Tab.Screen 
        name="PracticeTab" 
        component={PracticeStack} 
        options={{ 
          // title: 'Practice' // Title is now handled by tabBarLabel
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={UserProfileScreen}
        options={{ 
          // title: 'Profile' // Title is now handled by tabBarLabel
        }}
      />
    </Tab.Navigator>
  );
}

// Main App Component using the Root Stack
function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [initialRoute, setInitialRoute] = useState(null); // State for initial route name

  useEffect(() => {
    async function prepareApp() {
      console.log('Starting app preparation...'); // Log start
      try {
        // Check if username exists in AsyncStorage
        console.log('Checking AsyncStorage for key:', USERNAME_KEY); // Log key
        const storedUsername = await AsyncStorage.getItem(USERNAME_KEY);
        console.log('AsyncStorage returned:', storedUsername); // Log result

        const startRoute = storedUsername ? 'MainTabs' : 'Welcome';
        setInitialRoute(startRoute);
        console.log('Initial route determined:', startRoute);

        // Configure Audio
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });

        // Preload essential images
        const imagesToPreload = [
          ...Object.values(categoryImageSources),
          ...Object.values(defaultImages)
        ];
        await preloadImages(imagesToPreload);

      } catch (error) {
        console.error('Error preparing app:', error);
        // Default to Welcome screen on error during check
        console.log('Error occurred, setting initial route to Welcome'); // Log error case
        setInitialRoute('Welcome'); 
      } finally {
         // Assets are considered loaded after check/preload attempt
        console.log('App preparation finished.'); // Log finish
        setAssetsLoaded(true);
      }
    }

    prepareApp();
  }, []);

  // Show loading indicator until initial route is determined AND assets are loaded
  if (!assetsLoaded || !initialRoute) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accentTeal} />
        <Text style={styles.loadingText}>Preparing App...</Text>
      </View>
    );
  }

  return (
    // UserProvider needs to wrap NavigationContainer
    <UserProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={initialRoute} // Set initial route dynamically
          screenOptions={{ headerShown: false }}
        >
          {/* Welcome screen (only shown first time) */}
          <RootStack.Screen name="Welcome" component={WelcomeScreen} />
          {/* Main Tab screen group */}
          <RootStack.Screen name="MainTabs" component={MainTabs} />
          {/* Standalone WarmUp Screen */}
          <RootStack.Screen name="WarmUp" component={WarmUpScreen} />
          {/* Standalone Teleprompter for Quick Practice */}
          <RootStack.Screen name="TeleprompterScreen" component={TeleprompterScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

// Helper function to determine tab bar visibility
const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'CategorySelection';
  if (routeName === 'Teleprompter' || routeName === 'Welcome') { // Hide tabs on Teleprompter and Welcome
    return 'none';
  }
  return 'flex';
};

// Add StyleSheet for the tab label if not already present or define inline
const styles = StyleSheet.create({
    tabLabelStyle: {
        fontSize: 10,
        // fontFamily: 'Inter-Regular', // Optional font
        // Add other styling as needed
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.backgroundLight,
    },
    loadingText: {
      marginTop: 10,
      fontSize: 16,
      color: colors.primaryDark,
    }
});

export default App;
