import React, {useEffect, useState} from 'react'

import styles from '../styles/History';
import stylesModal from '../components/Navbar/StyleNavbar';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import Sample from '../image/Hazel.png'
import ViewOverflow from 'react-native-view-overflow';

import {
    View,
    Image,
    ToastAndroid,
    Text,
    Pressable,
    TouchableOpacity,
    useWindowDimensions,
    Modal,
    ActivityIndicator
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import historyAction from '../redux/actions/transaction';  

function History() {

    const [modalVisible, setModalVisible] = useState();
    const [history, setHistory] = useState()

    const leftButton = (
        <SwipeButtonsContainer style={{paddingTop: 30, paddingRight: 40}}>
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
                style={styles.trash}>
                <IconComunity name={"trash-can-outline"} style={styles.iconTrash} size={30}/>
            </TouchableOpacity>
        </SwipeButtonsContainer>
    )

    const navigation = useNavigation();
    const {width} = useWindowDimensions();
    const profile = useSelector(state => state.profile.profile);
    const auth = useSelector(state => state.auth.userData);
    const transaction = useSelector(state => state.transaction);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     setHistory(transaction.history)
    //     // getPagination()
    // },[transaction.history])

    
    useEffect(() => {
        let refresh = false;
        const removeFocusevent = navigation.addListener('focus', e => {
        });
        const removeBlurEvent = navigation.addListener('blur', e => {
            dispatch(historyAction.resetHistoryFulfilled());
            refresh = true;
        });
        return () => {
          removeFocusevent();
          removeBlurEvent();
        };
      }, [navigation,transaction.history]);

    const renderFooter = () => {
        return  (<View style={{flex: 1, paddingVertical: 20, justifyContent: 'center', paddingBottom: 10}}>
            {transaction.history.length !== 0 && transaction.isLoading && <ActivityIndicator size='large' color='black' />}
            {transaction.history.length !== 0 && !transaction.nextHistory && <Text style={{textAlign: 'center', color: 'black', fontFamily: 'Poppins-Regular'}}>No more transcations history</Text>}
        </View>)
    }

    const getPagination = async () => {
        if (!transaction.nextHistory) return
        dispatch(historyAction.getHistoryThunk(transaction.nextHistory, auth.token))
        // setHistory((h)=>{
        //     return h.concat(newHistory)
        // })
    }

    useEffect(()=>{
        if (transaction.history.length === 0 & transaction.err !== "data_not_found") {
            dispatch(historyAction.getHistoryThunk("sort=newest&page=1&limit=6", auth.token))
        }
    },[transaction.history])

    const costing = (price) => {
        return (
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };

      const noData = () => {
        <View style={{flex: 1}}>
            <IconComunity name='clipboard-text-outline'/>
            <Text>TSTING</Text>
        </View>
      }

      const deleteItems = (id) => {
        const changeData = () => setModalVisible()
        const Errors = () => {
            ToastAndroid.showWithGravityAndOffset(
                `System error`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                25,
                50
            );
            setModalVisible()
        }
        dispatch(historyAction.deleteHistoryThunk(id, auth.token, changeData, Errors))
      }
    return (
    <View style={styles.container}>
        {transaction.history.length >= 0 && (<>
                <View style={{padding: 30}}>
                    <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
                    <Text style={styles.title}>Order History</Text>
                    <View style={styles.swipe}>
                        <IconComunity name={"gesture-tap-hold"} size={20}/>
                        <Text style={styles.swipeText}>hold on an item to delete</Text>
                    </View>
                </View>
                {transaction.isLoading && transaction.history.length === 0 ?
                 (
                 <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <ActivityIndicator size={"large"}/>
                 </View>) : <FlatList
                    data={transaction.history}
                    renderItem={({item}) => {
                        return (
                        <TouchableOpacity activeOpacity={0.5} style={{paddingLeft: 25, paddingRight: 25, marginVertical: 10}} 
                            onLongPress={()=>{setModalVisible(item.transaction_id)}}
                            delayLongPress={10}>
                            <View style={{backgroundColor:'white' ,width: width/1.15, display: 'flex', borderRadius: 20, flexDirection: 'row', padding: 15}}>
                                <View>
                                    <Image source={{uri: item.image}} style={styles.imageCard}/>
                                </View>
                                <View style={{paddingLeft: 10}}>
                                    <Text style={styles.cardTitle}>{item.product_name}</Text>
                                    <Text style={styles.cardPrice}>IDR {costing(item.price)}</Text>
                                    <Text style={styles.cardStatus}>{item.status_name}</Text>
                                </View>
                                <Modal
                                    visible={modalVisible === item.transaction_id ? true: false}
                                    transparent={true}
                                    onRequestClose={() => {
                                    setModalVisible();
                                    }}
                                >
                                    <View style={stylesModal.centeredView}>
                                    <View style={stylesModal.modalView}>
                                        <Text style={stylesModal.modalText}>Are you sure want to delete this items?</Text>
                                        <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Pressable
                                            style={[stylesModal.button, stylesModal.buttonClose]}
                                            onPress={() => setModalVisible()}
                                        >
                                            <Text style={stylesModal.textStyle}>Cancel</Text>
                                        </Pressable>
                                        <Pressable
                                            style={[stylesModal.button, stylesModal.buttonClose]}
                                            onPress={()=>{deleteItems(item.transaction_id)}}
                                        >
                                            {transaction.isLoading ? <ActivityIndicator size='small' color='white' />:<Text style={stylesModal.textStyle}>Delete</Text>}
                                        </Pressable>
                                        </View>
                                    </View>
                                    </View>
                                </Modal>
                            </View>
                        </TouchableOpacity>
                    )}}
                    onEndReachedThreshold={0.5}
                    onEndReached={getPagination}
                    ListFooterComponent={renderFooter}
                />}
            </>)}
        {transaction.err === "data_not_found" && transaction.history.length === 0 && (
            <View style={{flex: 1, padding:30}}>
                <View style={{flexDirection: 'row'}}>
                    <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={() => { navigation.goBack() }} />
                    <Text style={{fontFamily: 'Poppins-Black', color: 'black', fontSize: 18, paddingLeft:10}}>History</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                    <IconComunity name='clipboard-text-outline' size={170} style={{color: '#C7C7C7'}}/>
                    <Text style={{fontFamily: 'Poppins-Black', color: 'black', fontSize: 28}}>No History yet</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, width: "80%",textAlign: 'center'}}>Hit the orange button down below to Create an order</Text>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{navigation.navigate("Home")}}>
                        <View
                            style={{
                            marginVertical: 15,
                            backgroundColor: "#6A4029",
                            height: 70,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center'
                            }}>
                            <Text style={{color: "#F6F6F9", fontFamily: 'Poppins-Black', fontSize: 17}}>Start odering</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )

        }
    </View>
  )
}

export default History