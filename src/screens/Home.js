import React,{useState, useEffect} from 'react';

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
import productAction from '../redux/actions/product';

const Home = () => {
  const navigation = useNavigation()
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(()=>{
    dispatch(productAction.getFavoriteThunk())
    dispatch(productAction.getPromoThunk())
  },[dispatch])

  const costing = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  };

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
                    {product.Favorite?.map((datas)=>{
                        return (
                            <>
                                <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", datas.id)}}>
                                    <View style={styles.containerImage}>
                                        <Image source={{uri: datas.image}} style={styles.imageCard}/>
                                    </View>
                                    <View style={styles.containerTitle}>
                                        <Text style={styles.cardTitle}>{datas.product_name}</Text>
                                        <Text style={styles.cardPrice}>{costing(datas.price)}</Text>    
                                    </View>
                                </Pressable>
                            </>
                        )
                    })}
                </ScrollView>
                <Text style={styles.category}>Promo for you</Text>
                <Text style={styles.see} onPress={()=>{navigation.navigate("ScreenPromo")}}>See more</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{height: height / 2,}}
                >
                    {product.Product_Promo?.map((data)=>{
                        if (data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.product_id)}}>
                                        <View style={styles.containerImage}>
                                            <Image source={{uri: data.image}} style={styles.imageCard}/>
                                        </View>
                                        <View style={styles.containerTitle}>
                                            <Text style={styles.cardTitle}>{data.product_name}</Text>
                                            <Text style={styles.cardPrice}>{costing((parseInt(data.discount) / 100) * parseInt(data.price))}</Text>    
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })}
                </ScrollView>
            </ScrollView>
        </Navbar>
    </View>
  );
};

export default Home;
