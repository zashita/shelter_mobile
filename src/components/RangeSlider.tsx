import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Animated from "react-native-reanimated";


export interface RangeSliderProps {
    min: number;
    max: number;
    steps: number;
    title: string;
    onChange: any;
}

const WIDTH = Dimensions.get('window').width - 80;


const RangeSlider:React.FC<RangeSliderProps> = ({min, max, onChange, steps, title}) => {
    return (
        <View style={style.rangeContainer}>
            <View style={style.labelsContainer}>
                <Text style = {style.label}>{min}</Text>
                <Text style = {style.label}>{max}</Text>
            </View>
            <View style = {style.track}>
                <Animated.View></Animated.View>
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    rangeContainer:{
        padding: 20,
        borderColor: '#cccdb2',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    labelsContainer:{
        width: 400,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18
    },
    label:{
        color: '#fff',
        fontSize: 12,
    },
    track: {
        height: 3,
        backgroundColor: '#cccdb2',
        borderRadius: 3,
    },

})

export default RangeSlider;
