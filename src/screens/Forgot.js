import React, {useState, useEffect} from 'react';

import styles from '../styles/Forgot';

import backgroundWp from '../image/wpForgot.jpg'
import ButtonCustom from '../components/FancyButton'
import Icons from 'react-native-vector-icons/FontAwesome5'

import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  ToastAndroid
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../redux/actions/auth';

const Forgot = () => {
  const {width} = useWindowDimensions();
  const [inputPin, setInput] = useState(false)
  const [selectPwd, setInputPwd] = useState(false)
  const [isShow, setShow] = useState(true)
  const [minutes, setMinutes] = useState(2)
  const [seconds, setSeconds] = useState(0)
  const [email, setEmail] = useState("")
  const [pin, setPininput] = useState()
  const [bodyPwd, setBdyPwd] = useState()
  const [isPin, setPin] = useState()

  const navigation = useNavigation()
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onChangeHandler = (text,name) => {
    setBdyPwd(bodyPwd => ({ ...bodyPwd, [name]: text }));
  }

  const verifPinHandler = () => {
    if (pin !== isPin) return Error("Pin is worng !")
    setInputPwd(true)
  }

  const saveHandler = () => {
    if (bodyPwd?.password !== bodyPwd?.new_password) return Error("Password doesn't match!")
    const body ={
      email: email,
      code: pin,
      new_password: bodyPwd.new_password
    }
    dispatch(authAction.getPin(body, null, navigationSuccess, Error))
  }

  const navigationSuccess = () => {
    ToastAndroid.showWithGravityAndOffset(
      `Success, login using the new password here !`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50
  )
  navigation.navigate('Login')
  }

//   const startTimer = () => {
//     let timer = setTimeout(() => {
//         if ( seconds > 0) {
//           setSeconds(seconds-1);
//         }
//         if (seconds === 0) {
//           if (minutes === 0) {
//             clearTimeout(timer);
//             return false;
//           } else {
//             setMinutes(minutes-1),
//             setSeconds(59)
//           }
//         }
//     }, 1500)
//  }

  const resendHandler = () => {
    if (seconds !== 0 && minutes !== 0) return;
    dispatch(authAction.getPin({email: email}, Success, null, Error))
    setMinutes(2)
    setSeconds(0)
  }

  useEffect(()=>{
    if (inputPin) {let timer = setTimeout(() => {
      if ( seconds > 0) {
        return setSeconds(seconds-1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(timer);
        } else {
          setSeconds(59)
          return setMinutes(minutes-1)
        }
      }
  }, 1000)}
    // console.log(timer);
    // return () => clearTimeout(timer);
  })

    const sendTime = () => {
      if (seconds < 10) return `${minutes}:0${seconds}`
      return `${minutes}:${seconds}`
    }

    const getPin = () => {
      dispatch(authAction.getPin({email: email}, Success, null, Error))
    }

    const Success = (pin) => {
      setInput(true)
      setPin(pin)
      // setMinutes(2)
      // setSeconds(0)
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
    <View style={styles.sectionContainer}>
      <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
        <View style={styles.innerFrame}>
            {!inputPin && <View>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.desc}>Enter your email adress to get reset password link</Text>
                {/* <Text style={styles.title}>We've just sent a link to your email to request a new password</Text> */}
                <TextInput placeholder='Enter your email adress' placeholderTextColor={'white'} keyboardType='email-address' style={styles.input} onChangeText={text =>{setEmail(text)}}/>
                <ButtonCustom text={"Send Email"} textColor={"white"} color={"#6A4029"} press={getPin} />
            </View>}
            {inputPin && !selectPwd && <View>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.desc}>Enter your email adress to get reset password link</Text>
                {/* <Text style={styles.title}>We've just sent a link to your email to request a new password</Text> */}
                <TextInput placeholder='Enter pincode here' placeholderTextColor={'white'} keyboardType='number-pad' style={styles.inputCode} maxLength={6} onChangeText={text =>{setPininput(text)}}/>
                <Text style={styles.recived}>Haven't recived any link?</Text>
                <ButtonCustom text={minutes === 0 && seconds === 0 ? "Resend Link" : sendTime()} textColor={"white"} color={"#6A4029"} press={resendHandler} />
                <TouchableOpacity
                      onPress={verifPinHandler}
                      activeOpacity={0.8}>
                      <View
                          style={{
                          marginVertical: 15,
                          backgroundColor: "#FFBA33",
                          height: 70,
                          width: width/1.1,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'row',
                          alignContent: 'center'
                          }}>
                          <Text style={{color: "black", fontFamily: 'Poppins-Bold', fontSize: 17}}>Confirm Pincode</Text>
                      </View>
                    </TouchableOpacity>
            </View>}
            {inputPin && selectPwd && <View>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.desc}>Enter your email adress to get reset password link</Text>
                {/* <Text style={styles.title}>We've just sent a link to your email to request a new password</Text> */}
                <View style={{marginTop: 200}}>
                  <TextInput placeholder='Enter new password' placeholderTextColor={"white"} style={styles.inputPassword} secureTextEntry={isShow} onChangeText={text =>onChangeHandler(text, "password")}/>
                  <Icons name={isShow ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow(!isShow)}}/>
                  <TextInput placeholder='Enter confirm password' placeholderTextColor={"white"} style={styles.inputPassword} secureTextEntry={isShow} onChangeText={text =>onChangeHandler(text, "new_password")}/>
                </View>
                <View style={{marginTop:15}}>
                  <ButtonCustom text={auth.isLoading ? "Loading" : "Change Password"} textColor={"black"} color={"#FFBA33"} press={saveHandler} />
                </View>
            </View>}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Forgot;
