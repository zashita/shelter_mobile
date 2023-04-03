import React, {useState} from 'react';
import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import styles from "../styles/login.scss"
import CustomButton from "../components/CustomButton";

export interface ILogInProps{
  navigation: any;
}

const LogIn = (props: ILogInProps) => {
    const [phone, setPhone] = useState('')

  const login = () =>{
    props.navigation.navigate("Main")

  }
  const onChange = (e: any) =>{
      setPhone(e.target.value)
  }
    return (
        <View style={styles.background}>
            <Image style={styles.logo} source ={require('../assets/img/Logo.png')}/>
            <Text style={styles.text}>Вход в приложение</Text>
            <TextInput
                style={styles.input}
                onChange={e => onChange(e)}
                value={phone}/>
            <CustomButton
                style={styles.button}
                title={"Продолжить"}
            text_style={styles.button_text}
            onPress={login}/>

        </View>
    );
};

export default LogIn;
