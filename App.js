/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import VotesScreen from './screens/VotesScreen';
import PythonVoters from './screens/PythonVoters';
import JavaScriptVoters from './screens/JavascriptVoters';
import GoVoters from './screens/GoVoters';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="voters"
              component={VotesScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="pythonvoters"
              component={PythonVoters}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="javascriptvoters"
              component={JavaScriptVoters}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="govoters"
              component={GoVoters}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </PaperProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
