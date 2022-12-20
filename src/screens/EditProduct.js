import React, {useEffect, useState} from 'react'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

import {
    Pressable,
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ToastAndroid,
    Modal
  } from 'react-native';

import styles from '../styles/EditProduct'
import stylesModal from '../components/Navbar/StyleNavbar';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { StackActions } from '@react-navigation/native';

function EditProduct(props) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  let product = props.route.params
  if (!props.route.params.dataProduct) product = {dataProduct : props.route.params}
  console.log(product);
  const [productTitle, setProductTitle] = useState(product.dataProduct.product_name)
  const [productPrice, setProductPrice] = useState(product.dataProduct.price)
  const [productDescription, setproductDescription] = useState(product.dataProduct.description)
  const [productImage, setproductImage] = useState()
  const [modal, setModalVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [allow, setAllow] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
//   console.log(product);

  const token = useSelector(state => state.auth.userData.token);

  const deleteHandle = (id) =>{
    setLoading(true)
    const URL = `${process.env.BACKEND_URL}/products/${id}`
    axios.delete(URL, {headers: {'x-access-token': token}})
    .then((result) => {
      setLoading(false)
      setModalDelete(false)
      navigation.dispatch(StackActions.replace("Home"))
      return (ToastAndroid.showWithGravityAndOffset(
        `The product has been deleted`,
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

  useEffect(()=>{
    setAllow(false)
    if (productTitle !== product.dataProduct.product_name) setAllow(true)
    if (productPrice !== product.dataProduct.price) setAllow(true)
    if (productDescription !== product.dataProduct.description) setAllow(true)
    if (productImage) setAllow(true)
  },[productTitle,productPrice,productDescription,productImage])

  const handleCancel = () => {
    if (productTitle !== product.dataProduct.product_name) setProductTitle(product.dataProduct.product_name)
    if (productPrice !== product.dataProduct.price) setProductPrice(product.dataProduct.price)
    if (productDescription !== product.dataProduct.description) setproductDescription(product.dataProduct.description)
    if (productImage) setproductImage()
  }

  const saveHandle = () => {
    if (!allow) return
    if (isLoading) return
    setLoading(true)
    const URL = `${process.env.BACKEND_URL}/products/${product.dataProduct.id}`
    let bodys = new FormData()
    if (productImage) bodys.append("image",  {
      name: 'test.' + productImage[0]?.type?.substr(6),
      type: productImage[0]?.type,
      uri:
        Platform.OS !== 'android'
          ? 'file://' + productImage[0]?.uri
          : productImage[0]?.uri,
    });
    if (productTitle !== product.dataProduct.product_name) bodys.append("product_name", productTitle)
    if (productPrice !== product.dataProduct.price) bodys.append("price", productPrice)
    if (productDescription !== product.dataProduct.description) bodys.append("description", productDescription)
    axios.patch(URL, bodys, {headers: {'x-access-token': token}})
    .then((result) => {
      setLoading(false)
      setAllow(false)
      navigation.dispatch(StackActions.replace("ProductDetail", product.dataProduct.id))
      return (ToastAndroid.showWithGravityAndOffset(
        `Product modified successfully`,
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
        setproductImage(response.assets);
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
      setproductImage(response.assets);
    });
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name='chevron-left' size={22} style={{color: "black"}} onPress={()=>{navigation.goBack()}}/>
            <Pressable style={styles.icon} onPress={()=>setModalDelete(true)}>
                <IconComunity name='trash-can-outline' size={20} style={{color: "white"}}/>
            </Pressable>
        </View>
        <Pressable style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 20}} onPress={()=>setModalVisible(true)}>
            <Image source={{uri: productImage ? productImage[0].uri : product.dataProduct.image}} style={{width: 230, height: 230, borderRadius: 250}}/>
        </Pressable>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput style={styles.productName} value={productTitle} multiline={true} onChangeText={setProductTitle}/>
            <TextInput style={styles.price} keyboardType={'numeric'} value={costing(parseInt(productPrice))} multiline={true} onChangeText={e => priceHandler(e)}/>
        </View>
        <View style={{paddingTop: 5}}>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Delivery info</Text>
                <Text style={{fontFamily: 'Poppins-Regular', marginBottom: 5, fontSize: 15}}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Description</Text>
                <TextInput multiline={true} value={productDescription} onChangeText={setproductDescription}/>
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
                marginBottom: 10,
                backgroundColor: allow ? "#6A4029" : "#9F9F9F",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Save change</Text>}
            </View>
        </TouchableOpacity>
        <Modal
            visible={modal}
            transparent={true}
            onRequestClose={() => {
            setModalVisible();
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
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
            visible={modalDelete}
            transparent={true}
            onRequestClose={() => {
            setModalDelete();
            }}
        >
            <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
                <Text style={stylesModal.modalText}>Are you sure want to delete this product?</Text>
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
                    onPress={()=>deleteHandle(product.dataProduct.id)}
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

export default EditProduct