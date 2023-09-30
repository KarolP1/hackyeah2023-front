import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RootStackParamList} from './src/navigation/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './src/pages/loggedIn/LandingPage';
import {screenOptions} from './src/navigation/StackNavigationOption';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  if (isLoggedIn)
    return (
      <Stack.Navigator screenOptions={{}} initialRouteName="loggedIn">
        <Stack.Screen name="loggedIn" component={LandingPage} />
      </Stack.Navigator>
    );
  if (!isLoggedIn) {
    return (
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="loggedOut">
        <Stack.Screen name="loggedOut" component={LandingPage} />
      </Stack.Navigator>
    );
  }
};

export default App;

const styles = StyleSheet.create({});
