import React from "react";
import Main from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnimalDescription from "./screens/Animal.description";
import Filters from "./screens/Filters";
import News from "./screens/News";
import NewsDescription from "./screens/News.description";
import Gifts from "./screens/Gifts";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Liked from "./screens/Liked";

const Stack = createNativeStackNavigator()

function AppNavigation() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName={"Main"}>
                    <Stack.Screen name={"Main"} component={Main} options={{animation: 'none'}}/>
                    <Stack.Screen name={"AnimalsDescription"} component ={AnimalDescription}/>
                    <Stack.Screen name={'Filters'} component={Filters}/>
                    <Stack.Screen name={'NewsDescription'} component={NewsDescription}/>
                    <Stack.Screen name={'News'} component={News} options={{animation: 'none'}}/>
                    <Stack.Screen name={'Gifts'} component={Gifts} options={{animation: 'none'}}/>
                    <Stack.Screen name={'Liked'} component={Liked} options={{animation: 'none'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

    );
}
export default AppNavigation;
