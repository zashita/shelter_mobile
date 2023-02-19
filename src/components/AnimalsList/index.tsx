import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import styles from "./style.scss";

export interface IAnimalListProps {
  animals: any;
}

export const animals_example = [
  {
    key: 1,
    name: "Simba",
    sex: "female",
    age: 2,
    shelter: "shelter_name",
  },
  {
    key: 2,
    name: "Simba",
    sex: "female",
    age: 2,
    shelter: "shelter_name",
  },
  {
    key: 3,
    name: "Simba",
    sex: "female",
    age: 2,
    shelter: "shelter_name",
  }
];


const AnimalsList: React.FC<IAnimalListProps> = (props) => {
  const AnimalsViewList = [...props.animals].map((animal) => {
    return (
      <View style={styles.card}>
        <Image style={styles.animal_img} source={require("../../assets/img/examplecard.png")} />
        <View style={styles.info_container}>
          <View style={styles.info_line}>
            <Text style={styles.name_text}>{animal.name}</Text>
            <Image source={require("../../assets/img/sexexample.png")}></Image>
          </View>
          <Text style={styles.age_text}>{animal.age}</Text>
          <View style={styles.info_line}>
            <View style={styles.location}>
              <Image source={require("../../assets/img/location.png")}/>
              <Text style={styles.location_text}>{animal.shelter}</Text>
            </View>
            <Image source={require("../../assets/img/like.png")}/>
        </View>
        </View>
      </View>
    );
  });
  return (
    <ScrollView style={{height: 500}}>
      {AnimalsViewList}
    </ScrollView>




  );
};

export default AnimalsList;
