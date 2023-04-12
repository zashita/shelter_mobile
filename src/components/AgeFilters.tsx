import React from "react";
import { TextInput, View } from "react-native";
import style from "../styles/filters.scss";
import { ProgressBar } from "react-native-paper";
import RangeSlider from 'react-native-range-slider'

const AgeFilters = () => {
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
        <RangeSlider
          minValue={0}
          maxValue={100}
          tintColor={'#da0f22'}
          handleBorderWidth={1}
          handleBorderColor="#454d55"
          selectedMinimum={20}
          selectedMaximum={40}
          style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
          onChange={ (data)=>{ console.log(data);} }
        />
      </View>
    </>

  );
};

export default AgeFilters;
