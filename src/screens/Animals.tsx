import React, {useEffect, useState} from 'react';
import Search from "../components/SearchBlock";
import AnimalsList from "../components/AnimalsList";
import AnimalsArr from "../store/Animals";
import {ActivityIndicator} from "react-native-paper";

export interface AnimalsProps{
    navigation: any
}

const Animals:React.FC<AnimalsProps> = ({navigation}) => {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        AnimalsArr.setAnimals().then(response => setLoading(false))

    }, [])
    return (
        <>

        {
            loading? <ActivityIndicator
                    animating={true}
                    color={'#FF9D01'}
                    size={'large'}/>:
                <>
                    <AnimalsList
                        navigation={navigation}
                        animals={AnimalsArr.animals}/>
                </>
        }
        </>

    );
};

export default Animals;