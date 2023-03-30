import React from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {Button} from "react-native-paper";
import style from '../styles/animals.description.scss'
import currentanimal from '../store/CurrentAnimal';
import ShareSVG from  '../assets/img/shareIcon.svg'
import LikeSVG from '../assets/img/share-1-svgrepo-com.svg'
import {YaMap, Marker, Circle} from 'react-native-yamap';

const API_KEY = '08eba25e-17db-40ea-9de8-397c8d2f4e34'
YaMap.init(API_KEY);

const AnimalDescription = () => {

  const showAnimalType = (type: string) =>{
    switch (type){
      case 'cat': return 'Кот';
      case 'dog': return 'Собака';
      case 'other': return 'Другой';
    }
  }

  return (
    <View style={style.global_container}>
      <View style={style.top_divider}>

      </View>
    <View style={style.top_container}>
      <Button icon={ShareSVG} mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>
      <Image
        style={style.animal_image}
        source={require('../assets/img/examplecard.png')}
      />
      <Button icon={LikeSVG} mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>

    </View>
      <View style={style.bottom_container}>
        <Text style={style.name_text}>{currentanimal.currentAnimal.name}, {currentanimal.currentAnimal.age}</Text>
        <View
          style={style.other_info_container}>
            <View style={{display: 'flex', flexDirection: 'row', columnGap: 10}}>
              {
                currentanimal.currentAnimal.castrated?
                    <Text style={style.other_info_text}>Кастрирован</Text>
                    :<Text></Text>
              }
              {
                currentanimal.currentAnimal.vaccinated?
                    <Text style={style.other_info_text}>Вакцинорован</Text>
                    :<Text></Text>
              }
            </View>

          {
            currentanimal.currentAnimal.sterilized?
                <Text style={style.other_info_text}>Стерилизован</Text>
                :<Text></Text>
          }
        </View>
        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Пол
          </Text>
          {
            currentanimal.currentAnimal.sex === 'female'?
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
              showAnimalType(currentanimal.currentAnimal.type)
            }
          </Text>
        </View>

        <View style = {style.main_info_container}>
          <Text style={style.main_info_text_field}>
            Адрес
          </Text>
          <Text style={style.main_info_text}>
          {
            currentanimal.currentAnimal.shelter
          }
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
  );
};

export default AnimalDescription;
