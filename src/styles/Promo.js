import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#EEEEEE",
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center'
    },
    scrolles:{
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    icons: {
        marginRight: 30,
        color: 'black',
        fontSize: 25
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 17
    },
    category: {
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        paddingTop: 28
    },
    second:{
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'black',
        textAlign: 'center'
    },
    containerCard :{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 50
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowColor: "#3939391A",
        elevation: 1,
        width: 156,
        height: 212.41,
        borderRadius: 30,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 30
    },
    imgProduct:{
        width: 128.98,
        height: 128.98,
        borderRadius: 250,
        position: 'absolute',
        top: -35
    },
    titleFood: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 80,
        // width: 116,
        lineHeight: 25,
        color: 'black'
    },
    priceFood: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#9F9F9F',
        textAlign: 'center',
        textDecorationLine: 'line-through'
    },
    promo:{
        backgroundColor: 'white',
        width: 133,
        height: 43,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 1,
        top: 52,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#3939391A",
        elevation: 0.4,
    },
    promoPrice:{
        color:'#6A4029',
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 17
    }
})

export default styles;