import React,{useEffect, useState} from 'react';

import styles from '../styles/Profile';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '../image/User.png'
import { Divider } from '@rneui/themed';
import Sample from '../image/Hazel.png'
import ButtonCustom from '../components/FancyButton'

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    ActivityIndicator
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import historyAction from '../redux/actions/transaction';

function Profile() {

    const navigation = useNavigation()
    const profile = useSelector(state => state.profile.profile);
    const auth = useSelector(state => state.auth.userData);
    const transaction = useSelector(state => state.transaction);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(true)

    useEffect(()=>{
        if (transaction.history.length === 0){
            dispatch(historyAction.getHistoryThunk("page=1&limit=6",auth.token))
        }
    },[])

    useEffect(() => {
        let refresh = false;
        const removeFocusevent = navigation.addListener('focus', e => {
        //   if (refresh) {
        //     if (transaction.history.length === 0){
        //         dispatch(historyAction.getHistoryThunk("page=1&limit=6",auth.token))
        //     }
        //   }
        });
        const removeBlurEvent = navigation.addListener('blur', e => {
            dispatch(historyAction.resetHistoryFulfilled());
            refresh = true;
        });
        return () => {
          removeFocusevent();
          removeBlurEvent();
        };
      }, [navigation,transaction.history]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbar}>
                <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={() => { navigation.goBack() }} />
                <Text style={styles.titleNavbar}>My profile</Text>
            </View>
            <View style={styles.userinfo}>
                <Image source={{uri: profile.image}} style={styles.image} />
                <Text style={styles.username}>{profile.displayName}</Text>
                {/* <Pressable style={styles.conPencl}>
                    <IconComunity name={"pencil"} style={styles.pencil} size={20} onPress={() => { navigation.goBack() }} />
                </Pressable> */}
                <Text style={styles.descritption}>{auth.email}</Text>
                <Text style={styles.descritption}>{profile.noTelp}</Text>
                <Text style={styles.descritption}>{profile.adress}</Text>
            </View>
            <Divider width={8} style={{ width: "100%", marginTop: 15 }} />
            <View style={{ flexDirection: 'column', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
                    <Text style={styles.history}>Order History</Text>
                    <Text style={styles.seemore} onPress={()=>{navigation.navigate("History")}}>See more</Text>
                </View>
                    {transaction.isLoading && (
                        <View style={{paddingTop: 30, paddingBottom: 20}}>
                            <ActivityIndicator size='large' color='black' />
                        </View>
                    )}
                    {transaction.err === "data_not_found" && (
                        <View style={{paddingTop: 30, paddingBottom: 20, justifyContent:'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Poppins-Bold'}}>Nothing Transactions Here</Text>
                        </View>
                    )}
                <View style={{ paddingRight: 0 }}>
                    <ScrollView style={styles.slider} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {transaction.history.length !== 0 && transaction.history.map((data,index)=>{
                            if (index <= 5)
                            return <Image source={{uri: data.image}} style={styles.imageHistory} key={data.id} />
                        })}
                    </ScrollView>
                </View>
            </View>
            <Divider width={8} style={{ width: "100%", marginTop: 15 }} />
            <View style={styles.containerNavigation}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Edit Password</Text>
                    <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton} />
                </Pressable>
            </View>
            <View style={styles.containerNavigation}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>FAQ</Text>
                    <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton} />
                </Pressable>
            </View>
            <View style={styles.containerNavigation}>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Help</Text>
                    <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton} />
                </Pressable>
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 30 }}>
                {/* <ButtonCustom text={"Save"} textColor={"white"} color={"#6A4029"} /> */}
            </View>
        </ScrollView>
    )
}

export default Profile