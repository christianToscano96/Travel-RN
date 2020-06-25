import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text,} from 'react-native';
//navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
//screens
import Home from './src/screens/Home';
import PostDetails from './src/screens/PostDetails';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialState="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
