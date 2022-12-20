import React,{useState, useEffect} from 'react';
import axios from 'axios';

import styles from '../styles/EditPassword';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid ,
    ActivityIndicator,
  } from 'react-native'; 

import {useNavigation, StackActions} from '@react-navigation/native';
import {useSelector, useDispatch } from 'react-redux';
import Icons from 'react-native-vector-icons/FontAwesome5'

function EditProfile() {
    const [isShow, setShow] = useState(true)
    const [isShow2, setShow2] = useState(true)
    const [isShow3, setShow3] = useState(true)
    const [allow, setAllow] = useState(false)

    const [isLoading, setLoading] = useState(false)

    const [old, setOld] = useState("")
    const [news, setNews] = useState("")
    const [confirm, setConfirm] = useState("")

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const auth = useSelector(state => state.auth.userData);

    useEffect(()=>{
      setAllow(false)
      if (old.length !== 0 && news.length !== 0 && confirm.length !== 0) setAllow(true)
    }, [old, news, confirm])


  const saveHandler = async() => {
    try {
        if (!allow) return
        setLoading(true)
        if (news !== confirm) return (ToastAndroid.showWithGravityAndOffset(
            `New & Confirm Password do not match`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        ));
        const body = {
            password: old,
            new_password: confirm,
        }
        const URL = `${process.env.BACKEND_URL}/users/account`;
        await axios.patch(URL,body, {headers: {'x-access-token' : auth.token}})
        setLoading(false)
        setOld("")
        setNews("")
        setConfirm("")
        // navigation.dispatch(StackActions.replace('Profile'))
        navigation.goBack()
        return (ToastAndroid.showWithGravityAndOffset(
            `Password changed successfully`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        ));
    } catch (error) {
        setLoading(false)
        console.log(error);
        return (ToastAndroid.showWithGravityAndOffset(
            `${error.response.data.message}`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        ));
    }
  }

    return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Edit password</Text>
        </View>
        <View style={{paddingTop: 50}}>
            <View style={{marginBottom: 15, position: 'relative'}}>
                <Text style={styles.label}>Old Password :</Text>
                <TextInput value={old} placeholder='Enter your old password' style={styles.input} onChangeText={setOld} secureTextEntry={isShow}/>
                <Icons name={isShow ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow(!isShow)}}/>
            </View>
            <View style={{marginBottom: 15, position: 'relative'}}>
                <Text style={styles.label}>New Password :</Text>
                <TextInput value={news} placeholder='Enter your new password' style={styles.input} onChangeText={setNews} secureTextEntry={isShow2}/>
                <Icons name={isShow2 ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow2(!isShow2)}}/>
            </View>
            <View style={{marginBottom: 15, position: 'relative'}}>
                <Text style={styles.label}>Confirm Password :</Text>
                <TextInput value={confirm} placeholder='Enter your confirm password' style={styles.input} onChangeText={setConfirm} secureTextEntry={isShow3}/>
                <Icons name={isShow3 ? 'eye-slash' : 'eye' } style={styles.iconEye} size={15} onPress={()=>{setShow3(!isShow3)}}/>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={saveHandler}>
                <View
                    style={{
                    marginTop: 10,
                    marginBottom: 55,
                    backgroundColor: allow ? "#6A4029" : "#9F9F9F",
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center'
                    }}>
                    {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Save</Text>}
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default EditProfile