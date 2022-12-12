import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "#F5F5F8",
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
    },
    icons: {
        marginRight: 70,
        color: 'black',
        fontSize: 30
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 20,
    },
        TitleDelivery:{
        fontFamily: 'Poppins-Black',
        color: 'black',
        fontSize: 34
    },
    TitleProduct:{
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        marginTop: 20,
        color: 'black'
    },
    Containercard:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        marginVertical: 10,
    },
    card:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageCard: {
        width: 54,
        height: 64,
        borderRadius: 25
    },
    Title:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black',
        lineHeight: 21
    },
    price:{
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: 'black',
        paddingRight: 5
    },
    CardMethods:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    radio:{
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
        marginVertical: 23
    },
    checkedOuter: {
        width: 20, 
        height: 20, 
        borderColor: '#6A4029', 
        borderWidth: 2, 
        borderRadius: 100, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    checkedInner: {
        backgroundColor: '#6A4029', 
        width: 10, 
        height: 10, 
        borderRadius: 50
    },
    unchekedOuter: {
        width: 20, 
        height: 20, 
        borderColor: '#9F9F9F', 
        borderWidth: 2, 
        borderRadius: 100, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textMethod:{
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: 'black',
        marginBottom: 5,
        marginVertical: 5,
        width: 165
    },
    methodList:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    methodCard: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#F47B0A",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    methodBank: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#895537",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    methodCod: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#FFBA33",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardIcon:{
        color: 'white'
    },
    totals: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: 'black'
    },
    prices: {
        fontFamily: 'Poppins-Black',
        fontSize: 22,
        color: 'black'
    }
})

export default styles;