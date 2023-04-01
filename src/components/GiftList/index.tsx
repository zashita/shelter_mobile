import React from 'react';
import gifts from "../../store/Gifts";
import style from "./style.scss";
import {Button, Card, Text} from "react-native-paper";
import NewsExample from "../../assets/img/NewsExample.png";
import {ScrollView} from "react-native";
import GiftSVG from '../../assets/img/GiftOrange.svg'

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