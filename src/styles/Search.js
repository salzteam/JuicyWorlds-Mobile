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
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // justifyContent: 'center',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 25,
        paddingBottom: 120
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
        paddingTop: 90,
        // width: 116,
        lineHeight: 25,
        color: 'black'
    },
    priceFood: {
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        color: '#6A4029',
        textAlign: 'center'
    },
    input:{
        paddingLeft: 10,
        maxWidth: "80%"
    },
    inputContainer:{
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    boxInput:{
        backgroundColor: '#BABABA59',
        width: 170,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    filter: {
        backgroundColor: '#BABABA59',
        paddingHorizontal: 20,
        paddingBottom: 2,
        paddingTop: 5,
        borderRadius: 5,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        textAlign: 'center'
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
})

export default styles;