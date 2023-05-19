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
        <View style={info.length < 3?style.block2: style.block4}>
            {
                info.map((block, index) => {
                    return(
                        <>
                            {
                                index ===0?
                                    <Text style={style.text1}>
                                        {block}
                                    </Text>: index === 1?
                                        <Text style={style.text2}>
                                            {block}
                                        </Text>: index === 2?
                                            <Text style={style.text3}>
                                                {block}
                                            </Text>:index === 3?
                                                <Text style={style.text4}>
                                                    {block}
                                                </Text>:<Text/>
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
    block2:{
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        height: 52
    },
    block4:{
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        height: 95
    },
    text1:{
        position: 'absolute',
        backgroundColor: '#FFD5B0',
        borderRadius: 10,
        color: 'black',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 14,
        left: 10,
        top: 10,
    },
    text2:{
        position: 'absolute',
        backgroundColor: '#FFD5B0',
        borderRadius: 10,
        color: 'black',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 14,
        right: 10,
        top: 10,
    },
    text3:{
        position: 'absolute',
        backgroundColor: '#FFD5B0',
        borderRadius: 10,
        color: 'black',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 14,
        left: 10,
        top: 50,
    },
    text4:{
        position: 'absolute',
        backgroundColor: '#FFD5B0',
        borderRadius: 10,
        color: 'black',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 14,
        right: 10,
        top: 50,
    }
})
