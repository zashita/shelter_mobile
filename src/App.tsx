/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchBlock from './components/SearchBlock';
import Profile from './screens/Profile';
import LogIn from "./screens/LogIn";
import AppNavigation from "./app.navigation";
import {Provider as PaperProvider} from "react-native-paper"
import {GestureHandlerRootView} from "react-native-gesture-handler";



function App() {
  return (

    <PaperProvider>

    <AppNavigation/>

    </PaperProvider>

  );
}

export default App;
