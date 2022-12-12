import React,{useState, useEffect} from 'react'

import logo from '../image/logo.png'
import AnimatedLoader from 'react-native-animated-loader';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import {
    Image,
    Text,
    View,
    Pressable ,
    ScrollView,
    useWindowDimensions,
    StyleSheet
  } from 'react-native';

function Splashscreen() {
    const [visible, setVisible] = useState(true)
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.dispatch(StackActions.replace('Started'));
        // navigation.navigate('Welcome')
      }, 3000);
    }, [navigation]);
  return (
    <View style={{flex: 1, backgroundColor: '#FFA500', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={logo} style={{width: 300, height: 300}}/>
        <AnimatedLoader
        visible={visible}
        // overlayColor="rgba(255,255,255,0.75)"
        source={require("../image/97203-loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
    </View>
  )
}

const styles = StyleSheet.create({
    lottie: {
      paddingTop: 150,
      width: 100,
      height: 100
    }
  });

export default Splashscreen;