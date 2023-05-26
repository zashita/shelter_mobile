import React from 'react';
import Wrapper from "../components/Wrapper";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {Button, Text} from "react-native-paper";
import News from "../store/News"
import server from "../server";
import Back from '../assets/img/Vector 2.svg'
import {observer} from "mobx-react-lite";

export interface NewsDescProps{
    navigation: any
}

const NewsDescription:React.FC<NewsDescProps> = observer(({navigation}) => {
    return (
        <>
            <ScrollView>
        <View style={style.top_container}>
            <View style={style.button}>
                <Button icon={Back}
                        onPress={() =>{navigation.goBack()}}>
                </Button>
            </View>
        </View>

        <Wrapper>
            <Image
                source={{uri: server.image + News.currentNewsItem.photo}}
                style={style.image}/>
            <Text style={style.title}>
                {News.currentNewsItem.label}
            </Text>
            <Text style = {style.text}>
                {News.currentNewsItem.description}
            </Text>
        </Wrapper>
            </ScrollView>
        </>
    );
})

export default NewsDescription;

const style = StyleSheet.create({
    image: {
        width: '100%',
        marginBottom: 20,
        height: 250
    },
    top_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 10,
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
        marginTop: 20
    },
    button:{
        width: '100%',
        alignItems: 'flex-start',
    }

});
