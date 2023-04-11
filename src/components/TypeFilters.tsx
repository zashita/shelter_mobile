import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import FilterButton from "./FilterButton";
import filters from '../store/Filtration'
import { observer } from "mobx-react-lite";

const TypeFilters = observer(() => {


  const onDogToggle = () => {
    filters.setDog(filters.dog === true ? false : true);
  };

  const onCatToggle = () => {
    filters.setCat(filters.cat === true ? false : true);
  };

  const onMouseToggle = () => {
    filters.setMouse(filters.mouse === true ? false : true);
  };

  const onBirdToggle = () => {
    filters.setBird(filters.bird === true ? false : true);
  };

  const onFishToggle = () => {
    filters.setFish(filters.fish === true? false: true)
  };


  return (
    <>
      <View style={style.firstLine}>
        <FilterButton
          onPress={()=>onDogToggle()}
          text={'Собаку'}
          active={filters.dog}
          />
        <FilterButton
          onPress={()=>onCatToggle()}
          text={'Кота'}
          active={filters.cat}
        />
        <FilterButton
          onPress={()=>onMouseToggle()}
          text={'Грызуна'}
          active={filters.mouse}
        />
      </View>
      <View style={style.secondLine}>
      <FilterButton
        onPress={()=>onBirdToggle()}
        text={'Птицу'}
        active={filters.bird}
      />
      <FilterButton
        onPress={()=>onFishToggle()}
        text={'Рыбку'}
        active={filters.fish}
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
