import React from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {Button} from "react-native-paper";
import style from '../styles/animals.description.scss'
import currentanimal from '../store/Animals';
import BackSVG from  '../assets/img/button-arrow-left-svgrepo-com.svg'
import ShareSVG from '../assets/img/share-1-svgrepo-com.svg'

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
    <View style={style.top_container}>
      <Button icon={BackSVG} mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>
      <Image
        style={style.animal_image}
        source={require('../assets/img/examplecard.png')}
      />
      <Button icon={ShareSVG} mode="contained" buttonColor={"transparent"} style={style.button}>

      </Button>



    </View>
      <View style={style.bottom_container}>
        <Text style={style.name_text}>{currentanimal.currentAnimal.name}</Text>
        <View style = {style.main_info_container}>
          <Text style={style.main_info_text}>
            {showAnimalType(currentanimal.currentAnimal.type)},
            {currentanimal.currentAnimal.age}
          </Text>
          {
            currentanimal.currentAnimal.sex === 'female'?
                <Text style={style.main_info_text}>Девочка</Text>:
                <Text style = {style.main_info_text}>Мальчик</Text>

          }
        </View>


        {
          currentanimal.currentAnimal.castrated?
              <Text style={style.additional_info_text}>Кастрирован</Text>
              :<Text></Text>
        }
        {
          currentanimal.currentAnimal.vaccinated?
              <Text style={style.additional_info_text}>Вакцинорован</Text>
              :<Text></Text>
        }
        {
          currentanimal.currentAnimal.sterilized?
              <Text style={style.additional_info_text}>Стерилизован</Text>
              :<Text></Text>
        }
        <Text style = {style.additional_info_text}>
          {currentanimal.currentAnimal.description}
        </Text>




      </View>

    </View>

  );
};

export default AnimalDescription;
