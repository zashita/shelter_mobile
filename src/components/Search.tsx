import React, {useState} from 'react';
import {Alert, Image, NativeEventEmitter, StyleSheet, TextInput, View} from 'react-native';
import FiltrSVG from '../assets/img/FiltrIcon.svg';
import SearchSVG from '../assets/img/icons8-search.svg';
import {Button} from "react-native-paper";
import Navigation from "../store/Navigation"
import {observer} from "mobx-react-lite";
import search from "../store/Search";
import {useRoute} from "@react-navigation/native";

export interface ISearchProps{
    navigation: any;
}


const Search = observer((props: ISearchProps) => {
    const route = useRoute();
    const [text, setText] = useState('')
    const openFilters = () =>{
        props.navigation.navigate('Filters')
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
          onChangeText={e => search.setSearchString(e)}
          value={search.searchString}
      />


        <View style={styles.filtrBlock}>
            {
                route.name === "Main"?
                        <Button icon={FiltrSVG} onPress={openFilters}>

                        </Button>
                    :
                    <View></View>
            }
        </View>



    </View>
  );
})

export default Search;

const styles = StyleSheet.create({
    searchBlock: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 30,
        flexDirection: 'row',
        height: 45,
        marginBottom: 31,
        alignItems: 'center',
    },
    filtrBlock:{
        width: 35,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'left',
        color: '#C1C1C1',
    },
    searchImage: {
        width: 35,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
