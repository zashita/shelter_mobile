import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Styles from "./styles.scss";

const Wrapper = ({children}: any) => {
  return (
    <View style={Styles.wrapper}>
      {children}
    </View>
  );
};

export default Wrapper;

