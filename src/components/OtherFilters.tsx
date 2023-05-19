import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import filters from "../store/Filtration";
import FilterButton from "./FilterButton";
import { observer } from "mobx-react-lite";

const OtherFilters = observer(() => {


  const sterToggle = () =>{
      filters.setSterialized(filters.sterialized === true ? false : true);
  }

  const vacToggle = () =>{
      filters.setVaccinated(filters.vaccinated === true ? false : true);
  }

  return (
    <>
      <View
        style={style.line}>
        <FilterButton
          onPress={()=>sterToggle()}
          active = {filters.sterialized}
          text={'Стерилизован'}
        />
        <FilterButton
            onPress={()=>vacToggle()}
            active = {filters.vaccinated}
            text={'Есть прививка'}
        />

      </View>
    </>
  );
})

export default OtherFilters;

const style = StyleSheet.create({
  line:{
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 20
  }
})
