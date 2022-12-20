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

import { useDispatch, useSelector } from 'react-redux';
import userAction from '../redux/actions/user';

function Splashscreen() {
    const [visible, setVisible] = useState(true)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth.userData);

    useEffect(() => {
      const navigateStarted = () => navigation.dispatch(StackActions.replace('Started'));
      const navigateHome = () => navigation.dispatch(StackActions.replace('Home'));
      dispatch(userAction.getProfileThunk(auth.token, navigateStarted, navigateHome))
    });
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