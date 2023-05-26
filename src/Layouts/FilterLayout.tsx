import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import LocationSVG from "../assets/img/locationblack.svg";
import LinearGradient from "react-native-linear-gradient";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";
import {ActivityIndicator, Button} from "react-native-paper";
import AnimalsList from "../components/AnimalsList";
import AnimalsArr from "../store/Animals";
import Navbar from "../components/Navbar";
import GiftWhiteSVG from '../assets/img/GiftWhite.svg';
import LikeWhiteSVG from '../assets/img/LikeWhite.svg';
import FilterSVG from '../assets/img/FiltrIconWhite.svg'
import FilterBack from '../assets/img/fitersback.svg'
import {useTheme} from "@react-navigation/native";
import filters from "../store/Filtration";


const HEIGHT = Dimensions.get('screen').height

export interface FilterLayoutProps{
    navigation: any;
    children: React.ReactNode;
}

const FilterLayout:React.FC<FilterLayoutProps> = ({navigation, children}) => {

    const {colors} = useTheme();

    const styles = StyleSheet.create({
        background:{
            backgroundColor: colors.primary,
            flex: 1

        },
        location_block:{
            marginLeft: 'auto',
            marginRight: `auto`,
            top: 50,
            display: `flex`,
            flexDirection: "row",
            marginBottom: 75,
            alignItems: `center`,
            height: 30

        },
        location_text:{
            color: 'white',
        },
        location_image:{
            marginRight: 10,
        },
        main_block: {
            flex: 1,
            backgroundColor: colors.background,
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
        }})

    const clearOptions = () =>{
        filters.clearFilters().then(navigation.goBack())
    }

    return (
        <View style={styles.background}>
            <Button icon={FilterBack} style={{position: 'absolute', left: 0, top:45}}
            onPress={clearOptions}>

            </Button>
            <View style={styles.location_block}>


                <View style={styles.location_image}>
                    <FilterSVG/>
                </View>
                <Text style={styles.location_text}>Фильтры</Text>

            </View>
            <View style={styles.main_block}>
                <Wrapper>
                    {children}
                </Wrapper>
            </View>
        </View>
    );
};

export default FilterLayout;






