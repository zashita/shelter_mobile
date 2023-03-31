import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import MainLayout from "../Layouts/MainLayout";
import NewsList from "../components/NewsList";
import {observer} from "mobx-react-lite";
import AnimalsArr from "../store/Animals";
import News from '../store/News'
import {ActivityIndicator} from "react-native-paper";
interface InfoProps{
    navigation: any;
}

const Info: React.FC<InfoProps> = observer(({navigation}) => {
        const [loading, setLoading] = useState(true)
        useEffect(()=>{
            News.setNews().then(response => setLoading(false))

        }, [])
    return (
        <>
            {
                loading? <ActivityIndicator
                        size={'large'}
                        color = {'#FF9D01'}/>
                    :<NewsList navigation={navigation}/>
            }
        </>
    );
}
)

export default Info;