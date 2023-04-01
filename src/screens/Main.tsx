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

export interface IAnimalsProps{
  navigation: any;
}



const Main:React.FC<IAnimalsProps> = observer(({navigation}) => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      animals.setAnimals().
          then(promise => setLoading(false))
  }, [])

  return (

    <MainLayout navigation={navigation}>
      {loading?
          <ActivityIndicator size={"large"} color={'#FF9D01'}/>
      :
          <AnimalsList
              navigation={navigation}
              animals={animals.animals}/>
      }

    </MainLayout>
  );
})

export default Main;

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