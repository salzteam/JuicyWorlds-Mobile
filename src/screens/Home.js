import React,{useState} from 'react';

import styles from '../styles/Home';
import Navbar from "../components/Navbar/Navbar"
import Sample from "../image/Hazel.png"

import {
  Image,
  Text,
  View,
  Pressable ,
  TextInput,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  LinearLayout
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation()
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  return (
    <View style={styles.sectionContainer}>
        <Navbar>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>A good coffee is a good day</Text>
                <Text style={styles.category} onPress={()=>{navigation.navigate("ProductDetail")}}>Favorite Products</Text>
                <Text style={styles.see} onPress={()=>{navigation.navigate("ScreenFavorite")}}>See more</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyboardShouldPersistTaps={'always'}
                    style={{height: height / 2,}}
                >
                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail")}}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail")}}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail")}}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                </ScrollView>
                <Text style={styles.category}>Promo for you</Text>
                <Text style={styles.see} onPress={()=>{navigation.navigate("ScreenPromo")}}>See more</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{height: height / 2,}}
                >
                    <Pressable style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                    <Pressable style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image source={Sample} style={styles.imageCard}/>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                            <Text style={styles.cardPrice}>IDR 25.000</Text>    
                        </View>
                    </Pressable>
                </ScrollView>
            </ScrollView>
        </Navbar>
    </View>
  );
};

export default Home;
