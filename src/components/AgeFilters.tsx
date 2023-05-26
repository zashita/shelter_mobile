import React, {useState} from "react";
import {Alert, StyleSheet, TextInput, View} from "react-native";
import { ProgressBar } from "react-native-paper";
import RangeSlider from "./RangeSlider";
import filters from '../store/Filtration'
import {observer} from "mobx-react-lite";
import {useTheme} from "@react-navigation/native";


const AgeFilters = observer(() => {

    const onChange = (range: any) => {
        filters.setMinAge(range.min)
        filters.setMaxAge(range.max)
    }

    const [ageMin, setAgeMin] = useState('')
    const [ageMax, setAgeMax] = useState('')


    const ageMinHandler = (e: any) => {
        setAgeMin(e.target.value)
        filters.setMinAge(e.target.value)
    }

        const ageMaxHandler = (e: any) =>{
            setAgeMax(e.target.value)
            filters.setMaxAge(e.target.value)

    }
    const {colors} = useTheme();

    const style = StyleSheet.create({
        age_input: {
            width: '47%',
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingLeft: 20,
            paddingRight: 20,
            color: '#888888',
        },
    });

  return (
    <>
      <View
        style={{display: 'flex', flexDirection: 'row',
          columnGap: 20, marginBottom: 40}}>
        <TextInput
          placeholder={"от " + filters.ageMin}
          keyboardType={'numeric'}
          placeholderTextColor={'gray'}
          style={style.age_input}
          editable={false}/>
        <TextInput
          placeholder = {"до " + filters.ageMax}
          placeholderTextColor={'gray'}
          style={style.age_input}
          editable={false}
          value={ageMax}
          keyboardType={'numeric'}
          />

      </View>
      <View style = {{maxHeight: 50, flex: 1, flexDirection: 'row'}}>
        <RangeSlider min={0} max={20} onChange={(range : any) => onChange(range)} title={'age'} steps={1}/>
      </View>
    </>

  );
})

export default AgeFilters;
// const style = StyleSheet.create({
//     age_input: {
//         width: '47%',
//         backgroundColor: '#fff',
//         borderRadius: 20,
//         paddingLeft: 20,
//         paddingRight: 20,
//         color: '#888888',
//     },
// });
