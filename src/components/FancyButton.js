import React from 'react';
import {TouchableOpacity, View, Text, useWindowDimensions,ActivityIndicator} from 'react-native';

const FancyButton = ({
  text,
  color,
  textColor,
  // onPressHandler: {onPressIn, onPressOut, onLongPress, onPress},
  press,
  size
}) => {
  const {height, width} = useWindowDimensions();
  const componentHeight = size?.height || height / 10;
  const componentWidth = size?.width || width;
  return (
    <TouchableOpacity
      onPress={press}
      // onPressIn={onPressIn}
      // onPressOut={onPressOut}
      // onLongPress={onLongPress}
      activeOpacity={0.8}>
      <View
        style={{
          backgroundColor: color,
          height: 70,
          width: width/1.1,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {text === "Loading" ? <ActivityIndicator size='large' color='white' /> : <Text style={{color: textColor, fontFamily: 'Poppins-Bold', fontSize: 17}}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default FancyButton;