import React from 'react';
import {Alert, StyleSheet, TextInput, View} from "react-native";
import LocationSVG from "../assets/img/locationblack.svg";
import LinearGradient from "react-native-linear-gradient";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import FilterSVG from '../assets/img/FiltrIconWhite.svg'
import {Button, ProgressBar, ToggleButton} from "react-native-paper";
import {Text} from 'react-native-paper'
import animals from "../store/Animals";
import server from "../server";
import server_url from "../server";
import TypeFilters from "../components/TypeFilters";
import SexFilters from "../components/SexFilters";
import filters from "../store/Filtration"
import OtherFilters from "../components/OtherFilters";
import AgeFilters from "../components/AgeFilters";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import FilterLayout from "../Layouts/FilterLayout";
import ResetSVG from "../assets/img/reset_icon_246246.svg"


export interface IFiltersProps{
    navigation: any;

}

const Filters = (props: IFiltersProps) => {
    const [status, setStatus]: any = React.useState('unchecked');

    const setOptions = () =>{
        props.navigation.goBack();
    }

    const clearOptions = () =>{
        filters.clearFilters().then(props.navigation.goBack())
    }

    const onButtonToggle = () => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };
    return (
        <FilterLayout navigation={props.navigation}>
            <Text style={{color: 'gray', marginBottom: 10}}>Я хочу приютить</Text>
            <TypeFilters/>

            <Text style={{color: 'gray', marginBottom: 10}}>Пол</Text>
            <SexFilters/>

            <Text
                style={{color: 'gray', marginBottom: 10}}>
                Возраст
            </Text>
            <AgeFilters/>

            <Text style={{color: 'gray',
                marginBottom: 10}}>Другие</Text>

            <OtherFilters/>
            <View style = {style.buttonContainer}>
                <Button
                    buttonColor={'#FF9D01'}
                    mode ={"contained"}
                    textColor={'#000'}
                    style={style.buttonSet}
                    onPress={setOptions}>
                    Применить
                </Button>
                <Button
                    buttonColor={'#D9D9D9'}
                    mode ={"contained"}
                    textColor={'#000'}
                    style={style.buttonClear}
                    onPress={clearOptions}
                    icon={ResetSVG}>

                </Button>
            </View>

        </FilterLayout>



)}
const style = StyleSheet.create({
    buttonSet:{
        width: '40%',
        alignSelf: "center",
        marginBottom: 20

    },
    buttonClear:{
        width: '10%',
        alignSelf: "center",
        marginBottom: 20
    },

    buttonContainer:{
        flex: 1,
        justifyContent: "center",
        columnGap: 20,
        flexDirection: "row",
        width: '100%',
    }
})

export default Filters;



