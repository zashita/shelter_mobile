import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import LocationSVG from '../assets/img/location.svg';
import LikeSVG from '../assets/img/Like.svg';
import LikedActiveSvg from '../assets/img/LikedActive.svg'
import animals from '../store/Animals'
import {IAnimal} from "../types/Animal";
import {observer} from "mobx-react-lite";
import liked from "../store/Liked";
import server from "../server";

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
  const checkAge = (number: number) =>{
    let numStr = number.toString();
    let num = numStr[numStr.length - 1];
    if (num === '1' && numStr.length === 1){
      return 'год'
    } else if ((num=== '2'|| num === '3'|| num === '4') && numStr[0] !== '1'){
      return 'года'
    } else{
      return 'лет'
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
              uri: server.image + animal.photos[0]
            }
          }
        />
        </View>
        <View style={styles.info_container}>
          <View style={styles.info_line}>
            <Text style={styles.name_text}>{animal.name}</Text>
            <Text style={styles.description_text}>{animal.type}</Text>
          </View>
          <Text style={styles.age_text}>{animal.age} {checkAge(animal.age)}</Text>
          {animal.sex === 1?
              <Text style={styles.sex_text}>девочка</Text>:
              <Text style={styles.sex_text}>мальчик</Text>
          }

          <View style={styles.info_line}>
            <View style={styles.location}>
              <LocationSVG/>
              <Text style={styles.location_text}>{animal.shelter}</Text>
            </View>
          </View>
          <View onTouchEnd={() => Liked(animal.id)} style={styles.like_container}>
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
    flex: 1,
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    marginBottom: 25,
    paddingRight: 12,
  },
  info_container: {
    // width: 169,
    // height: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 42,

    paddingBottom: 12,
    paddingLeft: 12,
  },
  info_line: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    flex: 1,
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
  sex_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#EE7100',
    marginBottom: 25,
  },
  age_text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#EE7100',

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
    position: "relative",
  },
  like_container:{
    flex: 1,
    marginTop: 10,
    alignItems: "flex-end"
  }
});
