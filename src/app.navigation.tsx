import React from "react";
import Main from './screens/Main';
import Login from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimalDescription from "./screens/Animal.description";
import Filters from "./screens/Filters";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Info from "./screens/Info";
import NewsDescription from "./screens/News.description";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName={"Login"} >
                <Stack.Screen name={"Main"} component={Main}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"AnimalsDescription"} component ={AnimalDescription}/>
                <Stack.Screen name={'Filters'} component={Filters}/>
                <Stack.Screen name={'Info'} component={Info}/>
                <Stack.Screen name={'NewsDescription'} component={NewsDescription}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;
