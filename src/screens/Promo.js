import React from 'react'

import styles from '../styles/Promo';
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

function Promo() {
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
            <Text style={styles.titleNavbar}>Promo for you</Text>
        </View>
        <ScrollView style={styles.scrolles}>
            <View>
                <Text style={styles.category}>Stay Hungry !</Text>
                <Text style={styles.second}>Good deals update every wednesday</Text>
                <View style={styles.containerCard}>
                    {product.Product_Promo?.map((data)=>{
                        if(data.code !== "none"){
                            return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.product_id)}}>
                                        <View style={styles.promo}>
                                            <Text style={styles.promoPrice}>{costing((parseInt(data.discount) / 100) * parseInt(data.price))}</Text>
                                        </View>
                                        <Image source={{uri: data.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{data.product_name}</Text>
                                            <Text style={styles.priceFood}>  {costing(data.price)}  </Text>
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

export default Promo