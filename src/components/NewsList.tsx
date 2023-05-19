import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import NewsExample from '../assets/img/NewsExample.png'
import News from '../store/News'
import {ScrollView, StyleSheet} from "react-native";
import {INewsItem} from "../types/NewsItem";
import animals from "../store/Animals";
import search from "../store/Search";
import {observer} from "mobx-react-lite";


export interface NewsListProps{
    navigation: any
}
const NewsList:React.FC<NewsListProps> = observer(({navigation}) => {
    const OpenNewsItem = (newsItem: INewsItem) =>{
        News.setCurrentNewsItem(newsItem);
        navigation.navigate("NewsDescription");

    }

    const filteredNews = News.news.filter(newsItem => {
        return search.searchString !== undefined?newsItem.text.toLowerCase().includes(search.searchString.toLowerCase()): newsItem
    })

    const NewsViewList = [...filteredNews].map((newsItem)=>{

        return(
            <Card
                key={newsItem.id}
                style= {style.card}
                contentStyle={style.content}
                onPress={() => OpenNewsItem(newsItem)}>
                <Card.Cover source={NewsExample} style={style.cover}/>
                <Card.Content>
                    <Text style={style.date}>{newsItem.date}</Text>
                    <Text style={style.title}>{newsItem.title}</Text>
                    <Text style={style.text}>{newsItem.text}</Text>
                </Card.Content>

            </Card>
        )
    })
    return (
        <ScrollView
    style={
    {height: 636}}>{NewsViewList}</ScrollView>
    )
})

export default NewsList;

const style = StyleSheet.create({
    content: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        marginBottom: 20,
    },
    cover: {
        width: 170,
        height: 210,
    },
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        width: 140,
        marginBottom: 20,
    },
    text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        width: 140,
        color: '#6A6D76',
        maxHeight: 85,
    },
    date: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12,
        color: '#6A6D76',
        marginBottom: 30,
        marginLeft: 100,
    },
});
