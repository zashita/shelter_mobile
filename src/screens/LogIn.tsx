import React from 'react';
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from "../global/screen_styles/login.scss"
import CustomButton from "../components/CustomButton";
const LogIn = () => {
    return (
        <View style={styles.background}>
            <Image style={styles.logo} source ={require('../assets/img/Logo.png')}/>
            <Text style={styles.text}>Вход в приложение</Text>
            <TextInput style={styles.input}/>
            <CustomButton
                style={styles.button}
                title={"Продолжить"}
            text_style={styles.button_text}/>

        </View>
    );
};

export default LogIn;