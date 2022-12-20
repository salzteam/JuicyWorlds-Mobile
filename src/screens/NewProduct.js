import React, {useEffect, useState} from 'react'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

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

import styles from '../styles/NewProduct'
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Camera from '../image/camera.png'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { StackActions } from '@react-navigation/native';

function NewProduct() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
//   let product = props.route.params
//   if (!props.route.params.dataProduct) product = {dataProduct : props.route.params}
  const [productTitle, setProductTitle] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productDescription, setproductDescription] = useState("")
  const [productImage, setproductImage] = useState()
  const [productCategory, setproductCategory] = useState("")
  const [modal, setModalVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [allow, setAllow] = useState(false)
  const token = useSelector(state => state.auth.userData.token);

  useEffect(()=>{
    setAllow(false)
    if (productTitle.length !== 0 && productPrice.length !== 0 && productDescription.length !== 0 && productImage && productCategory.length !== 0) setAllow(true)
  },[productTitle,productPrice,productDescription,productImage,productCategory])

  const createHandler = () => {
    if (!allow) return
    setLoading(true)
    let bodys = new FormData();
    bodys.append("nameProduct", productTitle)
    bodys.append("priceProduct", productPrice)
    bodys.append("description", productDescription)
    bodys.append("categoryproduct", productCategory)
    bodys.append("image",  {
      name: 'test.' + productImage[0]?.type?.substr(6),
      type: productImage[0]?.type,
      uri:
        Platform.OS !== 'android'
          ? 'file://' + productImage[0]?.uri
          : productImage[0]?.uri,
    });
    const URL = `${process.env.BACKEND_URL}/products`
    axios.post(URL, bodys, {headers: {'x-access-token': token}})
    .then((result)=>{
        setLoading(false)
        console.log(result);
        navigation.dispatch(StackActions.replace("ProductDetail", result.data.data.id))
        return (ToastAndroid.showWithGravityAndOffset(
          `Product successfully created`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50
        ))
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
      return (ToastAndroid.showWithGravityAndOffset(
        `${err.response.data.msg || err.response.data.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      ))
    })
  }


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
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>New Product</Text>
        </View>
        {!productImage ? (<View style={{paddingVertical: 20 ,alignItems: 'center',justifyContent: 'center'}}>
            <Pressable style={{width: 230, height: 230, borderRadius: 250, backgroundColor:'#BABABA59',alignItems: 'center', justifyContent: 'center'}} onPress={()=>setModalVisible(true)}>
                <Image source={Camera}/>
            </Pressable> 
        </View>):(
            <View style={{paddingVertical: 20 ,alignItems: 'center',justifyContent: 'center'}}>
                <Pressable  onPress={()=>setModalVisible(true)}>
                    <Image style={{width: 230, height: 230, borderRadius: 250,alignItems: 'center', justifyContent: 'center'}} source={{uri: productImage[0].uri}}/>
                </Pressable> 
            </View>
        )}
        <View style={{paddingTop: 5}}>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Name</Text>
                <TextInput placeholder='Input the product name min. 30 characters' multiline={true} value={productTitle} onChangeText={setProductTitle}/>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Price</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontFamily: 'Poppins-Bold', color: 'black'}}>IDR </Text>
                  <TextInput placeholder='Input the product price' multiline={true} value={productPrice} onChangeText={setProductPrice} keyboardType={'number-pad'}/>
                </View>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Delivery info</Text>
                <Text style={{fontFamily: 'Poppins-Regular', marginBottom: 5, fontSize: 15}}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
            </View>
            <View style={{marginVertical: 10, borderBottomWidth: 1, borderColor: '#C4C4C4'}}>
                <Text style={styles.title}>Description</Text>
                <TextInput placeholder='Describe your product min. 150 characters' multiline={true} value={productDescription} onChangeText={setproductDescription}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>Category </Text>
              <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between'}}>
                <Text style={productCategory === "1" ? styles.buttonCtgSelect : styles.buttonCtg} onPress={()=>setproductCategory("1")}>Food</Text>
                <Text style={productCategory === "2" ? styles.buttonCtgSelect : styles.buttonCtg} onPress={()=>setproductCategory("2")}>Coffee</Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between'}}>
                <Text style={productCategory === "3" ? styles.buttonCtgSelect : styles.buttonCtg} onPress={()=>setproductCategory("3")}>Non Coffee</Text>
                <Text style={productCategory === "4" ? styles.buttonCtgSelect : styles.buttonCtg} onPress={()=>setproductCategory("4")}>Addon</Text>
              </View>
            </View>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={createHandler}>
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
                {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Create product</Text>}
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
    </ScrollView>
  )
}

export default NewProduct