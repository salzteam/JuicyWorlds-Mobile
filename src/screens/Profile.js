import React from 'react';

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
  } from 'react-native'; 

function Profile() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>My profile</Text>
        </View>
        <View style={styles.userinfo}>
            <Image source={User} style={styles.image}/>
            <Text style={styles.username}>SalzTeam</Text>
            <Pressable style={styles.conPencl}>
                <IconComunity name={"pencil"} style={styles.pencil}size={20} onPress={()=>{navigation.goBack()}}/>
            </Pressable>
            <Text style={styles.descritption}>salzteam@gmail.com</Text>
            <Text style={styles.descritption}>082279014545</Text>
            <Text style={styles.descritption}>Iskandar Street Block A Number 102</Text>
        </View>
        <Divider width={8} style={{width:"100%",marginTop:15 }}/>
        <View style={{flexDirection: 'column', paddingTop: 20}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',  alignItems: 'center', paddingRight: 20, paddingLeft: 20}}>
                <Text style={styles.history}>Order History</Text>
                <Text style={styles.seemore}>See more</Text>
            </View>
            <View style={{paddingRight: 0}}>
                <ScrollView style={styles.slider} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={Sample} style={styles.imageHistory}/>
                    <Image source={Sample} style={styles.imageHistory}/>
                    <Image source={Sample} style={styles.imageHistory}/>
                    <Image source={Sample} style={styles.imageHistory}/>
                    <Image source={Sample} style={styles.imageHistory}/>
                    <Image source={Sample} style={styles.imageHistory}/>
                </ScrollView>
            </View>
        </View>
        <Divider width={8} style={{width:"100%",marginTop:15 }}/>
        <View style={styles.containerNavigation}>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Edit Password</Text>
                <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton}/>
            </Pressable>
        </View>
        <View style={styles.containerNavigation}>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>FAQ</Text>
                <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton}/>
            </Pressable>
        </View>
        <View style={styles.containerNavigation}>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Help</Text>
                <IconComunity name={"chevron-right"} size={20} style={styles.arrowButton}/>
            </Pressable>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 30}}>
            <ButtonCustom text={"Save"} textColor={"white"} color={"#6A4029"}/>
        </View>
    </ScrollView>
  )
}

export default Profile