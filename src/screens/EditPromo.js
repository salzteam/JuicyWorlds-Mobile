import React, {useEffect, useState} from 'react'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import DatePicker from 'react-native-date-picker'

import {
    Pressable,
    Text,
    View,
    TouchableOpacity,
    Image,
    ToastAndroid,
    Modal,
    ActivityIndicator
  } from 'react-native';

import stylesModal from '../components/Navbar/StyleNavbar';
import styles from '../styles/NewPromo'
import stylesCamera from '../styles/EditProduct'
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Camera from '../image/camera.png'
import { FlatList } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import productsAction from '../redux/actions/product';  
import { StackActions } from '@react-navigation/native';
import axios from 'axios';

function EditPromo(props) {
  const data = props.route.params
  console.log(data);
  const navigation = useNavigation()

  const [promoCode, setpromoCode] = useState(data.code)
  const [promoName, setpromoName] = useState(data.title)
  const [promoDiscount, setpromoDiscount] = useState(String(data.discount))
  const [promoDescription, setpromoDescription] = useState(data.description)
  const [promoStart, setpromoStart] = useState(data.start_promo)
  const [promoEnd, setpromoEnd] = useState(data.end_promo)
  const [promoProduct, setpromoProduct] = useState(data.product_id)
  const [promoImage, setpromoImage] = useState(data.imagepp)
  const [promoProductName, setpromoProductName] = useState(data.product_name)
  
  const [modal, setModalVisible] = useState(false)
  const [modalProduct, setModalProduct] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [allow, setAllow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [openStart, setopenStart] = useState(false)
  const [openEnd, setopenEnd] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [displayDate, setDisplay] = useState("Input start promo date")
//   console.log(product);

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userData.token);

  const getPagination = async () => {
        if (!product.nextPage) return;
        if (product.LoadingProduct) return;
        // if (filter || sort || price) return dispatch(productsAction.getFilterThunk(product.nextPage))
        if (!product.LoadingProduct) dispatch(productsAction.getProductsThunk(product.nextPage))
  }

  useEffect(()=>{
    setAllow(false)
    if (promoCode !== data.code) setAllow(true)
    if (promoName !== data.title) setAllow(true)
    if (promoDiscount !== String(data.discount)) setAllow(true)
    if (promoDescription !== data.description) setAllow(true)
    if (promoStart !== data.start_promo) setAllow(true)
    if (promoEnd !== data.end_promo) setAllow(true)
    if (promoProduct !== data.product_id) setAllow(true)
    if (promoImage !== data.imagepp) setAllow(true)
  },[promoCode,promoName,promoDiscount,promoImage,promoStart,promoDescription,promoEnd,promoProduct])

  const handleCancel = () => {
    if (promoCode !== data.code) setpromoCode(data.code)
    if (promoName !== data.title) setpromoName(data.title)
    if (promoDiscount !== String(data.discount)) setpromoDiscount(String(data.discount))
    if (promoDescription !== data.description) setpromoDescription(data.description)
    if (promoStart !== data.start_promo) setpromoStart(data.start_promo)
    if (promoEnd !== data.end_promo) setpromoEnd(data.end_promo)
    if (promoProduct !== data.product_id) setpromoProduct(data.product_id)
    if (promoImage !== data.imagepp) setpromoImage(data.imagepp)
    if (promoProductName !== data.product_name) setpromoProductName(data.product_name)
  }

  const deleteHandle = (id) =>{
    setLoading(true)
    const URL = `${process.env.BACKEND_URL}/promo/delete/${id}`
    axios.delete(URL, {headers: {'x-access-token': token}})
    .then((result) => {
      setLoading(false)
      setModalDelete(false)
      navigation.dispatch(StackActions.replace("Coupon"))
      return (ToastAndroid.showWithGravityAndOffset(
        `The promo has been deleted`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
      setModalDelete(false)
      return (ToastAndroid.showWithGravityAndOffset(
        `${error.response.data.msg || error.response.data.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
  }

  const saveHandle = () => {
    if (!allow) return
    setLoading(true)
    let bodys = new FormData()
    if (promoCode !== data.code) bodys.append("code", promoCode)
    if (promoName !== data.title) bodys.append("title", promoName)
    if (promoDiscount !== String(data.discount)) bodys.append("discount", promoDiscount)
    if (promoDescription !== data.description) bodys.append("desc", promoDescription)
    if (promoStart !== data.start_promo) bodys.append("start", promoStart)
    if (promoEnd !== data.end_promo) bodys.append("end", promoEnd)
    if (promoProduct !== data.product_id) bodys.append("product_id", promoProduct)
    if (promoImage !== data.imagepp) bodys.append("image",  {
      name: 'test.' + promoImage[0]?.type?.substr(6),
      type: promoImage[0]?.type,
      uri:
        Platform.OS !== 'android'
          ? 'file://' + promoImage[0]?.uri
          : promoImage[0]?.uri,
    });
    const URL = `${process.env.BACKEND_URL}/promo/edit/${data.id}`
    axios.patch(URL, bodys, {headers: {"x-access-token": token}})
    .then((result) => {
      setLoading(false)
      setAllow(false)
      navigation.dispatch(StackActions.replace("Coupon"))
      return (ToastAndroid.showWithGravityAndOffset(
        `Promo modified successfully`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error);
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

  const priceHandler = (text) => {
    if (text === "IDR Na") return setProductPrice(0)
    if (text === "IDR NaN") return setProductPrice(0)
    if (text === "IDR ") return setProductPrice(0)
    let news = ""
    for (let i = 0; i <= text.length; i++) {
        const element = text[i];
        const regex = new RegExp(/[0-9]/);
        if (regex.test(element)) news += element
    }
    setProductPrice(news)
  }

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
            <Text style={styles.titleNavbar}>Edit Product</Text>
        </View>
        <Pressable style={styles.iconDelete} onPress={()=>setModalDelete(true)}>
                <IconComunity name='trash-can-outline' size={20} style={{color: "white"}}/>
        </Pressable>
        {promoImage === data.imagepp ? (<View style={{paddingVertical: 20 ,alignItems: 'center',justifyContent: 'center'}}>
            <Pressable onPress={()=>setModalVisible(true)}>
                <Image source={{uri:promoImage}} style={{width: 230, height: 230, borderRadius: 250,alignItems: 'center', justifyContent: 'center'}}/>
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
            onPress={handleCancel}>
            <View
                style={{
                marginTop: 10,
                backgroundColor: allow && !isLoading ? "#6A4029" : "#9F9F9F",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                <Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Cancel</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveHandle}>
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
                {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Save promo</Text>}
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
        <Modal
            visible={modalDelete}
            transparent={true}
            onRequestClose={() => {
            setModalDelete();
            }}
        >
            <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
                <Text style={stylesModal.modalText}>Are you sure want to delete this promo?</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <Pressable
                    style={[stylesModal.button, stylesModal.buttonClose]}
                    onPress={() => {
                      setModalDelete(false)}}
                >
                    <Text style={stylesModal.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={[stylesModal.button, stylesModal.buttonClose]}
                    onPress={()=>deleteHandle(data.id)}
                >
                    {isLoading ? <ActivityIndicator size='small' color='white' />:<Text style={stylesModal.textStyle}>Continue</Text>}
                </Pressable>
                </View>
            </View>
            </View>
        </Modal>
    </ScrollView>
  )
}

export default EditPromo;