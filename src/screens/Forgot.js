import React from 'react';

import styles from '../styles/Forgot';

import backgroundWp from '../image/wpForgot.jpg'
import ButtonCustom from '../components/FancyButton'
import Icon from "../image/boy.png"

import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';

const Login = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
        <View style={styles.innerFrame}>
            <View>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.desc}>Enter your email adress to get reset password link</Text>
                {/* <Text style={styles.title}>We've just sent a link to your email to request a new password</Text> */}
                <TextInput placeholder='Enter your email adress' placeholderTextColor={'white'} keyboardType='email-address' style={styles.input}/>
                <Text style={styles.recived}>Haven't recived any link?</Text>
                <ButtonCustom text={"Resend Link"} textColor={"white"} color={"#6A4029"} />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
