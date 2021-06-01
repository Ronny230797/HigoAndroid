import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './app/store/Store';


enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import Login from './app/screens/Login';
import MainScreen from './app/screens/MainScreen';


const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
          />
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name='Settings'
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});