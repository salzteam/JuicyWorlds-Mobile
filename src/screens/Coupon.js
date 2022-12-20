import React,{useState, useEffect} from 'react'

import styles from '../styles/Coupon';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons'

import {
    View,
    Image,
    ToastAndroid,
    Text,
    Pressable,
    TouchableOpacity,
    useWindowDimensions,
    Modal,
    ActivityIndicator,
    TextInput
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../image/father.png'
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

function Coupon() {

  const [isLoading, setLoading] = useState(false)
  const [dataPromo, setData] = useState()
  const [nextPrev, setNextPrev] = useState()

  const navigation = useNavigation();

  useEffect(() => {
    let refresh = false;
    const removeFocusevent = navigation.addListener('focus', e => {
        if (!refresh){
            setLoading(true)
            const URL = `${process.env.BACKEND_URL}/promo/?page=1&limit=10`
            axios.get(URL).then((result)=>{
                setLoading(false)
                setData(result.data.data.data)
                setNextPrev(result.data.data.next)
            })
            .catch((err)=>{
                setLoading(false)
                console.log(err);
            })
        }
    });
    const removeBlurEvent = navigation.addListener('blur', e => {
        refresh = true;
    });
    return () => {
      removeFocusevent();
      removeBlurEvent();
    };
  }, [navigation]);

  console.log(dataPromo);

  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.dispatch(StackActions.replace("Home"))}}/>
            <Text style={styles.titleNavbar}>Coupons List</Text>
        </View>
        <View style={{width: "100%",  borderRadius: 30, backgroundColor: '#EFEEEE', alignItems: 'center' ,justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 5,flexDirection: 'row'}}>
            <IconIon size={25} color='black' name={"search-outline"}/>
            <TextInput placeholder='Browse coupons' style={{marginLeft: 10}}/>
        </View>
        <View style={styles.swipe}>
            <IconComunity name={"gesture-tap-hold"} size={20}/>
            <Text style={styles.swipeText}>hold on an coupons to edit</Text>
        </View>
        <View style={{paddingTop: 20, flex: 1}}>
            {isLoading && !dataPromo ?
                (
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <ActivityIndicator size={"large"}/>
                </View>) : 
                (<FlatList
                    data={dataPromo}
                    renderItem={({item}) => {
                        if (item.code !== "none")
                        return (
                            <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: item.bgcolor, paddingHorizontal:20, paddingVertical: 15, borderRadius: 20, flexDirection:'row', marginBottom: 15}}
                            onLongPress={()=>{navigation.navigate("EditPromo", item)}}
                            delayLongPress={1500}>
                                <Image source={{uri: item.imagepp}} style={{height: 92, width:95}}/>
                                <View style={{flexDirection: 'column', flex: 1, paddingLeft: 5}}>
                                    <Text style={{fontFamily: 'Poppins-Bold', color: 'black', fontSize: 13}}>{item.title}</Text>
                                    <Text style={{fontFamily: 'Poppins-Regular', color: 'black', fontSize: 12}}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                    )}}
                    showsVerticalScrollIndicator={false}
                    // onEndReachedThreshold={0.5}
                    // onEndReached={getPagination}
                    // ListFooterComponent={renderFooter}
                />)}
        </View>
    </View>
  )
}

export default Coupon