import React, { useEffect,useState } from 'react'

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
    ToastAndroid
  } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ProductDetail(props) {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation()
    const product_id = props.route.params

    const [product, setProduct] = useState()

    useEffect(()=>{
        const BaseUrl = process.env.BACKEND_URL
        axios.get(`${BaseUrl}/products/${product_id}`).then((result)=>{
            setProduct(result.data.data);
        }).catch((error)=>{
            console.log(error);
            ToastAndroid.showWithGravityAndOffset(
                `Something Error`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                25,
                50
            );
            navigation.goBack()
        })
    })

    const costing = (price) => {
        return (
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };

    // useEffect(()=>{console.log(product)})
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name='chevron-left' size={22} style={styles.icon} onPress={()=>{navigation.goBack()}}/>
            <IconComunity name='cart-outline' size={22} style={styles.icon}/>
        </View>
        <View style={styles.main}>
            <View style={styles.price}>
                {product?.dataPromo === 999 ? (
                    <Text style={styles.priceText}>{product ? costing(product?.dataProduct.price) : ""}</Text>
                ):
                    <>
                        <Text style={styles.strip}>  {product ?costing(product?.dataProduct.price) :""}  </Text>
                        <Text style={styles.priceTextDisount}>{product ? costing((parseInt(product?.dataPromo.discount) / 100) * parseInt(product?.dataProduct.price)): ""}</Text>
                    </>
                }
            </View>
            <View style={styles.top}>
                <Image source={{uri: product?.dataProduct.image}} style={styles.product}/>
                <Text style={styles.Title}>{product?.dataProduct.product_name}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.firstText}>Delivery only on <Text style={{color:'#6A4029', fontFamily: 'Poppins-Bold',}}>Monday to friday </Text> at <Text style={{color:'#6A4029', fontFamily: 'Poppins-Bold',}}>1 - 7 pm</Text></Text>
                <Text style={styles.description}>{product?.dataProduct.description}</Text>
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