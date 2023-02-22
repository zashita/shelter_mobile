/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Animals from './Animals';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchBlock from '../components/SearchBlock';
import Profile from './Profile';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer >
    //   <Stack.Navigator initialRouteName={"Profile"}>
    //     <Stack.Screen name={"Animals"} component={Animals}
    //     options={{
    //
    //
    //
    //
    //     }}/>
    //     <Stack.Screen name={"Profile"} component={Profile}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Animals />
  );
}

export default App;
