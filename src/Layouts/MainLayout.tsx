import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LocationSVG from "../assets/img/locationblack.svg";
import LinearGradient from "react-native-linear-gradient";
import Wrapper from "../components/Wrapper";
import Search from "../components/SearchBlock";
import {ActivityIndicator} from "react-native-paper";
import AnimalsList from "../components/AnimalsList";
import AnimalsArr from "../store/Animals";
import Navbar from "../components/Navbar";

export interface MainLayoutProps{
    navigation: any;
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({navigation, children}) => {
    return (
        <View style={styles.background}>
            <View style={styles.location_block}>
                <View style={styles.location_image}>
                    <LocationSVG/>
                </View>
                <Text style= {{color: '#000'}}>Минск, </Text>
                <Text>Беларусь</Text>
            </View>
            <LinearGradient colors={['#F4F4F4', "#F4F4F4", '#FF9D0100']} style={styles.linearGradient}>
                <View style={styles.main_block}>
                    <Wrapper>
                        {children}
                    </Wrapper>
                    <Navbar navigation={navigation}/>
                </View>
            </LinearGradient>


        </View>
    );
};

export default MainLayout;

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