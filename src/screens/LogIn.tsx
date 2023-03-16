import React from 'react';
import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import styles from "./screen_styles/login.scss"
import CustomButton from "../components/CustomButton";

export interface ILogInProps{
  navigation: any;
}

const LogIn = (props: ILogInProps) => {

  const login = () =>{
    props.navigation.navigate("Animals")

  }
    return (
        <View style={styles.background}>
            <Image style={styles.logo} source ={require('../assets/img/Logo.png')}/>
            <Text style={styles.text}>Вход в приложение</Text>
            <TextInput style={styles.input}/>
            <CustomButton
                style={styles.button}
                title={"Продолжить"}
            text_style={styles.button_text}
            onPress={login}/>

        </View>
    );
};

export default LogIn;
