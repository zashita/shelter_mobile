import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import styles from './style.scss';
import FiltrSVG from '../../assets/img/FiltrIcon.svg';
import SearchSVG from '../../assets/img/icons8-search.svg';
import {Button} from "react-native-paper";
import Navigation from "../../store/Navigation"

export interface ISearchProps{
    navigation: any;
}
const Search = (props: ISearchProps) => {
    const openFilters = () =>{
        props.navigation.navigate('Filters')
    }
  return (
    <View style={styles.searchBlock}>
        <View style={styles.searchImage}>
            <SearchSVG width={20} height={20}/>
        </View>
      <TextInput style={styles.input} placeholder={'Найти'} maxLength={25}/>
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
};

export default Search;
