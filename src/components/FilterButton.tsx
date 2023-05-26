import React from "react";
import { Button } from "react-native-paper";
import {useTheme} from "@react-navigation/native";

export interface FilterButtonProps{
  onPress: ()=> void;
  active: boolean;
  text: string;
}

const FilterButton:React.FC<FilterButtonProps> = (
  {onPress,
    active,
    text}) => {
    const {colors} = useTheme();

  return (
    <Button
      buttonColor={active?colors.primary:colors.card}
      textColor={'#000'}
      mode = {'contained'}
      onPress={onPress}
    style={{flex: 1}}>
      {text}
    </Button>
  );
};

export default FilterButton;
