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

// Import Screens
import HomeScreen from './HomeScreen'; // Home tab component
import CategorySelectionScreen from './CategorySelectionScreen'; // Start of practice flow
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';
import ComingSoonScreen from './ComingSoonScreen'; // Import ComingSoonScreen
import WarmUpScreen from './WarmUpScreen'; // Import the new screen
import ProfileScreen from './ProfileScreen'; // Import the new ProfileScreen
// Removed SavedPromptsScreen and SettingsScreen imports

// Define Navigators
const PracticeStackNav = createNativeStackNavigator(); // Renamed for clarity
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator(); // New Root Stack

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
        component={ProfileScreen}
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

  useEffect(() => {
    async function preloadAssets() {
      try {
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

        // Add a small delay to ensure everything is loaded
        setTimeout(() => {
          setAssetsLoaded(true);
        }, 300);
      } catch (error) {
        console.error('Error preloading assets:', error);
        // Continue anyway to not block the app
        setAssetsLoaded(true);
      }
    }

    preloadAssets();
  }, []);

  if (!assetsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accentTeal} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* Root Stack Navigator handles Tabs and Modal/Standalone screens */}
      <RootStack.Navigator
        screenOptions={{ headerShown: false }} // Hide header for RootStack screens by default
      >
        {/* Main Tab screen group */}
        <RootStack.Screen 
          name="MainTabs" 
          component={MainTabs} 
          // No header needed here as tabs handle their structure
        />
        {/* Standalone WarmUp Screen */}
        <RootStack.Screen 
          name="WarmUp" 
          component={WarmUpScreen} 
          // Options for WarmUpScreen (e.g., presentation style, header)
          // options={{ presentation: 'modal' }} // Optional: Make it look like a modal
        />
        {/* Standalone Teleprompter for Quick Practice */}
        <RootStack.Screen 
          name="TeleprompterScreen" 
          component={TeleprompterScreen} 
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// Helper function to determine tab bar visibility
const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'CategorySelection'; // Default if no route found
  if (routeName === 'Teleprompter') {
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
