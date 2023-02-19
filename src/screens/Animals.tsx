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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Categories from "../components/Categories";
import Search from "../components/SearchBlock";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import AnimalsList, { animals_example } from "../components/AnimalsList";



const Animals = () => {
  return (
    <View style={styles.background}>
      <View style={styles.location_block}>
          <Image style={styles.location_image} source={{uri: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png"}}/>
          <Text style= {{color: '#000'}}>Минск, </Text>
          <Text>Беларусь</Text>
      </View>
      <View style={styles.main_block}>
        <Wrapper>
          <Search/>
          <View style={styles.categories_container}>
            <Categories title={`Собаки`}>
              <Image
                source={require("../assets/img/dog.png")}
                style={styles.choise_img}
              />
            </Categories>

            <Categories title={`Коты`}>
              <Image
                source={require(`../assets/img/cat.png`)}
                style={styles.choise_img}
              />
            </Categories>

            <Categories title={`Другие`}>
              <Image
                source={require(`../assets/img/other.png`)}
                style={styles.choise_img}
              />
            </Categories>

            <Categories title={`Понравились`}>
              <Image
                source={require(`../assets/img/liked.png`)}
                style={styles.choise_img}
              />
            </Categories>
          </View>
          <AnimalsList animals={animals_example}/>

        </Wrapper>
        <Navbar/>
      </View>


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
    width:10,
    height: 15,
    marginRight: 10,
  },
  main_block: {
    height: 764,
    backgroundColor: `#F4F4F4`,
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
  }



})
