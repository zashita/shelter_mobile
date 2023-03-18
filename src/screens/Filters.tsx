import React from 'react';
import {StyleSheet, View} from "react-native";
import LocationSVG from "../assets/img/locationblack.svg";
import LinearGradient from "react-native-linear-gradient";
import Wrapper from "../components/Wrapper";
import Search from "../components/SearchBlock";
import AnimalsList, {animals_example} from "../components/AnimalsList";
import Navbar from "../components/Navbar";
import FilterSVG from '../assets/img/FiltrIconWhite.svg'
import {Button, ProgressBar, TextInput, ToggleButton} from "react-native-paper";
import {Text} from 'react-native-paper'


export interface IFiltersProps{
    navigation: any;
}

const Filters = (props: IFiltersProps) => {
    const [status, setStatus]: any = React.useState('checked');

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
            <LinearGradient colors={['#F4F4F4', "#F4F4F4", '#FF9D0100']} style={styles.linearGradient}>
                <View style={styles.main_block}>
                    <Wrapper>
                        <Text style={{color: 'gray', marginBottom: 10}}>Я хочу приютить</Text>
                        <View style={{display: 'flex', flexDirection: 'row', columnGap: 20, marginBottom: 40}}>
                            <Button buttonColor={'#FFF'} mode = {'contained'}>
                                Собаки
                            </Button>
                            <Button buttonColor={'#FFf'} mode = {'contained'}>
                                Коты
                            </Button>
                            <Button buttonColor={'#FFf'} mode = {'contained'}>
                                Другие
                            </Button>
                        </View>

                        <Text style={{color: 'gray', marginBottom: 10}}>Пол</Text>
                        <View style={{display: 'flex', flexDirection: 'row', columnGap: 20, marginBottom: 40}}>
                            <Button buttonColor={'#FFF'} mode = {'contained'}>
                                Мужской
                            </Button>
                            <Button buttonColor={'#FFf'} mode = {'contained'}>
                                Женский
                            </Button>
                        </View>
                        <Text style={{color: 'gray', marginBottom: 10}}>Возраст</Text>
                        <View style={{display: 'flex', flexDirection: 'row', columnGap: 20, marginBottom: 40}}>
                            <TextInput
                                textColor={'#6A6D76'}
                                outlineColor={'#FF9D01'}
                                activeOutlineColor={'#FF9D01'}
                                activeUnderlineColor={'#FF9D01'}
                                underlineStyle={{display: 'none'}}
                                style={{backgroundColor: '#fff',
                                borderRadius: 20, width: '45%'}}
                                >

                            </TextInput>

                            <TextInput
                                textColor={'#6A6D76'}
                                outlineColor={'#FF9D01'}
                                activeOutlineColor={'#FF9D01'}
                                activeUnderlineColor={'#FF9D01'}
                                underlineStyle={{display: 'none'}}
                                style={{backgroundColor: '#fff',
                                    borderRadius: 20, width: '45%'}}
                            >

                            </TextInput>
                        </View>
                        <View style = {{marginBottom: 40}}>
                            <ProgressBar progress={0.5} color={'gray'} />
                        </View>

                        <Text style={{color: 'gray', marginBottom: 10}}>Возраст</Text>

                        <View style={{display: 'flex', flexDirection: 'row', columnGap: 20, marginBottom: 20}}>
                            <Button buttonColor={'#FFF'} mode = {'contained'}>
                                Кастрирован
                            </Button>
                            <Button buttonColor={'#FFf'} mode = {'contained'}>
                                Стерилизован
                            </Button>

                        </View>
                        <Button buttonColor={'#FFf'} mode = {'contained'} style={{width: '60%'}}>
                            Есть прививка
                        </Button>


                    </Wrapper>
                    <View style={{position: 'absolute',
                        bottom: 25, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Button buttonColor={'#D9D9D9'} mode ={"contained"} style={{width: "40%"}}>
                            Применить
                        </Button>
                    </View>


                </View>
            </LinearGradient>


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
        // backgroundColor: `#F4F4F4`,
        backgroundColor: 'transparent',
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