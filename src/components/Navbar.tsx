import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import HomeSVG from '../assets/img/HomeInactive.svg';
import InfoSVG from '../assets/img/InfoInactive.svg'
import GiftSVG from '../assets/img/GiftInactive.svg'
import LikeSVG from '../assets/img/LikeScreen.svg'
import HomeActiveSVG from '../assets/img/HomeActive.svg'
import InfoActiveSVG from '../assets/img/InfoActive.svg'
import GiftActiveSVG from '../assets/img/GiftActive.svg'
import LikeActiveSVG from '../assets/img/LikeActive.svg'
import {Button} from "react-native-paper";
import {observer} from "mobx-react-lite";
import Navigation from "../store/Navigation";
import search from "../store/Search";
import {useRoute} from "@react-navigation/native";

export interface NavbarProps{
    navigation: any;
}

const HEIGHT = Dimensions.get('screen').height;

const Navbar:React.FC<NavbarProps> = observer(({navigation}) => {

    const route = useRoute()

    const goHome = () =>{
        navigation.navigate('Main');

    }

    const goInfo = () =>{
        navigation.navigate('News')

    }
    const goGifts = () =>{
        navigation.navigate('Gifts')

    }

    const goLiked = () =>{
        navigation.navigate('Liked')
    }



  return (
    <View style={style.bar}>
      <View style={style.icons_container}>
          <Button icon={
              route.name === "Main"?
              HomeActiveSVG: HomeSVG}
                  style = {{justifyContent: 'center'}}
          onPress={goHome}>

          </Button>
          <Button icon={route.name === "News"?
              InfoActiveSVG: InfoSVG} style = {{justifyContent: 'center'}}
          onPress={goInfo}>

          </Button>
          <Button icon={route.name === "Gifts"?
              GiftActiveSVG: GiftSVG}  style = {{justifyContent: 'center'}}
          onPress={goGifts}>

          </Button>
          <Button icon={route.name === "Liked"?
              LikeActiveSVG: LikeSVG}  style = {{justifyContent: 'center'}}
          onPress={goLiked}>

          </Button>
      </View>
    </View>
  );
});

export default Navbar;

const style = StyleSheet.create({
    bar: {
    flex: 1,
    // width: Dimensions.get('window').width,
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#EE7100',
    borderBottomWidth: 3,
    bottom: 0,
    paddingHorizontal: 36
},
icons_container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 35,
    flex: 1
}
})
