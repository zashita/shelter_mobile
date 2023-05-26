/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import animals from '../store/Animals'
import {observer} from "mobx-react-lite";
import {ActivityIndicator} from "react-native-paper";
import MainLayout from "../Layouts/MainLayout";
import AnimalsList from "../components/AnimalsList";
import search from "../store/Search";
import liked from "../store/Liked";
import filtration from "../store/Filtration";
import {useTheme} from "@react-navigation/native";

export interface IAnimalsProps{
  navigation: any;
}



const Main:React.FC<IAnimalsProps> = observer(({navigation}) => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      animals.setAnimals().
      then(promise => liked.setLiked().
      then(promise => setLoading(false)))
  }, [])

 const searchedAnimals = animals.animals.filter(animal => {
     return search.searchString !== undefined?animal.shelter.toLowerCase().includes(search.searchString.toLowerCase()) ||
         animal.address.toLowerCase().includes(search.searchString.toLowerCase()) ||
         animal.name.toLowerCase().includes(search.searchString.toLowerCase()): animal
 })

    const filteredAnimalsTypes = searchedAnimals.filter(animal => {
        return (
        filtration.typeFilters.length > 0?
            filtration.typeFilters.includes(animal.type): animal
    )
    })
    const filteredAnimalsSex = filteredAnimalsTypes.filter(animal => {
        return (
            filtration.sex !== null?
                filtration.sex === animal.sex: animal
        )
    })

    const filteredAnimalsByAge = filteredAnimalsSex.filter((animal)=>{
        return animal.age >= filtration.ageMin && animal.age <= filtration.ageMax
    })
    const filteredAnimalsBySter = filteredAnimalsByAge.filter((animal)=>{
        return filtration.sterialized? animal.sterilized: animal
    })

    const filteredAnimals = filteredAnimalsBySter.filter((animal)=>{
        return filtration.vaccinated? animal.vaccinated: animal
    })

    const {colors} = useTheme()
  return (

    <MainLayout navigation={navigation}>
      {loading?
          <ActivityIndicator size={"large"} color={colors.primary}/>
      :
          <AnimalsList
              navigation={navigation}
              animals={filteredAnimals}/>
      }

    </MainLayout>
  );
})

export default Main;

// {
//   Navigation.currentScreen === 'Home'?
//       <Animals navigation={navigation}/>:
//       <View></View>
// }
// {
//   Navigation.currentScreen === 'News'?
//       <News navigation={navigation}/>:
//       <View></View>
// }
