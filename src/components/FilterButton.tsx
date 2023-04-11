import React from "react";
import { Button } from "react-native-paper";

export interface FilterButtonProps{
  onPress: ()=> void;
  active: boolean;
  text: string;
}

const FilterButton:React.FC<FilterButtonProps> = (
  {onPress,
    active,
    text}) => {
  return (
    <Button
      buttonColor={active?'#FF9D01':'#FFf'}
      textColor={'#000'}
      mode = {'contained'}
      onPress={onPress}>
      {text}
    </Button>
  );
};

export default FilterButton;
