import React from 'react'

import styles from '../styles/ProductDetail'
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Sample from '../image/product.png'
import ButtonCustom from '../components/FancyButton'

import {
    ImageBackground,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    ScrollView,
  } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ProductDetail() {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name='chevron-left' size={22} style={styles.icon} onPress={()=>{navigation.goBack()}}/>
            <IconComunity name='cart-outline' size={22} style={styles.icon}/>
        </View>
        <View style={styles.main}>
            <View style={styles.price}>
                <Text style={styles.priceText}>30.000</Text>
            </View>
            <View style={styles.top}>
                <Image source={Sample} style={styles.product}/>
                <Text style={styles.Title}>Cold Brew</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.firstText}>Delivery only on <Text style={{color:'#6A4029', fontFamily: 'Poppins-Bold',}}>Monday to friday </Text> at <Text style={{color:'#6A4029', fontFamily: 'Poppins-Bold',}}>1 - 7 pm</Text></Text>
                <Text style={styles.description}>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</Text>
                <Text style={styles.sizeText}> Choose a size</Text>
                <View style={{display: 'flex', justifyContent: 'center', flexDirection:'row'}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>R</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>L</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>XL</Text>
                    </View>
                </View>
                <View style={{width: width, paddingBottom: 30}}>
                    {/* <ButtonCustom text={"Add to cart"} textColor={"white"} color={"#6A4029"}/> */}
                    <TouchableOpacity
                        activeOpacity={0.8}>
                        <View
                            style={{
                            backgroundColor: "#6A4029",
                            height: 70,
                            width: width/ 1.2,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}>
                            <Text style={{color: "white", fontFamily: 'Poppins-Bold', fontSize: 17}}>Add to cart</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ProductDetail;