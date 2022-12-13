import React from 'react';

import styles from '../styles/Started';

import backgroundWp from '../image/wpStart.png'
import ButtonCustom from '../components/FancyButton'


import {
  ImageBackground,
  Text,
  View,
  ScrollView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';

const Started = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
        <View style={styles.innerFrame}>
          <Text style={styles.text}>Coffee for Everyone</Text>
          <ButtonCustom text={"Get started"} textColor={"black"} color={"#FFBA33"}
          press={ ()=>{navigation.navigate('Welcome')}}/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Started;
