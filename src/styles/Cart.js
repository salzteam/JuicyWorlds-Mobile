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
        alignItems: 'center',
    },
    icons: {
        marginRight: 80,
        color: 'black',
        fontSize: 30
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 20,
    },
    card:{
        marginVertical: 25,
        position: 'relative',
        flexDirection: 'row'
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -30,
        left: 10,
    },
    cardPrice:{
        paddingTop: 80,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#895537',
        textAlign: 'center',
        fontSize: 18
    },
    cardTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: 'black',
        paddingTop: 15,
        minWidth: 160,
        maxWidth: 160,
        textAlign: 'center'
    },
    quantity:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        // alignItems: 'center'
    },
    quantityBtn:{
        backgroundColor: '#E7AA3685',
        width: 25,
        height: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyText:{
        fontFamily: 'Poppins-Black',
        color: 'black',
        fontSize: 18,
    },
    containerTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10
    },
    textTotal:{
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: '#ADADAF'   
    },
    textPrice:{
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black'
    }
})
export default styles;