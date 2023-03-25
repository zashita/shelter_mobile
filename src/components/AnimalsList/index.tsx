import React from 'react';
import { Alert, Image, ScrollView, Text, View } from "react-native";
import styles from './style.scss';
import LocationSVG from '../../assets/img/location.svg';
import LikeSVG from '../../assets/img/Like.svg';
import currentanimal from '../../store/Animals'
import {IAnimal} from "../../types/Animal";

export interface IAnimalListProps {
  animals: any;
  navigation: any;
}

export const animals_example = [
  {
    id: 'vjadvh7vgsdifv',
    age: 3,
    name: 'Даун',
    sex: 'female',
    type: 'cat',

    description: 'string string string string string string string string stringstring ',
    castrated: false,
    sterilized: false,
    vaccinated: true
  },
  {
    id: 'vjadvh7vgsdifv',
    age: 1,
    name: 'Собака',
    sex: 'male',
    type: 'dog',

    description: 'string string string string string string string string stringstring ',
    castrated: false,
    sterilized: true,
    vaccinated: false
  },
  {
    id: 'vjadvh7vgsdifv',
    age: 7,
    name: 'Красава',
    sex: 'female',
    type: 'cat',

    description: 'string string string string string string string string stringstring ',
    castrated: true,
    sterilized: false,
    vaccinated: true
  }
    ]
;

const AnimalsList = (props: IAnimalListProps) => {
  const CardOpen = (current: IAnimal) =>{
    currentanimal.setCurrentAnimal(current);
    props.navigation.navigate("AnimalsDescription")
  }
  const Liked = () =>{
    Alert.alert("like")
  }
  const AnimalsViewList = [...props.animals].map(animal => {
    return (
      <View style={styles.card}>
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
    {height: 636}}>{AnimalsViewList}</ScrollView>;
};

export default AnimalsList;
