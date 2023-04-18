import React from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from "react-native";
import Animated, {runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import {GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import KnobSVG from  "../assets/img/knob.svg"
import filters from "../store/Filtration";
import {observer} from "mobx-react-lite";


export interface RangeSliderProps {
    min: number;
    max: number;
    steps: number;
    title: string;
    onChange: any;
}

const WIDTH = Dimensions.get('window').width - 60;
const TRACK_WIDTH = Dimensions.get('window').width - 60;
const KNOB_SIZE = 25;
const MAX_WIDTH = TRACK_WIDTH - KNOB_SIZE/2 + 6



const RangeSlider:React.FC<RangeSliderProps> = observer(({min, max, onChange, steps, title}) => {

    const xKnob1 = useSharedValue(((filters.ageMin - min)/(max - min)) * MAX_WIDTH)
    const xKnob2 = useSharedValue(((filters.ageMax - min)/(max - min)) * MAX_WIDTH)

    const gestureHandler1 = useAnimatedGestureHandler({
        onStart:(event, context) => {
            context.startX = xKnob1.value
        },
        onActive: (event, context) =>{
            xKnob1.value =
                context.startX + event.translationX < 0
                    ? 0
                    : context.startX + event.translationX > xKnob2.value - 30
                    ? xKnob2.value - 30
                    : context.startX + event.translationX;


        },
        onEnd: ()=>{
            runOnJS(onChange)({min: `${Math.round((min + (xKnob1.value/MAX_WIDTH) * (max - min)) / steps) * steps}`,
                max: `${Math.round((min + (xKnob2.value/MAX_WIDTH) * (max - min)) / steps) * steps}`})
        }


    })

    const gestureHandler2 = useAnimatedGestureHandler({
        onStart:(event, context) => {
            context.startX = xKnob2.value
        },
        onActive: (event, context) =>{
            xKnob2.value =
                context.startX + event.translationX < xKnob1.value + 30
                    ? xKnob1.value + 30
                    : context.startX + event.translationX > MAX_WIDTH
                        ? MAX_WIDTH
                        : context.startX + event.translationX;


        },
        onEnd: ()=>{
            runOnJS(onChange)({min: `${Math.round((min + (xKnob1.value/MAX_WIDTH) * (max - min)) / steps) * steps}`,
             max: `${Math.round((min + (xKnob2.value/MAX_WIDTH) * (max - min)) / steps) * steps}`})
        }


    })

    const knob1Style = useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    translateX: xKnob1.value,
                }
            ]
        }
    })

    const knob2Style = useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    translateX: xKnob2.value,
                }
            ]
        }
    })

    const styleLine = useAnimatedStyle(()=> {
        return{
            backgroundColor: '#6A6D76',
            height: 3,
            marginTop: -3,
            borderRadius: 3,
            width: xKnob2.value - xKnob1.value,
            transform: [{translateX: xKnob1.value}]
        }
    })
    return (

        <View style={style.rangeContainer}>
            <View style = {style.track}/>
            <Animated.View style={styleLine}/>
            <View>
                <PanGestureHandler onGestureEvent = {gestureHandler1}>
                    <Animated.View style={[style.knob, knob1Style]}>
                        <KnobSVG/>
                    </Animated.View>
                </PanGestureHandler>
                <PanGestureHandler onGestureEvent = {gestureHandler2}>
                    <Animated.View style={[style.knob, knob2Style]}>
                        <KnobSVG/>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </View>
    );
})
const style = StyleSheet.create({
    rangeContainer:{
        padding: 0,
        borderColor: '#cccdb2',
        width: WIDTH,
        borderRadius: 20
    },
    labelsContainer:{
        width: TRACK_WIDTH,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18
    },
    label:{
        color: '#2d2d2d',
        fontSize: 12,
    },
    track: {
        height: 3,
        backgroundColor: '#D9D9D9',
        borderRadius: 3,
    },
    knob:{
        position: "absolute",
        height: KNOB_SIZE,
        width: KNOB_SIZE,
        borderRadius: KNOB_SIZE/2,
        marginTop: -KNOB_SIZE + 8,
        marginLeft: -12
    }

})

export default RangeSlider;
