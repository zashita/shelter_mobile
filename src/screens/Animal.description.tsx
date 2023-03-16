import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import {Button} from "react-native-paper";
import style from './screen_styles/animals.description.scss'
import styles from "../components/AnimalsList/style.scss";

const AnimalDescription = () => {
  return (
    <View style={style.global_container}>
    <View style={style.top_container}>
      <Button icon="camera" mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>
      <Image
        style={style.animal_image}
        source={require('../assets/img/examplecard.png')}
      />
      <Button icon="camera" mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>

    </View>
      <View style={style.bottom_container}>

      </View>

    </View>

  );
};

export default AnimalDescription;
