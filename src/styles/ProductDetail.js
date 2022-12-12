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
        paddingTop: 180,
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
    selected:{
        backgroundColor: "#6A4029",
        marginHorizontal: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    selectedText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: 'white'
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonModal: {
        borderRadius: 20,
        width: 100,
        marginHorizontal: 15,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "#6A4029",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        fontFamily:'Poppins-SemiBold',
        // width: 200,
        color: 'black',
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center"
      },
      notif:{
        position: 'absolute',
        width:12,
        height: 12,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        right: 25,
        top: 35
      },
      textNotif:{
        fontFamily: 'Poppins-Bold',
        fontSize: 8,
      }
})

export default styles;