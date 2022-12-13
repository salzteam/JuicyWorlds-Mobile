import React, {useState} from 'react'

import styles from '../styles/History';
import stylesModal from '../components/Navbar/StyleNavbar';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import Sample from '../image/Hazel.png'
import ViewOverflow from 'react-native-view-overflow';

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    Modal
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import historyAction from '../redux/actions/transaction';  

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

function History() {

    const [modalVisible, setModalVisible] = useState();



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

    const costing = (price) => {
        return (
          parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      };
    return (
    <ScrollView style={styles.container}>
        <View style={{padding: 30}}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.title}>Order History</Text>
            <View style={styles.swipe}>
                <IconComunity name={"gesture-tap-hold"} size={20}/>
                <Text style={styles.swipeText}>hold on an item to delete</Text>
            </View>
        </View>
        <FlatList
            data={transaction.history}
            renderItem={({item}) => {
                return (
                <TouchableOpacity activeOpacity={0.5} style={{paddingLeft: 25, paddingRight: 25, marginVertical: 10}} 
                    onLongPress={()=>{setModalVisible("1")}}
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
                            visible={modalVisible === "1" ? true: false}
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
                                >
                                    <Text style={stylesModal.textStyle}>Delete</Text>
                                </Pressable>
                                </View>
                            </View>
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
            )}}
        />
    </ScrollView>
  )
}

export default History