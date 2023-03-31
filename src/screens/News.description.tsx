import React from 'react';
import Wrapper from "../components/Wrapper";
import NewsExample from '../assets/img/NewsDescExample.png'
import {Image, View} from "react-native";
import style from '../styles/news.description.scss'
import {Text} from "react-native-paper";
import News from "../store/News"

const NewsDescription = () => {
    return (
        <Wrapper>
            <View style={style.top_divider}>

            </View>
            <Image
                source={NewsExample}
                style={style.image}/>
            <Text style={style.title}>
                {News.currentNewsItem.title}
            </Text>
            <Text style = {style.text}>
                {News.currentNewsItem.text}
            </Text>
        </Wrapper>
    );
};

export default NewsDescription;