/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

export interface IAnimalsProps{
  navigation: any;
}



const Animals = (props: IAnimalsProps) => {
  return (
    <View style={styles.background}>
      <View style={styles.location_block}>
        <View style={styles.location_image}>
          <LocationSVG/>
        </View>
          <Text style= {{color: '#000'}}>Минск, </Text>
          <Text>Беларусь</Text>
      </View>
      <LinearGradient colors={['#F4F4F4', "#F4F4F4", '#FF9D0100']} style={styles.linearGradient}>
      <View style={styles.main_block}>
        <Wrapper>
          <Search/>
          <AnimalsList navigation={props.navigation} animals={animals_example}/>

        </Wrapper>
        <Navbar/>
      </View>
      </LinearGradient>


    </View>


  );
};

export default Animals;

const styles = StyleSheet.create({
  background:{
    backgroundColor: `#FF9D01`,

  },
  location_block:{
    marginLeft: 'auto',
    marginRight: `auto`,
    top: 50,
    display: `flex`,
    flexDirection: "row",
    marginBottom: 75,
    alignItems: `center`

  },
  location_text:{

  },
  location_image:{
    marginRight: 10,
  },
  main_block: {
    height: 764,
    // backgroundColor: `#F4F4F4`,
    backgroundColor: 'transparent',
    borderRadius: 40,
  },

  choise_img:{
    // width: 48,
    // height:48,
  },
  categories_container:{
    display: "flex",
    flexDirection: "row",
    columnGap: 22,
  },
  linearGradient: {
    borderRadius: 40,
  }



})
