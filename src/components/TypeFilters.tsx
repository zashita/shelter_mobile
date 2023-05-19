import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import FilterButton from "./FilterButton";
import filters from '../store/Filtration'
import { observer } from "mobx-react-lite";

const TypeFilters = observer(() => {


  const onDogToggle = () => {
    filters.setDog(filters.typeFilters.includes('Собака')? false : true);
  };

  const onCatToggle = () => {
    filters.setCat(filters.typeFilters.includes('Кот')? false : true);
  };

  const onOtherToggle = () => {
    filters.setOther(filters.typeFilters.includes('Другой')? false : true);
  };

  const onBirdToggle = () => {
    filters.setBird(filters.typeFilters.includes('Птица')? false : true);
  };



  return (
    <>
      <View style={style.firstLine}>
        <FilterButton
          onPress={()=>onDogToggle()}
          text={'Собаку'}
          active={filters.typeFilters.includes('Собака')}
          />
        <FilterButton
          onPress={()=>onCatToggle()}
          text={'Кота'}
          active={filters.typeFilters.includes('Кот')}
        />
        <FilterButton
            onPress={()=>onBirdToggle()}
            text={'Птицу'}
            active={filters.typeFilters.includes('Птица')}
        />
      </View>
      <View style={style.secondLine}>
      <FilterButton
        onPress={()=>onOtherToggle()}
        text={'Другое'}
        active={filters.typeFilters.includes('Другой')}
      />
      </View>
    </>
  );
})

export default TypeFilters;

const style = StyleSheet.create({
  firstLine:{
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 20
  },
  secondLine:{
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 40
  },
})
