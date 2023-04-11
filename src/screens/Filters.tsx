import React from 'react';
import {Alert, StyleSheet, TextInput, View} from "react-native";
import LocationSVG from "../assets/img/locationblack.svg";
import LinearGradient from "react-native-linear-gradient";
import Wrapper from "../components/Wrapper";
import Search from "../components/SearchBlock";
import Navbar from "../components/Navbar";
import FilterSVG from '../assets/img/FiltrIconWhite.svg'
import {Button, ProgressBar, ToggleButton} from "react-native-paper";
import {Text} from 'react-native-paper'
import {TextField} from "@mui/material";
import style from '../styles/filters.scss'
import animals from "../store/Animals";
import url from "../url";
import server_url from "../url";
import TypeFilters from "../components/TypeFilters";
import SexFilters from "../components/SexFilters";


export interface IFiltersProps{
    navigation: any;
}

const Filters = (props: IFiltersProps) => {
    const [status, setStatus]: any = React.useState('unchecked');

    const onButtonToggle = () => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };
    return (
        <View style={styles.background}>
            <View style={styles.location_block}>
                <View style={styles.location_image}>
                    <FilterSVG/>
                </View>
                <Text style= {{color: '#fff'}}>Фильтры, </Text>
            </View>
                <View
                  style={styles.main_block}>
                    <Wrapper>
                        <Text style={{color: 'gray', marginBottom: 10}}>Я хочу приютить</Text>
                           <TypeFilters/>

                        <Text style={{color: 'gray', marginBottom: 10}}>Пол</Text>
                       <SexFilters/>

                        <Text
                            style={{color: 'gray', marginBottom: 10}}>
                            Возраст
                        </Text>
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
                        <View style = {{marginBottom: 40}}>
                            <ProgressBar
                                progress={0.5}
                                color={'gray'} />
                        </View>

                        <Text style={{color: 'gray',
                            marginBottom: 10}}>Возраст</Text>

                        <View
                            style={{display: 'flex', flexDirection: 'row',
                                columnGap: 20, marginBottom: 20}}>
                            <Button
                                buttonColor={'#FFF'}
                                mode = {'contained'}
                                textColor={'#000'}
                                >
                                Кастрирован
                            </Button>
                            <Button
                                buttonColor={'#FFf'}
                                textColor={'#000'}
                                mode = {'contained'}>
                                Стерилизован
                            </Button>

                        </View>
                        <Button
                            buttonColor={'#FFf'}
                            mode = {'contained'}
                            style={{width: '60%'}}
                            textColor={'#000'}>
                            Есть прививка
                        </Button>


                    </Wrapper>
                    <View style={{position: 'absolute',
                        bottom: 25, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Button
                            buttonColor={'#D9D9D9'}
                            mode ={"contained"}
                            textColor={'#000'}
                            style={{width: "40%"}}
                            onPress={() =>{
                                const newUrl = new URL(server_url)
                                newUrl.searchParams.append('type', 'cat')
                                animals.setUrl(newUrl);
                                props.navigation.navigate("Main")
                            }}>
                            Применить
                        </Button>
                    </View>


                </View>


        </View>


    );
};

export default Filters;

const styles = StyleSheet.create({
    background:{
        backgroundColor: `#FF9D01`,

    },
    location_block:{
        marginLeft: 'auto',
        marginRight: `auto`,
        top: 50,
        display: `flex`,
        flexDirection: "row",
        marginBottom: 75,
        alignItems: `center`

    },
    location_text:{

    },
    location_image:{
        marginRight: 10,
    },
    main_block: {
        height: 764,
        backgroundColor: `#F4F4F4`,
        borderRadius: 40,
    },

    choise_img:{
        // width: 48,
        // height:48,
    },
    categories_container:{
        display: "flex",
        flexDirection: "row",
        columnGap: 22,
    },
    linearGradient: {
        borderRadius: 40,
    }



})
