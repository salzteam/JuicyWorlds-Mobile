import React from 'react'

import styles from '../styles/History';
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
    useWindowDimensions
  } from 'react-native'; 

  import {useNavigation} from '@react-navigation/native';
  
function History() {

    const leftButton = (
        <SwipeButtonsContainer style={{paddingTop: 30, paddingRight: 40}}>
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
                style={styles.trash}>
                <IconComunity name={"trash-can-outline"} style={styles.iconTrash} size={30}/>
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );

    const navigation = useNavigation();
    const {width} = useWindowDimensions();
    return (
    <ScrollView style={styles.container}>
        <View style={{padding: 30}}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.title}>Order History</Text>
            <View style={styles.swipe}>
                <IconComunity name={"gesture-swipe"} size={20}/>
                <Text style={styles.swipeText}>swipe on an item to delete</Text>
            </View>
        </View>
            <SwipeItem
                    containerView={ViewOverflow}
                    rightButtons={leftButton}
                >
                    <View style={{display:'flex', paddingLeft: 25, paddingRight: 25}}>
                        <View style={{backgroundColor: 'white' ,width: width/1.15, display: 'flex', borderRadius: 20, flexDirection: 'row', padding: 15}}>
                            <View>
                                <Image source={Sample} style={styles.imageCard}/>
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.cardTitle}>Hazelnut Latte</Text>
                                <Text style={styles.cardPrice}>IDR 34.000</Text>
                                <Text style={styles.cardStatus}>Waiting for delivery [will arrive at 3 PM]</Text>
                            </View>
                        </View>
                    </View>
            </SwipeItem>
    </ScrollView>
  )
}

export default History