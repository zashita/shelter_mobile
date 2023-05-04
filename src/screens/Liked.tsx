/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput,
    useColorScheme,
    View
} from "react-native";
import LocationSVG from '../assets/img/locationblack.svg';
import Header from '../components/Header/index'

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Categories from "../components/Categories";
import Search from "../components/SearchBlock";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import LinearGradient from 'react-native-linear-gradient';
import animals from '../store/Animals'
import {observer} from "mobx-react-lite";
import {ActivityIndicator} from "react-native-paper";
import MainLayout from "../Layouts/MainLayout";
import Navigation from '../store/Navigation'
import News from "./News";
import news from '../store/News'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import AnimalsArr from "../store/Animals";
import AnimalsList from "../components/AnimalsList";
import url from "../url";
import search from "../store/Search";
import AsyncStorage from '@react-native-async-storage/async-storage';
import liked from "../store/Liked";

export interface IAnimalsProps{
    navigation: any;
}



const Liked:React.FC<IAnimalsProps> = observer(({navigation}) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        liked.setLiked().then(promise=> setLoading(false))
    },[])
    const filteredAnimals = animals.animals.filter(animal => {
        return search.searchString !== undefined?animal.name.toLowerCase().includes(search.searchString.toLowerCase()): animal
    })

    const likedAnimals = filteredAnimals.filter(animal => {
        return liked.likedID.includes(animal.id)
    })

    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('liked')
    //         jsonValue != null ? liked.setLiked(JSON.parse(jsonValue)) : liked.setLiked(liked.liked);
    //     } catch(e) {
    //         // error reading value
    //     }
    // }
    return (

        <MainLayout navigation={navigation}>
            {loading?
                <ActivityIndicator size={"large"} color={'#FF9D01'}/>
                :
                <AnimalsList
                    navigation={navigation}
                    animals={likedAnimals}/>
            }

        </MainLayout>
    );
})

export default Liked;

// {
//   Navigation.currentScreen === 'Home'?
//       <Animals navigation={navigation}/>:
//       <View></View>
// }
// {
//   Navigation.currentScreen === 'News'?
//       <News navigation={navigation}/>:
//       <View></View>
// }
