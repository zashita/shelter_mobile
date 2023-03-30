import React from "react";
import Animals from './screens/Animals';
import Login from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimalDescription from "./screens/Animal.description";
import Filters from "./screens/Filters";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Info from "./screens/Info";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName={"Login"} >
                <Stack.Screen name={"Animals"} component={Animals}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"AnimalsDescription"} component ={AnimalDescription}/>
                <Stack.Screen name={'Filters'} component={Filters}/>
                <Stack.Screen name={'Info'} component={Info}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;
