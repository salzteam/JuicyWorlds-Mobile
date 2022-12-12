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
import styles from '../styles/Cart';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Sample from "../image/Hazel.png"
import Icons from 'react-native-vector-icons/FontAwesome5'
import { Divider } from '@rneui/themed';

import { useDispatch, useSelector } from 'react-redux';
import cartAction from '../redux/actions/transaction'

function Cart() {

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch();
  const cartState = useSelector(state => state.transaction.cart);
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const costing = (price) => {
    return (
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  };

  const getItemTotal = () => {
    let price = cartState[0].price * quantity
    return costing(price)
  }

  const getTotal = () => {
    let price = cartState[0].price * quantity
    let cost = 0
    if (cartState[0].size === "2") cost = 6000
    if (cartState[0].size === "3") cost = 12000
    const total = price + 10000 + cost
    return costing(total)
  }

  const getSizeCost = () => {
    let cost = 0
    if (cartState[0].size === "2") cost = 6000
    if (cartState[0].size === "3") cost = 12000
    return costing(cost)
  }

  const handleCheckout = () => {
    let dataCart = cartState[0]
    let cost = 0
    if (dataCart.size === "2") cost = 6000
    if (dataCart.size === "3") cost = 12000
    let price = cartState[0].price * quantity
    const total = price + 10000 + cost
    const data = {
      id_product: dataCart.id_product,
      image: dataCart.image,
      name_product: dataCart.name_product,
      price: dataCart.price,
      size: dataCart.size,
      promo_id: dataCart.promo_id,
      qty: quantity,
      subTotal: total
    }
    dispatch(cartAction.checkoutFulfilled(data))
    navigation.navigate("Checkout")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
          <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
          <Text style={styles.titleNavbar}>My <Text style={{fontFamily: 'Poppins-Black'}}>Cart</Text></Text>
      </View>
      {cartState.length !== 0 &&
        <>
          <View style={{paddingTop: 40}}>
            <View style={{minHeight: 250}}>
              <View style={styles.card}>
                <View style={{marginRight: 20,backgroundColor: 'white', width: width/3, padding: 10, borderRadius: 30}}>
                  <Image source={{uri: cartState[0].image}} style={styles.cardImage}/>
                  <Text style={styles.cardPrice}>IDR {costing(cartState[0].price)}</Text>
                </View>
                <View>
                  <Text style={styles.cardTitle}>{cartState[0].name_product}</Text>
                  <View style={styles.quantity}>
                    <Pressable style={styles.quantityBtn} onPress={()=>{quantity !== 1 && setQuantity(quantity-1)}}>
                      <IconComunity name={"window-minimize"} size={15}/>
                    </Pressable>
                    <Text style={styles.qtyText}>{quantity}</Text>
                    <Pressable style={styles.quantityBtn} onPress={()=>{setQuantity(quantity+1)}}>
                      <Icons name={"plus"} size={10}/>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <Divider width={1} style={{width:"100%",marginTop:15 }}/>
            <View style={{paddingTop: 30}}>
              <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Item Total</Text>
                <Text style={styles.textPrice}>IDR {getItemTotal()}</Text>
              </View>
              <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Size Cost</Text>
                <Text style={styles.textPrice}>IDR {getSizeCost()}</Text>
              </View>
              <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Tax</Text>
                <Text style={styles.textPrice}>IDR 10.000</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'black'}}>Total :</Text>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'black'}}>IDR {getTotal()}</Text>
            </View>
            <View style={{paddingTop: 20, paddingBottom: 30}}>
              <TouchableOpacity
                    onPress={handleCheckout}
                    activeOpacity={0.8}>
                    <View
                        style={{
                        marginVertical: 15,
                        backgroundColor: "#FFBA33",
                        height: 70,
                        borderRadius: 20,
                        paddingLeft: 30,
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center'
                        }}>
                        <IconComunity name={"chevron-right"} size={25} style={{color: 'black'}} />
                        <Text style={{paddingLeft: 55,color: "black", fontFamily: 'Poppins-Bold', fontSize: 16}}>CHECKOUT</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </>
      }
    </ScrollView>
  )
}

export default Cart