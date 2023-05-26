import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import MainLayout from "../Layouts/MainLayout";
import NewsList from "../components/NewsList";
import {observer} from "mobx-react-lite";
import AnimalsArr from "../store/Animals";
import news from '../store/News'
import {ActivityIndicator} from "react-native-paper";
import animals from "../store/Animals";
import AnimalsList from "../components/AnimalsList";
import {useTheme} from "@react-navigation/native";
interface InfoProps{
    navigation: any;
}

const News: React.FC<InfoProps> = observer(({navigation}) => {
        const [loading, setLoading] = useState(true)
        useEffect(()=>{
            news.setNews().
            then(promise => setLoading(false))
        }, [])

    const {colors} = useTheme()
    return (
        <>
            <MainLayout navigation={navigation}>
                {loading?
                    <ActivityIndicator
                        size={"large"}
                        color={colors.primary}/>
                    :
                    <NewsList
                        navigation={navigation}/>
                }
            </MainLayout>

        </>
    );
}
)

export default News;
