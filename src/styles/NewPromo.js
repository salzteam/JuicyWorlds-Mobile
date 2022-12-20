import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
        padding: 30,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    icons: {
        marginRight: 65,
        color: 'black',
        fontSize: 30
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 20,
    },
    icon: {
        backgroundColor: '#6A4029',
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productName: {
        fontFamily: 'Poppins-Black',
        fontSize: 28,
        textAlign: 'center',
        color: 'black',
        lineHeight: 30,
        // width: "80%"
    },
    price:{
        color: '#6A4029',
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        marginTop: -15
    },
    title:{
        fontFamily: 'Poppins-Black',
        fontSize: 17,
        color: 'black'
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
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        width: 100,
        marginHorizontal: 10,
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
        fontFamily:'Poppins-Bold',
        width: 200,
        color: 'black',
        fontSize: 25,
        marginBottom: 15,
        textAlign: "center"
      },
      notif:{
        position: 'absolute',
        width:12,
        height: 12,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        right: 0,
        top: 0
      },
      textNotif:{
        fontFamily: 'Poppins-Bold',
        fontSize: 8,
        color: 'white'
      },
      input:{
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalView: {
        minWidth: 330,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 10,
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
      titleFilter: {
        fontFamily: 'Poppins-Bold',
        color: 'black',
      },
      buttonFilter: {
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#6A4029',
        color: 'white',
        paddingTop: 5,
        paddingBottom: 3,
        paddingHorizontal: 10, 
        borderRadius: 5,
        fontFamily: 'Poppins-Bold'
      },
      button: {
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#BABABA59',
        color: '#9F9F9F',
        paddingTop: 5,
        paddingBottom: 3,
        paddingHorizontal: 10, 
        borderRadius: 5,
        fontFamily: 'Poppins-Bold'
      },
      containerCard :{
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // paddingLeft: 4,
        // paddingRight: 4,
        // paddingTop: 25,
        // paddingBottom: 120
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowColor: "#3939391A",
        elevation: 1,
        width: 136,
        height: 212.41,
        borderRadius: 30,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 30
    },
    imgProduct:{
        width: 125,
        height: 125,
        borderRadius: 250,
        position: 'absolute',
        top: -30
    },
    titleFood: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 90,
        // width: 116,
        lineHeight: 25,
        color: 'black'
    },
    priceFood: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#6A4029',
        textAlign: 'center'
    },
    iconDelete:{
      backgroundColor: '#6A4029',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      position: 'absolute',
      right: 0
  }
})

export default styles;