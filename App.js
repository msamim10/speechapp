import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import colors from './constants/colors'; // Import colors for styling

// Import Screens
import HomeScreen from './HomeScreen'; // Home tab component
import CategorySelectionScreen from './CategorySelectionScreen'; // Start of practice flow
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';
import ComingSoonScreen from './ComingSoonScreen'; // Import ComingSoonScreen
// Removed SavedPromptsScreen and SettingsScreen imports

// Define Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Stack for the Practice Flow
function PracticeStack() {
  return (
    // This Stack Navigator handles navigation within the Practice tab
    <Stack.Navigator 
      initialRouteName="CategorySelection" 
      screenOptions={{ headerShown: false }} // Headers managed within this stack if needed, or none
    >
      <Stack.Screen 
        name="CategorySelection" 
        component={CategorySelectionScreen} 
        // options={{ title: 'Select Category' }} // Example if header was shown
      />
      <Stack.Screen 
        name="PromptSelection" 
        component={PromptSelectionScreen} 
      />
      <Stack.Screen 
        name="Teleprompter" 
        component={TeleprompterScreen} 
        // Remove options from here, handle visibility in Tab options
        // options={{
        //   tabBarStyle: { display: 'none' }, 
        // }}
      />
      <Stack.Screen 
        name="ComingSoonScreen" 
        component={ComingSoonScreen} 
      />
    </Stack.Navigator>
  );
}

// Main App Component using Tab Navigator with two tabs
function App() {
  return (
    <NavigationContainer>
      {/* Tab Navigator is the main navigator */}
      <Tab.Navigator
        initialRouteName="HomeTab" // Start on the Home tab
        screenOptions={({ route }) => ({ // Changed to function to access route
          headerShown: false, 
          tabBarActiveTintColor: colors.primary, // Active icon/label color
          tabBarInactiveTintColor: colors.textSecondary, // Inactive icon/label color
          tabBarStyle: { 
            // Determine display based on focused route in PracticeStack
            display: getTabBarVisibility(route), 
            // Add other styles like background color if needed
            // backgroundColor: colors.cardBackground, 
          },
          // Define icons based on route name
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'PracticeTab') {
              iconName = focused ? 'mic' : 'mic-outline';
            }
            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Home Tab: Links directly to HomeScreen */}
        <Tab.Screen 
          name="HomeTab" 
          component={HomeScreen} 
          options={{ title: 'Home' }} // Title is now set here, icon in screenOptions 
        />
        {/* Practice Tab: Dynamically hide tab bar based on nested route */}
        <Tab.Screen 
          name="PracticeTab" 
          component={PracticeStack} 
          options={{ title: 'Practice' }} // Title is now set here, icon in screenOptions
          // Note: We removed the dynamic tabBarStyle from here, it's now in screenOptions
        />
      </Tab.Navigator>
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

export default App;
