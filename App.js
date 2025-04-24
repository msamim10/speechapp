import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './HomeScreen'; // Home tab component
import CategorySelectionScreen from './CategorySelectionScreen'; // Start of practice flow
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';
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
        // Optional: Customize Tab Bar appearance here
        screenOptions={{ headerShown: false }} // Hide headers for Tab screens by default
      >
        {/* Home Tab: Links directly to HomeScreen */}
        <Tab.Screen 
          name="HomeTab" 
          component={HomeScreen} 
          options={{
            title: 'Home', 
            // headerShown: false, // Keep header hidden consistent with others
            // Add tabBarIcon later
          }} 
        />
        {/* Practice Tab: Dynamically hide tab bar based on nested route */}
        <Tab.Screen 
          name="PracticeTab" 
          component={PracticeStack} 
          options={({ route }) => { // Options can be a function
            // Get the name of the currently focused route in the PracticeStack
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'CategorySelection';
            // Hide the tab bar if the focused screen is Teleprompter
            const display = routeName === 'Teleprompter' ? 'none' : 'flex';
            return {
              title: 'Practice',
              tabBarStyle: { display }, // Set display style dynamically
            };
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
