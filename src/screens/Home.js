import React,{useEffect, useState} from 'react';

import styles from '../styles/Home';
import Navbar from "../components/Navbar/Navbar"
import Sample from "../image/Hazel.png"
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Image,
  Text,
  View,
  Pressable ,
  ScrollView,
  useWindowDimensions,
  Modal,
  ActivityIndicator
} from 'react-native';

import {useNavigation} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../redux/actions/product';

const Home = () => {
  const navigation = useNavigation()
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const role = useSelector(state => state.auth.userData.role);

  const [modalVisible, setModalVisible] = useState(false);

//   useEffect(()=>{
//     if (product.Favorite.length === 0 || product.Product_Promo.length === 0){
//         dispatch(productAction.getFavoriteThunk())
//         dispatch(productAction.getPromoThunk())
//     }
//   },[dispatch,navigation])

  useEffect(() => {
    let refresh = false;
    const removeFocusevent = navigation.addListener('focus', e => {
        if (product.Favorite.length === 0 || product.Product_Promo.length === 0){
            dispatch(productAction.getFavoriteThunk())
            dispatch(productAction.getPromoThunk())
        }
    });
    const removeBlurEvent = navigation.addListener('blur', e => {
        refresh = true;
        dispatch(productAction.resetProductsFulfilled())
    });
    return () => {
      removeFocusevent();
      removeBlurEvent();
    };
  }, [navigation,product.Favorite,product.Product_Promo]);

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
                <Text style={styles.see} onPress={()=>{navigation.navigate("ScreenFavorite" , product.Favorite)}}>See more</Text>
                {product.isLoading && product.Favorite.length === 0 ?
                 (
                 <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: 250}}>
                    <ActivityIndicator size={"large"}/>
                 </View>) :
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyboardShouldPersistTaps={'always'}
                    style={{height: height / 2,}}
                >
                    {product.Favorite?.map((datas, index)=>{
                        if (index <= 12 && datas.price !== 0) {
                            return (
                                <> 
                                    <View style={{position: 'relative'}}>
                                        <Pressable style={styles.card} key={datas.id} onPress={()=>{navigation.navigate("ProductDetail", datas.id)}}>
                                            <View style={styles.containerImage}>
                                                <Image source={{uri: datas.image}} style={styles.imageCard}/>
                                            </View>
                                            <View style={styles.containerTitle}>
                                                <Text style={styles.cardTitle}>{datas.product_name}</Text>
                                                <Text style={styles.cardPrice}>{costing(datas.price)}</Text>    
                                            </View>
                                        </Pressable>
                                        {role === "admin" && 
                                            (<Pressable style={styles.conPencl} onPress={()=>navigation.navigate("EditProduct", datas)}>
                                                <IconComunity name={"pencil"} style={styles.pencil}size={20}/>
                                            </Pressable>)
                                        }
                                    </View>
                                </>
                            )
                        }
                    })}
                </ScrollView>}
                <Text style={styles.category}>Promo for you</Text>
                <Text style={styles.see} onPress={()=>{navigation.navigate("ScreenPromo", product.Product_Promo)}}>See more</Text>
                {product.isLoading && product.Product_Promo.length === 0 ?
                 (
                 <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: 250}}>
                    <ActivityIndicator size={"large"}/>
                 </View>) :
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{height: height / 2,}}
                >
                    {product.Product_Promo?.map((data,index)=>{
                        if (index <= 12 && data.product_name !== "none"){
                            return (
                                <>
                                    <View style={{position: 'relative'}}>
                                        <Pressable key={data.id} style={styles.card} onPress={()=>{navigation.navigate("ProductDetail", data.product_id)}}>
                                            <View style={styles.containerImage}>
                                                <Image source={{uri: data.image}} style={styles.imageCard}/>
                                            </View>
                                            <View style={styles.containerTitle}>
                                                <Text style={styles.cardTitle}>{data.product_name}</Text>
                                                <Text style={styles.cardPrice}>{costing((parseInt(data.discount) / 100) * parseInt(data.price))}</Text>    
                                            </View>
                                        </Pressable>
                                        {role === "admin" && 
                                            (<Pressable style={styles.conPencl} onPress={()=>navigation.navigate("EditProduct", data)}>
                                                <IconComunity name={"pencil"} style={styles.pencil}size={20}/>
                                            </Pressable>)
                                        }
                                    </View>
                                </>
                            )
                        }
                    })}
                </ScrollView>}
                {role === "admin" &&
                    ( 
                    <>
                        <Pressable style={styles.conAdd} onPress={()=>setModalVisible(true)}>
                            <IconComunity name={"plus-thick"} style={styles.add}size={20}/>
                        </Pressable>
                        <Modal
                            visible={modalVisible}
                            transparent={true}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={{justifyContent: 'flex-end'}}>
                                    <Pressable style={styles.addModal} onPress={()=>setModalVisible(false)}>
                                        <IconComunity name={"plus-thick"} style={styles.add}size={20}/>
                                    </Pressable>
                                </View>
                                <View style={{justifyContent: 'flex-end'}}>
                                    <Pressable style={styles.button} onPress={()=>{
                                        setModalVisible(false)
                                        navigation.navigate("NewProduct")
                                    }}>
                                        <Text style={styles.modalText}>New product</Text>
                                    </Pressable>
                                    <Pressable  style={styles.button} onPress={()=>{
                                        setModalVisible(false)
                                        navigation.navigate("NewPromo")
                                    }}>
                                        <Text style={styles.modalText}>New promo</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </>)
                }
            </ScrollView>
        </Navbar>
    </View>
  );
};

export default Home;
