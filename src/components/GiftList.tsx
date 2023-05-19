import React from 'react';
import gifts from "../store/Gifts";
import {Button, Card, Text} from "react-native-paper";
import NewsExample from "../assets/img/NewsExample.png";
import {ScrollView, StyleSheet} from "react-native";
import GiftSVG from '../assets/img/GiftOrange.svg'

export interface GiftListProps{
    navigation: any
}
const GiftList:React.FC<GiftListProps> = ({navigation}) => {
    const GiftViewList = [...gifts.gifts].map((gift)=>{
        return(
            <Card
                key={gift.id}
                style= {style.card}
                contentStyle={style.content}
            >
                <Card.Content>
                    <Text style={style.title}>{gift.title}</Text>
                    <Text style={style.text}>{gift.name}</Text>
                </Card.Content>
                <Card.Actions style={style.actions}>
                    <Button
                        onPress={()=>{}}
                        mode={'text'}
                        textColor={'#FF9D01'}
                        icon={GiftSVG}
                        style={style.button}>
                        Помочь</Button>
                </Card.Actions>

            </Card>
        )
    })
    return (
        <ScrollView
            style={
                {height: 636}}>{GiftViewList}</ScrollView>
    );
};

export default GiftList;

const style = StyleSheet.create({
    content: {
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        marginBottom: 25,
    },
    text: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#888888',
        width: 95,
        marginBottom: 30,
    },
    button: {
        left: 0,
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
});
