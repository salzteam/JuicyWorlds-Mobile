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
        marginRight: 60,
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
      buttonCtgSelect:{
        backgroundColor: '#6A4029',
        paddingVertical: 10,
        width: 135,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins-Bold',
        color: 'white'
      },
      buttonCtg:{
        backgroundColor: '#BABABA59',
        paddingVertical: 10,
        width: 135,
        textAlign: 'center',
        borderRadius: 15,
        fontFamily: 'Poppins-Bold',
        color: '#9F9F9F'
      }
})

export default styles;