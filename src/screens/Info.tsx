import React from 'react';
import {View} from "react-native";
import MainLayout from "../Layouts/MainLayout";
interface InfoProps{
    navigation: any;
}

const Info: React.FC<InfoProps> = ({navigation}) => {
    return (
        <MainLayout navigation={navigation}>

        </MainLayout>
    );
};

export default Info;