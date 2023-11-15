import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import SelectedConcertPage from './components/SelectedConcertPage';
// import LoginPage from './components/LoginPage';
import CommunityPage from './components/CommunityPage';
import React from 'react';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Concert" component={SelectedConcertPage} />
        {/* <Stack.Screen name="Login" component={LoginPage} /> */}
        <Stack.Screen name="Community" component={CommunityPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


