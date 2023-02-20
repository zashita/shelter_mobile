import React from 'react';
import {Text, View} from 'react-native';
import Styles from './style.scss';
export interface ICategoryProps {
  children: React.ReactNode;
  title: string;
}

const Categories: React.FC<ICategoryProps> = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.image_box}>{props.children}</View>
      <Text style={{color: '#000'}}>{props.title}</Text>
    </View>
  );
};

export default Categories;
