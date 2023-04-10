import React from 'react';
import { Alert, Image, ScrollView, Text, View } from "react-native";
import styles from './style.scss';
import LocationSVG from '../../assets/img/location.svg';
import LikeSVG from '../../assets/img/Like.svg';
import animals from '../../store/Animals'
import {IAnimal} from "../../types/Animal";

export interface IAnimalListProps {
  animals: any;
  navigation: any;
}



const AnimalsList = (props: IAnimalListProps) => {
  const CardOpen = (current: IAnimal) =>{
    animals.setCurrentAnimal(current);
    props.navigation.navigate("AnimalsDescription")
  }
  const Liked = () =>{
    Alert.alert("like")
  }
  const AnimalsViewList = [...props.animals].map(animal => {
    return (
      <View style={styles.card} key = {animal.id}>
        <View onTouchEnd={() => CardOpen(animal)}>
        <Image
          style={styles.animal_img}
          source={require('../../assets/img/examplecard.png')}
        />
        </View>
        <View style={styles.info_container}>
          <View style={styles.info_line}>
            <Text style={styles.name_text}>{animal.name}</Text>
            <Text style={styles.description_text}>{animal.type}</Text>
          </View>
          <Text style={styles.age_text}>{animal.age}</Text>
          <View style={styles.info_line}>
            <View style={styles.location}>
              <LocationSVG/>
              <Text style={styles.location_text}>{animal.shelter}</Text>
            </View>
          </View>
          <View onTouchEnd={Liked} style={styles.like_img}>
            <LikeSVG/>
          </View>
        </View>
      </View>
    );
  });
  return <ScrollView
    style={
    {height: '85%'}}>{AnimalsViewList}</ScrollView>;
};

export default AnimalsList;
