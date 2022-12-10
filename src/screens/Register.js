import React, {useState} from 'react';

import styles from '../styles/Register';

import backgroundWp from '../image/wpRegister.png'
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
  ToastAndroid
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import authAction from '../redux/actions/auth';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const auth = useSelector(state => state.auth);

  const [isShow, setShow] = useState(true)
  const [body, setBody] = useState()

  const changeHandler = (text, name) => {
    setBody({...body, [name]: text})
  }

  const sendHandler =  () => {
    if (auth.isLoading) return;
    if (!body?.email || !body?.password || !body?.phone) return Error('All data must be filled')
    if (body.phone.length <= 11) return Error('Phone number must be have 12 numbers')
    dispatch(authAction.registerThunk(body, Success, Error))
  }

  const Success = (text) => {
    ToastAndroid.showWithGravityAndOffset(
        text,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
    )
    navigation.navigate('Login')
}
const Error = (text) => {
    ToastAndroid.showWithGravityAndOffset(
        `${text}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
    );
}

  return (
    <View style={{flex: 1,width: width}}>
      <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
        <View style={styles.innerFrame}>
            <View style={{width: width/1.1}}>
                <View style={{position: "relative", top: 120}}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
                <View style={{position: "relative", top: -70}}>
                    <TextInput placeholder='Enter your email adress' placeholderTextColor={"white"} keyboardType='email-address' style={styles.input} onChangeText={text => changeHandler(text, "email")}/>
                    <TextInput placeholder='Enter your password' placeholderTextColor={"white"} style={styles.input} secureTextEntry={isShow} onChangeText={text => changeHandler(text, "password")}/>
                    <Icons name={isShow ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow(!isShow)}}/>
                    <TextInput placeholder='Enter your phone number (ex 08)' maxLength={12} placeholderTextColor={"white"} keyboardType='phone-pad' style={styles.input} onChangeText={text => changeHandler(text, "phone")}/>
                </View>
                <View style={{position: "relative", top: -40}}>
                    <ButtonCustom text={auth.isLoading ? "Loading" : "Create Account"} textColor={"white"} color={"#6A4029"} press={sendHandler}/>
                    {/* <ButtonCustom text={"Create with Google"} textColor={"black"} color={"#6A4029"} press={ ()=>{navigation.navigate('Welcome')}}/> */}
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

export default Register;
