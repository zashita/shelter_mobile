import React from 'react';
import {Image, View} from 'react-native';
import Styles from './style.scss';
import HomeSVG from '../../assets/img/home.svg';
import InfoSVG from '../../assets/img/info.svg'
import GiftSVG from '../../assets/img/gift.svg'

const Navbar = () => {
  return (
    <View style={Styles.bar}>
      <View style={Styles.icons_container}>
        <HomeSVG/>
        <InfoSVG/>
        <GiftSVG/>
      </View>
    </View>
  );
};

export default Navbar;
