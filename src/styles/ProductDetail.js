import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#362115',
        flex: 1
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40
    },
    icon: {
        color: 'white'
    },
    main:{
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
        marginTop: 100,
        borderTopRightRadius: 75
    },
    product: {
        width: 170,
        height: 170,
        borderRadius: 150
    },
    top: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-end',
        top: -100,
        right: 0
    },
    Title:{
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: 'black',
        paddingRight: 10
    },
    bottom:{
        paddingTop: 150,
        paddingLeft: 30,
        paddingRight: 30,
    },
    firstText:{
        width: 180,
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },
    description:{
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        paddingTop: 15,
        color: '#6A4029'
    },
    sizeText: {
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20
    },
    button:{
        backgroundColor: '#FFBA33',
        marginHorizontal: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    buttonText:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: 'black'
    },
    price:{
        backgroundColor: '#FFBA33',
        width: 127,
        height: 54,
        position: 'absolute',
        top: -54,
        left: 25,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceText:{
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: 'black',
        paddingTop: 10
    },
    priceTextDisount:{
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: 'black',
        paddingTop: 15
    },
    strip:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        color: '#D0615C',
        // paddingTop: 10,
        position: 'absolute',
        top: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
})

export default styles;