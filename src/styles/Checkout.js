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
    TitleAddress:{
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        marginTop: 20,
        color: 'black'
    },
    CardAddress:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginVertical: 10
    },
    CardStreet:{
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginBottom: 5
    },
    CardStreetDetail:{
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginBottom: 5
    },
    CardPhone:{
        paddingTop: 5,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
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
        marginVertical: 12.5
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
        // width: 220
    },
    total:{
        fontWeight: 'Poppins-Regular',
        fontSize: 17,
        color: 'black'
    },
    price:{
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        color: 'black'
    }
})

export default styles;