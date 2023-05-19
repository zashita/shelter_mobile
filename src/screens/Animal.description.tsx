import React, {useState} from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";
import style from '../styles/animals.description.scss'
import animals from '../store/Animals';
import ShareSVG from  '../assets/img/shareIcon.svg'
import LikeSVG from '../assets/img/LikeScreen.svg';
import LikeActiveSVG from '../assets/img/LikeDescActive.svg'
import {YaMap, Marker, Circle} from 'react-native-yamap';
import AnimalSlider from "../components/AnimalSlider";
import url from "../url";
import liked from "../store/Liked";
import {observer} from "mobx-react-lite";

const API_KEY = '08eba25e-17db-40ea-9de8-397c8d2f4e34'
YaMap.init(API_KEY);

const AnimalDescription = observer(() => {

  const [SliderActive, setSliderActive] = useState(false)
  const Liked = (id: number) => {
    if (liked.likedState(id)) {
      liked.deleteLikedId(id)
    } else {
      liked.setLikedId(id)
    }
  }

  return (
      <>
    <View style={SliderActive? style.global_container_active: style.global_container}>
      <View style={style.top_divider}>

      </View>
    <View style={style.top_container}>
      <Button icon={ShareSVG} mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>
      <View
        onTouchEnd={() => setSliderActive(true)}>
      <Image
        style={style.animal_image}
        source={{
          uri: url.image + animals.currentAnimal.photos[0]
        }}
      />
      </View>
      <Button
          icon={liked.likedState(animals.currentAnimal.id)?LikeActiveSVG: LikeSVG}
          mode="contained"
          buttonColor={"transparent"}
          style={style.button}
          onPress={() => Liked(animals.currentAnimal.id)}
      >

      </Button>

    </View>
      <View style={style.bottom_container}>
        <Text style={style.name_text}>{animals.currentAnimal.name}, {animals.currentAnimal.age}</Text>
        <View
          style={style.other_info_container}>


        </View>
        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Пол
          </Text>
          {
            animals.currentAnimal.sex === 1?
                <Text style={style.main_info_text}>Девочка</Text>:
                <Text style = {style.main_info_text}>Мальчик</Text>
          }
        </View>

        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Порода
          </Text>
          <Text style={style.main_info_text}>
            {
              animals.currentAnimal.type
            }
          </Text>
        </View>

        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Адрес
          </Text>
          <Text style={style.main_info_text}>
          {
            animals.currentAnimal.shelter
          }
        </Text>
        </View>

        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Номер телефона
          </Text>
          <Text style={style.main_info_text}>
            +375439629465
          </Text>
        </View>

        <YaMap
            showUserPosition={false}
            rotateGesturesEnabled={false}
            nightMode={false}
            mapType={'vector'}
            initialRegion={{
              lat: 30,
              lon: 30,
              zoom: 7,
              azimuth: 0,
            }}
          style = {{width: '100%', height: 300, borderRadius: 10, borderWidth: 3, borderStyle: 'solid', borderColor: '#000'}}
        >
          <Marker
              point={{ lat: 30, lon: 30 }}
          />
        </YaMap>




      </View>
    </View>
        {
          SliderActive? <AnimalSlider sliderActive={SliderActive} setSliderActive={setSliderActive}/>:
              <View/>
        }

      </>
  );
})
// const style = StyleSheet.create({
//   button:{
//   height: 30,
//   width: 30,
//   justifySelf: 'center',
// },
//
// top_container:{
//   display: flex,
//   flex-direction: row,
//   justify-content: space-between,
//   background-color: #ffffff,
//   padding-top: 30px,
//   padding-left: 10px,
//
//
// }
//
// ,animal_image:{
//   width: 160px,
//   height: 160px,
//   border-radius: 228px,
//   align-self: center,
//   margin-top: 30px,
//
// }
// ,bottom_container:{
//   width: 90%,
//   border-radius: 20px,
//   margin-top: 0,
//   height: 600px,
//   align-self: center,
//
// }
// ,global_container:{
//   background-color: white,
//   height: 100%,
//
// }
//
// ,bottom_container:{
//   padding: 20,
// }
//
// ,name_text:{
//   color: '#000',
//   font-size: 24,
//   margin-bottom: 20,
//   align-self: 'center',
//
// }
//
// ,other_info_container:{
//   background:' #EDEDED',
//   border-radius: 8,
//   width: '100%',
//   padding: 15,
//   margin-bottom: 15,
//
// }
//
// ,other_info_text:{
//   background: '#FFD5B0',
//   border-radius: 10,
//   color: black,
//   padding: 6 14,
//   font-size: 14,
// }
// ,top_divider:{
//   width: 251,
//   height: 9,
//   align-self: 'center',
//   margin-top: 15,
//
//   background: '#D9D9D9',
//   border-radius: 10,
// }
//
// ,main_info_text:{
//   color:' #7C7C7C',
//   font-size: 16,
//   margin-bottom: 15,
// }
//
// ,main_info_text_field:{
//   color: '#000',
//   font-size: 16,
//   margin-bottom: 15,
// }
//
// ,main_info_container:{
//   display: 'flex',
//   flex-direction: 'row',
//   justify-content: 'space-between',
//   align-items: 'center',
//   width: '60%',
// }
//
// ,additional_info_text:{
//   color: #000,
//   font-size: 15px,
//   margin-bottom: 20px,
// }
// })

export default AnimalDescription;
