import React, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import FilterButton from "./FilterButton";
import filters from '../store/Filtration'
import { observer } from "mobx-react-lite";

const SexFilters = observer(() => {

  const maleToggle = () =>{
    filters.setMale(filters.male === true? false: true)
    filters.setFemale(filters.female === true? false: false)
    filters.setSterialized(filters.sterialized === true? false: false)

  }

  const femaleToggle = () =>{
    filters.setFemale(filters.female === true? false: true)
    filters.setMale(filters.male === true? false: false)
    filters.setCastrated(filters.castrated === true? false: false)
  }
  return (
    <View
      style={style.line}>
      <FilterButton
        onPress={()=>maleToggle()}
        active = {filters.male}
        text={'Мужской'}
        />
      <FilterButton
        onPress={()=>femaleToggle()}
        active = {filters.female}
        text={'Женский'}
      />
    </View>


  );
})

export default SexFilters;

const style = StyleSheet.create({
  line:{
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 40
  }
})
