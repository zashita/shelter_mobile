import React from "react";
import Animals from './screens/Animals';
import Login from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimalDescription from "./screens/Animal.description";
import Filters from "./screens/Filters";

const AppNavigation = () => {
  const {Navigator, Screen }  = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions = {{headerShown: false}} initialRouteName={"Login"} >
        <Screen name={"Animals"} component={Animals}/>
        <Screen name={"Login"} component={Login}/>
        <Screen name={"AnimalsDescription"} component ={AnimalDescription}/>
          <Screen name={'Filters'} component={Filters}/>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
