import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import PromptSelectionScreen from './PromptSelectionScreen';
import TeleprompterScreen from './TeleprompterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Select Category' }}
        />
        <Stack.Screen
          name="PromptSelection"
          component={PromptSelectionScreen}
          options={({ route }) => ({ title: `${route.params?.category || 'Select'} Prompt` })}
        />
        <Stack.Screen
          name="Teleprompter"
          component={TeleprompterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
