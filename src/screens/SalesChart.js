import React from 'react'

import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    Pressable
  } from 'react-native'; 

import styles from '../styles/SalesChart';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import monthlyReport from "../image/table.png"
import table from "../image/table2.png"
import table2 from "../image/table3.png"

function SalesChart() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Sales Chart</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 40}}>
            <View style={{shadowColor: "#3939391A",elevation: 1 , width: 315, height: 419}}>
                <Image source={monthlyReport} />
            </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
            <View style={{shadowColor: "#3939391A",elevation: 1 , width: 315}}>
                <Image source={table} />
            </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
            <View style={{shadowColor: "#3939391A",elevation: 1 , width: 315}}>
                <Image source={table2} />
            </View>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}>
            <View
                style={{
                marginTop: 40,
                marginBottom: 50,
                backgroundColor: "#6A4029",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                <Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Print Report</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default SalesChart