import React, {useState} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";
import animals from '../store/Animals';
import ShareSVG from  '../assets/img/Vector 2.svg'
import LikeSVG from '../assets/img/LikeScreen.svg';
import LikeActiveSVG from '../assets/img/LikeDescActive.svg'
import {YaMap, Marker, Circle} from 'react-native-yamap';
import AnimalSlider from "../components/AnimalSlider";
import server from "../server";
import liked from "../store/Liked";
import {observer} from "mobx-react-lite";
import OtherInfo from "../components/OtherInfo";
import Map from "../components/Map";

const API_KEY = '08eba25e-17db-40ea-9de8-397c8d2f4e34'
YaMap.init(API_KEY);
export interface AnimalDescProps{
  navigation: any
}

const AnimalDescription:React.FC<AnimalDescProps> = observer(({navigation}) => {

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
    <ScrollView style={SliderActive? style.global_container_active: style.global_container}>
    <View style={style.top_container}>
      <Button icon={ShareSVG}
              mode="contained"
              buttonColor={"transparent"}
              style={style.button}
              onPress={() =>{navigation.goBack()}}>

      </Button>
      <View
        onTouchEnd={() => setSliderActive(true)}>
      <Image
        style={style.animal_image}
        source={{
          uri: server.image + animals.currentAnimal.photos[0]
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
        <OtherInfo/>
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
            Приют
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
            {animals.currentAnimal.phone}
          </Text>
        </View>
        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Адрес
          </Text>
          <Text style={style.main_info_text}>
            {
              animals.currentAnimal.address
            }
          </Text>
        </View>

        <Map/>




      </View>
    </ScrollView>
        {
          SliderActive? <AnimalSlider sliderActive={SliderActive} setSliderActive={setSliderActive}/>:
              <View/>
        }

      </>
  );
})


export default AnimalDescription;

const style = StyleSheet.create({
  button: {
    height: 30,
    width: 30,
    // alignSelf: 'center',
  },
  top_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 30,
    paddingLeft: 10,
  },
  animal_image: {
    width: 160,
    height: 160,
    borderRadius: 228,
    alignSelf: 'center',
    marginTop: 30,
  },
  bottom_container: {
    width: '90%',
    borderRadius: 20,
    marginTop: 20,
    height: 600,
    alignSelf: 'center',
  },
  global_container: {
    backgroundColor: 'white',
    height: '100%',
  },
  global_container_active: {
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.05,
  },
  // bottom_container: {
  //   padding: 20,
  // },
  name_text: {
    color: '#000',
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  other_info_container: {
    background: '#EDEDED',
    borderRadius: 8,
    width: '100%',
    padding: 15,
    marginBottom: 15,
  },
  other_info_text: {
    background: '#FFD5B0',
    borderRadius: 10,
    color: 'black',
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  top_divider: {
    width: 251,
    height: 9,
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  main_info_text: {
    color: '#7C7C7C',
    fontSize: 16,
    marginBottom: 15,
  },
  main_info_text_field: {
    color: '#000',
    fontSize: 16,
    marginBottom: 15,
  },
  main_info_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  additional_info_text: {
    color: '#000',
    fontSize: 15,
    marginBottom: 20,
  },
});
