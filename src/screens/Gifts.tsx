import React, {useEffect, useState} from 'react';
import MainLayout from "../Layouts/MainLayout";
import GiftList from "../components/GiftList";
import gifts from "../store/Gifts";
import {ActivityIndicator} from "react-native-paper";


export interface GiftsProps{
    navigation: any
}

const Gifts:React.FC<GiftsProps> = ({navigation}) => {

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        gifts.setGifts().
        then(promise => setLoading(false))
    }, [])
    return (
        <MainLayout navigation={navigation}>
            {
                loading?
                    <ActivityIndicator size={"large"} color={'#FF9D01'}/>
                    :
                    <GiftList navigation={navigation}/>
            }
        </MainLayout>
    );
};

export default Gifts;