import React, {useEffect, useState} from 'react'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import DatePicker from 'react-native-date-picker'

import {
    Pressable,
    Text,
    View,
    TouchableOpacity,
    Image,
    useWindowDimensions,
    ToastAndroid,
    Modal,
    ActivityIndicator
  } from 'react-native';

import styles from '../styles/NewPromo'
import stylesCamera from '../styles/NewProduct'
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Camera from '../image/camera.png'
import { FlatList } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import productsAction from '../redux/actions/product';  
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

function NewPromo() {
  const navigation = useNavigation()
//   let product = props.route.params
//   if (!props.route.params.dataProduct) product = {dataProduct : props.route.params}
  const [promoCode, setpromoCode] = useState("")
  const [promoName, setpromoName] = useState("")
  const [promoDiscount, setpromoDiscount] = useState("")
  const [promoDescription, setpromoDescription] = useState("")
  const [promoStart, setpromoStart] = useState("Input start promo date")
  const [promoEnd, setpromoEnd] = useState("Input end promo date")
  const [promoProduct, setpromoProduct] = useState("")
  const [promoImage, setpromoImage] = useState()
  const [promoProductName, setpromoProductName] = useState()
  
  const [modal, setModalVisible] = useState(false)
  const [modalProduct, setModalProduct] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [allow, setAllow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [openStart, setopenStart] = useState(false)
  const [openEnd, setopenEnd] = useState(false)
  const [displayDate, setDisplay] = useState("Input start promo date")
//   console.log(product);

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userData.token);

  useEffect(()=>{
    setAllow(false)
    if (promoCode.length !== 0 && promoName.length !== 0 && promoDiscount.length !== 0 && promoDescription && promoStart !== "Input start promo date" && promoEnd !== "Input end promo date" && promoProduct.length !== 0 && promoImage) setAllow(true)
  },[promoCode,promoName,promoDiscount,promoDescription,promoStart,promoEnd,promoProduct,promoImage])

  const getPagination = async () => {
        if (!product.nextPage) return;
        if (product.LoadingProduct) return;
        // if (filter || sort || price) return dispatch(productsAction.getFilterThunk(product.nextPage))
        if (!product.LoadingProduct) dispatch(productsAction.getProductsThunk(product.nextPage))
  }

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const handleSave = () => {
    if (!allow) return
    setLoading(true)
    const color = getRandomColor()
    let bodys = new FormData()
    bodys.append("code", promoCode)
    bodys.append("discount", promoDiscount)
    bodys.append("product_id", promoProduct)
    bodys.append("start", promoStart)
    bodys.append("end", promoEnd)
    bodys.append("color", color)
    bodys.append("title", promoName)
    bodys.append("desc", promoDescription)
    bodys.append("image",  {
      name: 'test.' + promoImage[0]?.type?.substr(6),
      type: promoImage[0]?.type,
      uri:
        Platform.OS !== 'android'
          ? 'file://' + promoImage[0]?.uri
          : promoImage[0]?.uri,
    });
    const URL = `${process.env.BACKEND_URL}/promo/create`
    axios.post(URL, bodys, {headers: {'x-access-token': token}})
    .then(()=>{
      setLoading(false)
      navigation.dispatch(StackActions.replace("Coupon"))
      return (ToastAndroid.showWithGravityAndOffset(
        `Promo successfully created`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
      return (ToastAndroid.showWithGravityAndOffset(
        `${error.response.data.msg || error.response.data.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
  }

  useEffect(() => {
    let refresh = false;
    const removeFocusevent = navigation.addListener('focus', e => {
        dispatch(productsAction.getProductsThunk("page=1&limit=10"))
    });
    const removeBlurEvent = navigation.addListener('blur', e => {
        refresh = true;
        dispatch(productsAction.resetProductsFulfilled())
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

  let launchCameras = () => {
    let options = {
      storageOptions: {
        saveToPhotos: true,
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        console.log(response);
        return (ToastAndroid.showWithGravityAndOffset(
          `Do not have access to open the camera`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50
        ))
      }
        setpromoImage(response.assets);
    });

  }

let launchImageLibrarys = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        return (ToastAndroid.showWithGravityAndOffset(
          `Do not have access to open the library`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50
        ))
      }
      setpromoImage(response.assets);
    });
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>New Promo</Text>
        </View>
        {!promoImage ? (<View style={{paddingVertical: 20 ,alignItems: 'center',justifyContent: 'center'}}>
            <Pressable style={{width: 230, height: 230, borderRadius: 250, backgroundColor:'#BABABA59',alignItems: 'center', justifyContent: 'center'}} onPress={()=>setModalVisible(true)}>
                <Image source={Camera}/>
            </Pressable> 
        </View>):(
            <View style={{paddingVertical: 20 ,alignItems: 'center',justifyContent: 'center'}}>
                <Pressable  onPress={()=>setModalVisible(true)}>
                    <Image style={{width: 230, height: 230, borderRadius: 250,alignItems: 'center', justifyContent: 'center'}} source={{uri: promoImage[0].uri}}/>
                </Pressable> 
            </View>
        )}
        <View style={{paddingTop: 5}}>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Code</Text>
                <TextInput placeholder='Input the code promo' multiline={true} value={promoCode} onChangeText={setpromoCode}/>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Name</Text>
                <TextInput placeholder='Input the promo name' multiline={true} value={promoName} onChangeText={setpromoName}/>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Discount</Text>
                <TextInput placeholder='Input the discount you’ll use for the promo' multiline={true} keyboardType={'number-pad'} value={promoDiscount} onChangeText={setpromoDiscount}/>
            </View> 
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Description</Text>
                <TextInput placeholder='Describe your promo min' multiline={true} value={promoDescription} onChangeText={setpromoDescription}/>
            </View>
            <Pressable style={{marginBottom: 15,marginTop: 10}}>
                <Text style={styles.title}>Start Date</Text>
                <Pressable style={[styles.input,{marginBottom: 20}]}> 
                    <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <Text style={[styles.tanggal,{color: promoStart !== "Input start promo date" ? 'black' : undefined}]}>{promoStart}</Text>
                        <IconComunity name={"calendar-range"}  size={20} onPress={()=>{setopenStart(true)}}/>
                    </View>
                </Pressable>
                <Text style={styles.title}>End Date</Text>
                <Pressable style={styles.input}> 
                    <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <Text style={[styles.tanggal,{color: promoEnd !== "Input end promo date" ? 'black' : undefined}]}>{promoEnd}</Text>
                        <IconComunity name={"calendar-range"}  size={20} onPress={()=>{setopenEnd(true)}}/>
                    </View>
                </Pressable>
                <DatePicker
                    modal
                    open={openStart}
                    date={date}
                    mode={"date"}
                    onConfirm={(date) => {
                    setopenStart(false)
                    let dd = String(date.getDate()).padStart(2, "0");
                    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
                    let yyyy = date.getFullYear();
                    const time = `${yyyy}-${mm}-${dd}`
                    setDate(date)
                    setpromoStart(time)
                    }}
                    onCancel={() => {
                    setopenStart(false)
                    }}
                />
                <DatePicker
                    modal
                    open={openEnd}
                    date={date}
                    mode={"date"}
                    onConfirm={(date) => {
                    setopenEnd(false)
                    let dd = String(date.getDate()).padStart(2, "0");
                    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
                    let yyyy = date.getFullYear();
                    const time = `${yyyy}-${mm}-${dd}`
                    setDate(date)
                    setpromoEnd(time)
                    }}
                    onCancel={() => {
                    setopenEnd(false)
                    }}
                />
            </Pressable>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Product</Text>
                <Pressable style={{justifyContent: 'space-between', flexDirection: 'row'}} onPress={()=>{setModalProduct(true)}}>
                    <Text style={{marginBottom: 15, color: promoProduct ? 'black' : undefined}}>{promoProduct ? promoProductName : "Select a product to be given a promo"}</Text>
                    <IconComunity name='menu-right' size={25} onPress={()=>setModalProduct(true)}/>
                </Pressable>
            </View>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{handleSave()}}>
            <View
                style={{
                marginTop: 10,
                marginBottom: 50,
                backgroundColor: allow ? "#6A4029" : "#9F9F9F",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Create promo</Text>}
            </View>
        </TouchableOpacity>
        <Modal
            visible={modal}
            transparent={true}
            onRequestClose={() => {
            setModalVisible();
            }}
        >
            <View style={stylesCamera.centeredView}>
            <View style={stylesCamera.modalView}>
              <View style={{justifyContent: 'flex-end', position: 'absolute', right: 15, top: 15}}>
                  <IconComunity name='window-close' size={25} onPress={()=>setModalVisible(!modal)}/>
              </View>
              <Pressable style={{marginTop: 20,marginBottom: 15 ,padding: 10, backgroundColor: '#DCDCDC'}} onPress={()=>{
                launchCameras()
                setModalVisible(!modal)
              }}>
                <Text style={{fontFamily: 'Poppins-Black', color: '#868686', fontSize: 17, textAlign: 'center'}}>OPEN CAMERA</Text>
              </Pressable>
              <Pressable style={{padding: 10,backgroundColor: '#DCDCDC'}} onPress={()=>{
                launchImageLibrarys()
                setModalVisible(!modal)
              }}>
                <Text style={{fontFamily: 'Poppins-Black', color: '#868686', fontSize: 17, textAlign: 'center'}}>OPEN IMAGE LIBRARY</Text>
              </Pressable>
            </View>
            </View>
        </Modal>
        <Modal
            visible={modalProduct}
            transparent={true}
            onRequestClose={() => {setModalProduct(false)}}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{paddingTop: 30, marginBottom: 35, position: 'relative'}}>
                            <Text style={{fontFamily: 'Poppins-Bold', color: 'black', fontSize: 22}}>PRODUCT LIST</Text>
                        </View>
                            <IconComunity name="window-close" size={25} style={{position: 'absolute', right: 20, top: 20, color: 'black'}} onPress={()=>setModalProduct(false)}/>
                        {product.LoadingProduct && product.Products.length === 0 ?
                        (
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 200}}>
                            <ActivityIndicator color={"black"} size={"large"}/>
                        </View>) : <FlatList
                            data={product.Products}
                            renderItem={({item}) => {
                                if (item.product_name !== "none") {
                                return (
                                <>
                                    <Pressable style={styles.card} onPress={()=>{
                                        setpromoProduct(item.id)
                                        setpromoProductName(item.product_name)
                                        setModalProduct(false)
                                    }}>
                                        <Image source={{uri: item.image}} style={styles.imgProduct}/>
                                        <View>
                                            <Text style={styles.titleFood}>{item.product_name}</Text>
                                            <Text style={styles.priceFood}>{costing(item.price)}</Text>
                                        </View>
                                    </Pressable>
                                </>
                            )}}}
                            onEndReached={getPagination}
                            onEndReachedThreshold={0.5}
                            contentContainerStyle={styles.containerCard} 
                            numColumns={2}
                        />} 
                    </View>
                </View>
        </Modal>
    </ScrollView>
  )
}

export default NewPromo