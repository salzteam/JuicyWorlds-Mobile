import React, {useState, useRef} from 'react';

import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import IconFW from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/FontAwesome5'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons'

import { Divider } from '@rneui/themed';
import styles from '../Navbar/StyleNavbar';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator
} from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/actions/auth';
import { StackActions } from '@react-navigation/native';

function Navbar({children}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const email = useSelector(state => state.auth.userData.email);
  const auth = useSelector(state => state.auth);
  const cartState = useSelector(state => state.transaction);

  const refDrawer = useRef()

  const logoutHandler = () => {
    const LogoutSuccess = () => {
      navigation.dispatch(StackActions.replace('Welcome'))
    }
    const LogoutError = (error) => {
        ToastAndroid.showWithGravityAndOffset(
            `${error}`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        );
    }
    dispatch(authAction.logoutThunk(auth.userData.token, LogoutSuccess, LogoutError))
  }

  const renderDrawer = () => {
    return (
      <View>
        <Pressable style={styles.continerSwipe} onPress={()=>{
          refDrawer.current.closeDrawer()
          navigation.navigate("Profile")}}>
          <Image source={{uri:profile.image}} style={styles.imageDrawer}/>
          <Text style={styles.username}>{profile.displayName}</Text>
          {auth.userData.role === "admin" && <Text style={styles.email}>{auth.userData.role}</Text>}
          <Text style={styles.email}>{email}</Text>
        </Pressable>
        <View style={{paddingLeft: 35, paddingRight: 35,paddingTop: 20, display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
          <View>
            {auth.userData.role !== "admin" &&<Pressable style={styles.containerBottom} onPress={()=>{
              refDrawer.current.closeDrawer()
              navigation.navigate("EditProfile")}}>
              {/* <Image source={IconUser} style={styles.imageBottom}/> */}
              <Icons name={"user-circle"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>Edit Profile</Text>
            </Pressable>}
            {auth.userData.role === "admin" &&<Pressable style={styles.containerBottom} onPress={()=>{
              refDrawer.current.closeDrawer()
              navigation.navigate("Coupon")}}>
              {/* <Image source={IconUser} style={styles.imageBottom}/> */}
              {/* <Icons name={"user-circle"} size={20} style={styles.imageBottom}/> */}
              <IconComunity name={"percent-outline"} style={{fontSize:22,marginRight: 15,}} onPress={()=>{
                refDrawer.current.closeDrawer()
                navigation.navigate("Coupon")}}/>
              <Text style={styles.textBottom}>All Coupons</Text>
            </Pressable>}
            <Divider style={{width:"90%",margin:3 }}/>
            <Pressable style={styles.containerBottom} onPress={()=>{
              refDrawer.current.closeDrawer()
              navigation.navigate("History")}}>
              {/* <Image source={IconUser} style={styles.imageBottom}/> */}
              <IconComunity name={"cart-arrow-down"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>Orders</Text>
            </Pressable>
            <Divider style={{width:"90%",margin:3 }}/>
            <Pressable style={styles.containerBottom}onPress={()=>{
                refDrawer.current.closeDrawer()
                navigation.navigate("Search")}}>
              {/* <Image source={IconMenus} style={styles.imageBottom}/> */}
              <IconComunity name={"food-outline"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>All menu</Text>
            </Pressable>
            <Divider style={{width:"90%",margin:3 }}/>
            {auth.userData.role !== "admin" ? <View style={styles.containerBottom}>
              <Icons name={"sticky-note"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>Privacy policy</Text>
            </View> : <Pressable style={styles.containerBottom} onPress={()=>{
              refDrawer.current.closeDrawer()
              navigation.navigate("SalesChart")}}>
              <Icons name={"sticky-note"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>Sales Report</Text>
            </Pressable>}
            <Divider style={{width:"90%",margin:3 }}/>
            <View style={styles.containerBottom}>
              {/* <Image source={IconUser} style={styles.imageBottom}/> */}
              <IconComunity name={"shield-half-full"} size={20} style={styles.imageBottom}/>
              <Text style={styles.textBottom}>Security</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.containerLogout} onPress={() => setModalVisible(true)}>
            {/* <Image source={IconUser} style={styles.imageBottom}/> */}
            <IconFW name={"long-arrow-right"} size={20} style={styles.imageBottom}/>
            <Text style={styles.textBottom}>Sign-out</Text>
          </TouchableOpacity>
        </View>
        <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure want to logout?</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>NO</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={()=>{
                  refDrawer.current.closeDrawer()
                  logoutHandler()}}
              >
                {auth.isLoading ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.textStyle}>YES</Text>}
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      </View>
    );
  };

  return (
    <>
      <DrawerLayout
        ref={refDrawer}
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType="front"
        drawerBackgroundColor="#F2F2F2"
        overlayColor="rgba(255, 255, 255, 0.8)"
        drawerContainerStyle={{borderTopRightRadius: 30}}
        renderNavigationView={renderDrawer}>
          <View style={styles.sectionContainer}>
              <Pressable onPress={() => refDrawer.current.openDrawer()} >
                  {/* <Image source={Icon} /> */}
                  <IconComunity name={"chevron-double-right"} style={{fontSize: 40}}/>
              </Pressable>
              <View style={styles.left}>
                  {/* <Image source={Chat} style={styles.icon}/> */}
                  {/* <Image source={Search} style={styles.icon}/> */}
                  <Icons name={"rocketchat"} style={{transform: [{rotateY: '180deg'}], fontSize: 25,marginHorizontal: 7}}/>
                  <IconIon name={"search-outline"} style={styles.Icons} onPress={()=>{navigation.navigate("Search")}}/>
                  {auth.userData.role !== "admin" && <IconIon name={"cart-outline"} style={styles.Icons} onPress={()=>{navigation.navigate("Cart")}}/>}
                  {/* {auth.userData.role === "admin" && <IconComunity name={"cart-percent"} style={styles.Icons} onPress={()=>{navigation.navigate("Cart")}}/>} */}
                  {cartState.cart.length !== 0 && (<View style={styles.notif}>
                      <Text style={styles.textNotif}>1</Text>
                  </View>)}
                  {/* <Image source={Chart} style={styles.icon}/> */}
                  {/* <Icons name={"search"} size={20} style={styles.icon}/>
                  <Icons name={"shopping-cart"} size={20} style={styles.icon}/> */}
              </View>
          </View>
          {children}
      </DrawerLayout>
    </>
  )
}

export default Navbar;