import React from 'react';
import animals from "../store/Animals";
import {StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react-lite";
import {isFlow} from "mobx";

const OtherInfo = observer(() => {
    const info: string[] = [];

    if (animals.currentAnimal.vaccinated)
    {
        info.push(
            animals.currentAnimal.sex === 0?
                'Вакцинирован':
                'Вакцинирована'
        )
    }
    if(animals.currentAnimal.sterilized)
    {
        info.push(
            animals.currentAnimal.sex === 0?
                'Кастрирован':
                'Стерилизована'
        )
    }
    if (animals.currentAnimal.on_happiness)
    {
        info.push('on_happiness')
    }
    if (animals.currentAnimal.on_rainbow)
    {
        info.push('on_rainbow')

    }
    return (
        <View style={style.block}>
            {
                info.map((block, index) => {
                    return(
                        <>
                            {

                            }
                        </>
                    )
                })
            }
        </View>
    );
})

export default OtherInfo;

const style = StyleSheet.create({
    block:{
        background: '#EDEDED',
        borderRadius: 8,
        width: '100%',
        padding: 15,
        marginBottom: 15
    },
    text:{
        background: '#FFD5B0',
        borderRadius: 10,
        color: 'black',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 14
    }
})
