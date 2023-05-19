import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import LocationSVG from '../assets/img/location.svg';
import LikeSVG from '../assets/img/Like.svg';
import LikedActiveSvg from '../assets/img/LikedActive.svg'
import animals from '../store/Animals'
import {IAnimal} from "../types/Animal";
import {observer} from "mobx-react-lite";
import liked from "../store/Liked";
import url from "../url";

export interface IAnimalListProps {
  animals: IAnimal[];
  navigation: any;
}



const AnimalsList = observer((props: IAnimalListProps) => {
  const CardOpen = (current: IAnimal) =>{
    animals.setCurrentAnimal(current);
    props.navigation.navigate("AnimalsDescription")
  }
  const Liked = (id: number) =>{
    if(liked.likedState(id)){
      liked.deleteLikedId(id)
    } else{
      liked.setLikedId(id)
    }


  }
  const AnimalsViewList = [...props.animals].map(animal => {
    return (
      <View style={styles.card} key = {animal.id}>
        <View onTouchEnd={() => CardOpen(animal)}>
        <Image
          style={styles.animal_img}
          source={
            {
              uri: url.image + animal.photos[0]
            }
          }
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
          <View onTouchEnd={() => Liked(animal.id)} style={styles.like_img}>
            {
              liked.likedState(animal.id)?<LikedActiveSvg/>: <LikeSVG/>
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

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    marginBottom: 25,
  },
  info_container: {
    width: 169,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 42,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  info_line: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    height: 30,
  },
  text: {
    color: 'black',
  },
  animal_img: {
    borderRadius: 7,
    width: 171,
    height: 190,
    marginLeft: 5,
  },
  name_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
  },
  age_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#7C7C7C',
    marginBottom: 40,
  },
  location_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#888888',
  },
  description_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#7C7C7C',
  },
  like_img: {
    marginTop: 10,
    marginLeft: 120,
  },
});
