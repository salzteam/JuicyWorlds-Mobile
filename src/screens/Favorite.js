import React from 'react'

import styles from '../styles/Favorite';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Sample from '../image/food4.png';

import {
    View,
    Image,
    ScrollView,
    Text,
    useWindowDimensions,
  } from 'react-native'; 
  import {useNavigation} from '@react-navigation/native';

function Favorite() {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Favorite Products</Text>
        </View>
        <ScrollView style={styles.scrolles}>
            <View>
                <Text style={styles.category}>Food</Text>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.category}>Coffee</Text>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.category}>Non Coffee</Text>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.category}>Add Ons</Text>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={Sample} style={styles.imgProduct}/>
                        <View>
                            <Text style={styles.titleFood}>Creamy Ice Coffee</Text>
                            <Text style={styles.priceFood}>IDR 27.000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Favorite