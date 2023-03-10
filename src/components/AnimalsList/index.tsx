import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style.scss';
import LocationSVG from '../../assets/img/location.svg';
import LikeSVG from '../../assets/img/Like.svg';

export interface IAnimalListProps {
  animals: any;
}

export const animals_example = [
  {
    key: 1,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
  {
    key: 2,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
  {
    key: 3,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
  {
    key: 3,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
  {
    key: 3,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
  {
    key: 3,
    name: 'Name',
    description: 'type',
    age: 0,
    shelter: 'shelter_name',
  },
];

const AnimalsList: React.FC<IAnimalListProps> = props => {
  const AnimalsViewList = [...props.animals].map(animal => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.animal_img}
          source={require('../../assets/img/examplecard.png')}
        />
        <View style={styles.info_container}>
          <View style={styles.info_line}>
            <Text style={styles.name_text}>{animal.name}</Text>
            <Text style={styles.description_text}>{animal.description}</Text>
          </View>
          <Text style={styles.age_text}>{animal.age}</Text>
          <View style={styles.info_line}>
            <View style={styles.location}>
              <LocationSVG/>
              <Text style={styles.location_text}>{animal.shelter}</Text>
            </View>
          </View>
          <View style={styles.like_img}>
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
