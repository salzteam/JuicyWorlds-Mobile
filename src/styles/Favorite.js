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
        fontFamily: 'Poppins-Black',
        color: 'black',
        fontSize: 17
    },
    category: {
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        paddingTop: 25
    },
    containerCard :{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 25
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
        fontFamily: 'Poppins-Black',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 80,
        width: 116,
        color: 'black'
    },
    priceFood: {
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        color: '#6A4029',
        textAlign: 'center'
    }
})

export default styles;