import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import style from './style.scss'
import NewsExample from '../../assets/img/NewsExample.png'
import News from '../../store/News'
import {ScrollView} from "react-native";
import {INewsItem} from "../../types/NewsItem";


const OpenNewsItem = (newsItem: INewsItem) =>{
    News.setCurrentNewsItem(newsItem);
}
const NewsList = () => {
    const NewsViewList = [...News.news].map((newsItem)=>{

        return(
            <Card
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
};

export default NewsList;