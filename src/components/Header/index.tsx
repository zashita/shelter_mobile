import React from 'react';
import {View} from "react-native";
import style from './style.scss'

const Header = ({children}: any) => {
    return (
        <View style={style.header}>
            {children}
        </View>
    );
};

export default Header;