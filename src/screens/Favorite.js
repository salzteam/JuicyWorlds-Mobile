import React from 'react';

import styles from '../styles/Favorite';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Sample from '../image/food4.png';

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Favorite() {
    const navigation = useNavigation()
    const product = useSelector(state => state.product);

    const costing = (price) => {
        return (
          "IDR " +
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };

  return (
    <View style={{flex: 1}}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Favorite Products</Text>
        </View>
        <ScrollView style={styles.scrolles}>
            <View>
                <Text style={styles.category}>Food</Text>
                <View style={styles.containerCard}>
                    {product.Favorite?.map((data)=>{
                        if(data.category_name === "foods" && data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.id)}}>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(data.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })}
                </View>
            </View>
            <View>
                <Text style={styles.category}>Coffee</Text>
                <View style={styles.containerCard}>
                    {product.Favorite?.map((data)=>{
                        if(data.category_name === "coffee" && data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.id)}}>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(data.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })}
                </View>
            </View>
            <View>
                <Text style={styles.category}>Non Coffee</Text>
                <View style={styles.containerCard}>
                    {product.Favorite?.map((data)=>{
                        if(data.category_name === "non coffee" && data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.id)}}>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(data.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })}
                </View>
            </View>
            <View>
                <Text style={styles.category}>Add Ons</Text>
                <View style={styles.containerCard}>
                    {product.Favorite?.map((data)=>{
                        if(data.category_name === "addon" && data.product_name !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.id)}}>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(data.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )
                        }
                    })}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Favorite