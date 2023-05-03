import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import HomeSVG from '../../assets/img/HomeInactive.svg';
import InfoSVG from '../../assets/img/InfoInactive.svg'
import GiftSVG from '../../assets/img/GiftInactive.svg'
import LikeSVG from '../../assets/img/LikeScreen.svg'
import HomeActiveSVG from '../../assets/img/HomeActive.svg'
import InfoActiveSVG from '../../assets/img/InfoActive.svg'
import GiftActiveSVG from '../../assets/img/GiftActive.svg'
import LikeActiveSVG from '../../assets/img/LikeActive.svg'
import {Button} from "react-native-paper";
import {observer} from "mobx-react-lite";
import Navigation from "../../store/Navigation";

export interface NavbarProps{
    navigation: any;
}

const Navbar:React.FC<NavbarProps> = observer(({navigation}) => {

    const goHome = () =>{
        Navigation.setCurrentScreen('Home')
        navigation.navigate('Main');
    }

    const goInfo = () =>{
        Navigation.setCurrentScreen('Info')
        navigation.navigate('News')
    }
    const goGifts = () =>{
        Navigation.setCurrentScreen('Gift')
        navigation.navigate('Gifts')
    }

    const goLiked = () =>{
        Navigation.setCurrentScreen('Like')
        navigation.navigate('Liked')
    }



  return (
    <View style={style.bar}>
      <View style={style.icons_container}>
          <Button icon={
              Navigation.currentScreen === "Home"?
              HomeActiveSVG: HomeSVG}
                  style = {{justifyContent: 'center'}}
          onPress={goHome}>

          </Button>
          <Button icon={Navigation.currentScreen === "Info"?
              InfoActiveSVG: InfoSVG} style = {{justifyContent: 'center'}}
          onPress={goInfo}>

          </Button>
          <Button icon={Navigation.currentScreen === "Gift"?
              GiftActiveSVG: GiftSVG}  style = {{justifyContent: 'center'}}
          onPress={goGifts}>

          </Button>
          <Button icon={Navigation.currentScreen === "Like"?
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
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#EE7100',
    borderBottomWidth: 3
},
icons_container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 35,
    width: '85%',
}
})
