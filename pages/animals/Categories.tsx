import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View
} from "react-native";
export interface ICategoryProps{
  children: any;
  title: string;
}

const Categories:React.FC<ICategoryProps> = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.image_box}>
      {props.children}
    </View>
          <Text style={{color: '#000'}}>{props.title}</Text>
    </View>
  );
};

export default Categories;


const styles = StyleSheet.create({
  image_box:{
    width: 68,
    height:68,
    borderRadius: 10,
    backgroundColor: `#fff`,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    padding: 10,
    marginBottom: 11,
  },
  container:{
    width: 68,
    alignItems: `center`,

  }

})
