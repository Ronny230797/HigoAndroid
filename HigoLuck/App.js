import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './store/Store';


enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Login from './screens/Login';
import MainScreen from './screens/MainScreen';
import Reward from './screens/Reward';


const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
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
          <Stack.Screen
            options={{ headerLargeTitle: true }}
            name='Reward'
            component={Reward}
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