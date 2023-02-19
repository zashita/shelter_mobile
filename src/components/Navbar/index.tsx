import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Styles from "./style.scss"

const Navbar = () => {
  return (
    <View style={Styles.bar}>
      <View style={Styles.icons_container}>
          <Image source={require("../../assets/img/home.png")}/>
        <Image source={require("../../assets/img/info.png")}/>
        <Image source={require("../../assets/img/gift.png")}/>
      </View>
    </View>


  );
};

export default Navbar;
