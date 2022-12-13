import React,{useState} from 'react';

import styles from '../styles/Login';

import backgroundWp from '../image/wpLogin.png'
import ButtonCustom from '../components/FancyButton'
import Googleicon from '../image/iconGoogle.png'
import Icons from 'react-native-vector-icons/FontAwesome5'

import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ToastAndroid,
  ScrollView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../redux/actions/auth';

const Login = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [isShow, setShow] = useState(true)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (text,name) => {
    setForm(form => ({ ...form, [name]: text }));
  };

  const handleSubmit = () => {
    if (auth.isLoading) return;
    const loginSuccess = () => {
        ToastAndroid.showWithGravityAndOffset(
            `Welcome, Happy Shoping :)`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        )
        navigation.navigate('Home')
    }
    const loginError = (error) => {
        ToastAndroid.showWithGravityAndOffset(
            `${error}`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        );
    }
    dispatch(authAction.loginThunk(form, loginSuccess, loginError))
  }

  return (
    <View style={{flex: 1, width: width}}>
      <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
        <View style={styles.innerFrame}>
            <View>
                <Text style={styles.text}>Login</Text>
            </View>
            <View style={{paddingTop: "60%"}}>
                <TextInput placeholder='Enter your email adress' placeholderTextColor={"white"} keyboardType='email-address' style={styles.input} onChangeText={text =>onChangeHandler(text, "email")}/>
                <TextInput placeholder='Enter your password' placeholderTextColor={"white"} style={styles.input} secureTextEntry={isShow} onChangeText={text =>onChangeHandler(text, "password")}/>
                <Icons name={isShow ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow(!isShow)}}/>
                <Text style={styles.forgot} onPress={()=>{navigation.navigate("Forgot")}}>Forgot password?</Text>
                <View style={{marginTop: 15, width: width}}>
                    <ButtonCustom text={auth.isLoading ? "Loading" : "Login"} textColor={"black"} color={"#FFBA33"} press={handleSubmit}/>
                    <View style={{marginTop: 20, width: width/1.1}}>
                        <Text style={styles.divider}> ────────── or login in with  ──────────</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}>
                        <View
                            style={{
                            marginVertical: 15,
                            backgroundColor: "white",
                            height: 70,
                            width: width/1.1,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center'
                            }}>
                            <Image source={Googleicon} style={{width: 28, height: 28, marginHorizontal: 10}}/>
                            <Text style={{color: "black", fontFamily: 'Poppins-Regular', fontSize: 17}}>Create with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
