import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import colors from './constants/colors'; 
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { categoryImageSources, defaultImages, preloadImages } from './constants/imageUtils';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UserProvider } from './context/UserContext';

import WelcomeScreen from './WelcomeScreen'; 
import HomeScreen from './HomeScreen'; 
import CategorySelectionScreen from './CategorySelectionScreen'; 
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';
import ComingSoonScreen from './ComingSoonScreen'; 
import WarmUpScreen from './WarmUpScreen'; 
import UserProfileScreen from './UserProfileScreen'; 
import GetStartedScreen from './GetStartedScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import OnboardingFlowScreen from './screens/OnboardingFlowScreen';
import PrePracticeScreen from './PrePracticeScreen';

const PracticeStackNav = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();
const AuthStackNav = createNativeStackNavigator();
const MainStackNav = createNativeStackNavigator();
const ProfileStackNav = createNativeStackNavigator();

function PracticeStack() {
  return (
    <PracticeStackNav.Navigator 
      initialRouteName="CategorySelection" 
      screenOptions={{ headerShown: false }} 
    >
      <PracticeStackNav.Screen name="CategorySelection" component={CategorySelectionScreen} />
      <PracticeStackNav.Screen name="PromptSelection" component={PromptSelectionScreen} />
      <PracticeStackNav.Screen name="PrePractice" component={PrePracticeScreen} />
      <PracticeStackNav.Screen name="Teleprompter" component={TeleprompterScreen} />
      <PracticeStackNav.Screen name="ComingSoonScreen" component={ComingSoonScreen} />
    </PracticeStackNav.Navigator>
  );
}

function ProfileStack() {
  return (
    <ProfileStackNav.Navigator
      initialRouteName="UserProfile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStackNav.Screen name="UserProfile" component={UserProfileScreen} />
    </ProfileStackNav.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({ 
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.playfulIconInactive,
        tabBarStyle: { display: getTabBarVisibility(route) }, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PracticeTab') {
            iconName = focused ? 'mic' : 'mic-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } 
          return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
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
          return label ? <Text style={[styles.tabLabelStyle, { color: color }]}>{label}</Text> : null;
        },
        headerShown: false, 
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="PracticeTab" component={PracticeStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <MainStackNav.Navigator>
      <MainStackNav.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ headerShown: false }} 
      />
      <MainStackNav.Screen 
        name="WarmUp" 
        component={WarmUpScreen} 
        options={{ headerShown: false }}
      />
      <MainStackNav.Screen 
        name="TeleprompterScreen" 
        component={TeleprompterScreen} 
        options={{ headerShown: false }}
      /> 
    </MainStackNav.Navigator>
  );
}

function AuthStack() {
  return (
    <AuthStackNav.Navigator 
      initialRouteName="OnboardingFlow"
      screenOptions={{ headerShown: false }}
    >
      <AuthStackNav.Screen name="OnboardingFlow" component={OnboardingFlowScreen} />
      <AuthStackNav.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStackNav.Screen name="GetStarted" component={GetStartedScreen} />
      <AuthStackNav.Screen name="SignIn" component={SignInScreen} />
      <AuthStackNav.Screen name="SignUp" component={SignUpScreen} />
    </AuthStackNav.Navigator>
  );
}

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    console.log("Setting up Firebase Auth listener...");
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Auth state changed. User:", firebaseUser?.uid || 'null');
      setUser(firebaseUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe; 
  }, []);

  if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.accentTeal} />
        <Text style={styles.loadingText}>Initializing...</Text>
      </View>
    );
  }

  return (
    <UserProvider>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />} 
      </NavigationContainer>
    </UserProvider>
  );
}

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'CategorySelection'; 
  const hiddenScreens = ['Teleprompter', 'PrePractice'];
  return hiddenScreens.includes(routeName) ? 'none' : 'flex';
};

const styles = StyleSheet.create({
  tabLabelStyle: {
    fontSize: 10, 
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
    color: colors.textSecondary,
  },
});

export default App;
