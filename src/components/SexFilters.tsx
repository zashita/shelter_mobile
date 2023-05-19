import React, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import FilterButton from "./FilterButton";
import filters from '../store/Filtration'
import { observer } from "mobx-react-lite";

const SexFilters = observer(() => {

  const maleToggle = () =>{
    filters.setSex(0)
  }

  const femaleToggle = () =>{
    filters.setSex(1)
  }
  return (
    <View
      style={style.line}>
      <FilterButton
        onPress={()=>maleToggle()}
        active = {filters.sex === 0}
        text={'Мужской'}
        />
      <FilterButton
        onPress={()=>femaleToggle()}
        active = {filters.sex === 1}
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
