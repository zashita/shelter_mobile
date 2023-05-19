import React from 'react';
import Wrapper from "../components/Wrapper";
import NewsExample from '../assets/img/NewsDescExample.png'
import {Image, StyleSheet, View} from "react-native";
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

const style = StyleSheet.create({
    image: {
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#5A5858',
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
    },
    top_divider: {
        width: 251,
        height: 9,
        alignSelf: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginBottom: 40,
    },
});
