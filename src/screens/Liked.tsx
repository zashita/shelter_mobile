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

export interface IAnimalsProps{
    navigation: any;
}



const Liked:React.FC<IAnimalsProps> = observer(({navigation}) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        liked.setLiked().then(promise=> setLoading(false))
    },[])

    const likedAnimals = animals.animals.filter(animal => {
        return liked.likedID.includes(animal.id)
    })

    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('liked')
    //         jsonValue != null ? liked.setLiked(JSON.parse(jsonValue)) : liked.setLiked(liked.liked);
    //     } catch(e) {
    //         // error reading value
    //     }
    // }
    return (

        <MainLayout navigation={navigation}>
            {loading?
                <ActivityIndicator size={"large"} color={'#FF9D01'}/>
                :
                <AnimalsList
                    navigation={navigation}
                    animals={likedAnimals}/>
            }

        </MainLayout>
    );
})

export default Liked;

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
