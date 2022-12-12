import React, {useState} from 'react'

import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    Pressable
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Checkout';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from '@rneui/themed';

import { useDispatch, useSelector } from 'react-redux';
import cartAction from '../redux/actions/transaction'

function Checkout() {
    const [method, setMethod] = useState("2")
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.transaction.cart[0]);
    const profile = useSelector(state => state.profile.profile)

    const costing = (price) => {
        return (
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };

    const deliveryMethodHandler = () => {
        const data = {
            id_product: cartState.id_product,
            image: cartState.image,
            name_product: cartState.name_product,
            price: cartState.price,
            size: cartState.size,
            qty: cartState.qty,
            promo_id: cartState.promo_id,
            subTotal: cartState.subTotal,
            delivMethod: method 
          }
          dispatch(cartAction.checkoutFulfilled(data))
          navigation.navigate("Payment")
    }
  return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Checkout</Text>
        </View>
        <View style={{paddingTop: 30}}>
            <Text style={styles.TitleDelivery}>Delivery</Text>
            <Text style={styles.TitleAddress}>Address details</Text>
            <View style={styles.CardAddress}>
                <Text style={styles.CardStreet}>Jakarta Street</Text>
                <Text style={styles.CardStreetDetail}>{profile.adress}</Text>
                <Text style={styles.CardPhone}>{profile.noTelp}</Text>
            </View>
            <Text style={styles.TitleAddress}>Delivery methods</Text>
            <View style={styles.CardMethods}>
                <View>
                    <View style={styles.radio}>
                        <Pressable style={method === "2" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>{setMethod("2")}}>
                            <View style={method === "2" ? styles.checkedInner : undefined}></View>
                        </Pressable>
                    </View>
                    <View style={styles.radio}>
                        <Pressable style={method === "3" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>{setMethod("3")}}>
                            <View style={method === "3" ? styles.checkedInner : undefined}></View>
                        </Pressable>
                    </View>
                    <View style={styles.radio}>
                        <Pressable style={method === "1" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>{setMethod("1")}}>
                            <View style={method === "1" ? styles.checkedInner : undefined}></View>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text style={styles.textMethod} onPress={()=>{setMethod("2")}}>Door delivery</Text>
                    <Divider width={1} style={{width:"100%",marginTop:5,marginBottom: 3.5 }}/>
                    <Text style={styles.textMethod} onPress={()=>{setMethod("3")}}>Pick up at store</Text>
                    <Divider width={1} style={{width:"100%",marginTop:5,marginBottom: 3.5 }}/>
                    <Text style={styles.textMethod} onPress={()=>{setMethod("1")}}>Dine</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25}}>
                <Text style={styles.total}>Total</Text>
                {cartState.length !== 0 && <Text style={styles.price}>IDR {costing(cartState.subTotal)}</Text>}
            </View>
            <View style={{paddingBottom: 30}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={deliveryMethodHandler}>
                    <View
                        style={{
                            marginBottom: 20,
                            backgroundColor: "#6A4029",
                            height: 70,
                            borderRadius: 20,
                            paddingLeft: 30,
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center'
                        }}>
                        <Text style={{color: "white", fontFamily: 'Poppins-Bold', fontSize: 16, paddingLeft: 35}}>Proceed to payment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
} 

export default Checkout;