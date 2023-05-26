import React, { ReactNode } from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Styles from "./Wrapper/styles.scss";

const WIDTH = Dimensions.get('screen').width

const Wrapper = ({children}: any) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 26,
    marginHorizontal: 26
  },
});
