import React from 'react';
import {Pressable, Text} from "react-native";
import * as events from "events";


export interface IButtonProps{
    style: object;
    text_style: object;
    title: string;

    onPress: events;
}
const CustomButton:React.FC<IButtonProps> = props => {
    const {style, text_style, title, onPress} = props
    return (
        <Pressable style={style} onPress={onPress}>
            <Text style = {text_style}>{title}</Text>
        </Pressable>
    );
};

export default CustomButton;