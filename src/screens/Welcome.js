import React from 'react';

import styles from '../styles/Welcome';

import backgroundWp from '../image/wpWelcome.png'
import ButtonCustom from '../components/FancyButton'


import {
    ImageBackground,
    Text,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.sectionContainer}>
            <ImageBackground source={backgroundWp} resizeMode="cover" style={styles.image}>
                <View style={styles.innerFrame}>
                    <View>
                        <Text style={styles.text}>Welcome!</Text>
                        <Text style={styles.textsmall}>Get a cup of coffee for free every sunday morning</Text>
                    </View>
                    <View >
                        <View style={{ marginBottom: 15 }}>
                            <ButtonCustom text={"Create New Account"} textColor={"white"} color={"#6A4029"} press={() => { navigation.navigate('Register') }} />
                        </View>
                        <ButtonCustom text={"Login"} textColor={"black"} color={"#FFBA33"} press={() => { navigation.navigate('Login') }} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Welcome;
