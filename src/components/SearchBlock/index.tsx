import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import styles from "./styled";

const Search:React.FC = () => {
  return (
      <View style={styles.searchBlock}>
        <Image source={require("../../assets/img/SearchIcon.png")}/>
        <TextInput
          style={styles.input}
          placeholder={"Найти"}/>
        <Image source={require("../../assets/img/FiltrIcon.png")}
        />
      </View>


  );
};

export default Search;


