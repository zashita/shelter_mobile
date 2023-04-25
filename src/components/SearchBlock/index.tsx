import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import styles from './style.scss';
import FiltrSVG from '../../assets/img/FiltrIcon.svg';
import SearchSVG from '../../assets/img/icons8-search.svg';
import {Button} from "react-native-paper";
import Navigation from "../../store/Navigation"
import {observer} from "mobx-react-lite";
import search from "../../store/Search";

export interface ISearchProps{
    navigation: any;
}
const Search = observer((props: ISearchProps) => {
    const openFilters = () =>{
        props.navigation.navigate('Filters')
    }


    const onChange = (e:any) =>{
        search.setSearchString(e.target.value)
    }
  return (
    <View style={styles.searchBlock}>
        <View style={styles.searchImage}>
            <SearchSVG width={20} height={20}/>
        </View>
      <TextInput
          style={styles.input}
          placeholder={'Найти'}
          maxLength={25}
          onChange={e => onChange(e)}
          value={search.searchString}
      />
        {
            Navigation.currentScreen === "Home"?
            <View>
                <Button icon={FiltrSVG} onPress={openFilters}>

                </Button>
            </View>:
                <View></View>
        }



    </View>
  );
})

export default Search;
