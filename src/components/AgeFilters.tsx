import React from "react";
import {Alert, TextInput, View} from "react-native";
import style from "../styles/filters.scss";
import { ProgressBar } from "react-native-paper";
import RangeSlider from "./RangeSlider";
import filters from '../store/Filtration'


const AgeFilters = () => {

    const onChange = (range: any) => {
        filters.setMinAge(range.min)
        filters.setMaxAge(range.max)
    }
  return (
    <>
      <View
        style={{display: 'flex', flexDirection: 'row',
          columnGap: 20, marginBottom: 40}}>
        <TextInput
          maxLength={1}
          style={style.age_input}/>
        <TextInput
          maxLength={2}
          style={style.age_input}/>

      </View>
      <View style = {{marginBottom: 40, flex: 1, flexDirection: 'row'}}>
        <RangeSlider min={0} max={20} onChange={(range : any) => onChange(range)} title={'age'} steps={1}/>
      </View>
    </>

  );
};

export default AgeFilters;
