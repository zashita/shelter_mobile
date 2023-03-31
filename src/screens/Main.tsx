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
import AnimalsList, { animals_example } from "../components/AnimalsList";
import LinearGradient from 'react-native-linear-gradient';
import AnimalsArr from '../store/Animals'
import {observer} from "mobx-react-lite";
import {ActivityIndicator} from "react-native-paper";
import MainLayout from "../Layouts/MainLayout";
import Navigation from '../store/Navigation'
import Animals from "./Animals";
import Info from "./Info";

export interface IAnimalsProps{
  navigation: any;
}



const Main:React.FC<IAnimalsProps> = observer(({navigation}) => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      AnimalsArr.setAnimals().then(response => setLoading(false))

  }, [])
  return (
    <MainLayout navigation={navigation}>

      {
        Navigation.currentScreen === 'Home'?
             <Animals navigation={navigation}/>:
            <View></View>
      }
      {
        Navigation.currentScreen === 'Info'?
            <Info navigation={navigation}/>:
            <View></View>
      }
    </MainLayout>


  );
})

export default Main;
