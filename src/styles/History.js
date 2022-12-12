import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
    },
    icons: {
        marginRight: 75,
        color: 'black',
        fontSize: 30
    },
    title:{
        fontFamily: 'Poppins-Black',
        fontSize: 34,
        color: 'black',
        paddingTop: 30
    },
    swipe: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
    swipeText: {
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        color:'black',
        fontSize: 10
    },
    // card:{
    //     padding: 15,
    // },
    imageCard:{
        width: 80,
        height: 80,
        borderRadius: 50
    },
    cardTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        color: 'black'
    },
    cardPrice:{
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: '#895537'
    },
    cardStatus:{
        width: "100%",
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#895537'
    },
    trash:{
        backgroundColor: '#6A4029',
        width: 55,
        height: 55,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position:'relative',
        // right:20,
        // top: 30
    },
    iconTrash:{
        color: 'white'
    }
})

export default styles;