import React from 'react';
import { Alert, Image, ScrollView, Text, View } from "react-native";
import styles from './style.scss';
import LocationSVG from '../../assets/img/location.svg';
import LikeSVG from '../../assets/img/Like.svg';
import LikedActiveSvg from '../../assets/img/LikedActive.svg'
import animals from '../../store/Animals'
import {IAnimal} from "../../types/Animal";
import {observer} from "mobx-react-lite";
import liked from "../../store/Liked";

export interface IAnimalListProps {
  animals: IAnimal[];
  navigation: any;
}



const AnimalsList = observer((props: IAnimalListProps) => {
  const CardOpen = (current: IAnimal) =>{
    animals.setCurrentAnimal(current);
    props.navigation.navigate("AnimalsDescription")
  }
  const Liked = (id: string) =>{
    if(liked.likedState(id)){
      liked.deleteLikedId(id)
    } else{
      liked.setLikedId(id)
    }


  }
  const AnimalsViewList = [...props.animals].map(animal => {
    return (
      <View style={styles.card} key = {animal.ID}>
        <View onTouchEnd={() => CardOpen(animal)}>
        <Image
          style={styles.animal_img}
          source={require('../../assets/img/examplecard.png')}
        />
        </View>
        <View style={styles.info_container}>
          <View style={styles.info_line}>
            <Text style={styles.name_text}>{animal.Name}</Text>
            <Text style={styles.description_text}>{animal.Type}</Text>
          </View>
          <Text style={styles.age_text}>{animal.Age}</Text>
          <View style={styles.info_line}>
            <View style={styles.location}>
              <LocationSVG/>
              <Text style={styles.location_text}>{animal.Shelter}</Text>
            </View>
          </View>
          <View onTouchEnd={() => Liked(animal.ID)} style={styles.like_img}>
            {
              liked.likedState(animal.ID)?<LikedActiveSvg/>: <LikeSVG/>
            }

          </View>
        </View>
      </View>
    );
  });
  return <ScrollView
    style={
    {height: '85%'}}>{AnimalsViewList}</ScrollView>;
})

export default AnimalsList;
