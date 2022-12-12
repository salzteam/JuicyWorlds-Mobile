import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
    },
    navbar: {
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icons: {
        marginRight: 75,
        color: '#6A4029',
        fontSize: 30
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: '#6A4029',
        fontSize: 20,
    },
    userinfo: {
        paddingTop: 10,
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 115,
        height: 115,
        borderRadius: 250
    },
    username: {
        paddingTop: 10,
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#6A4029'
    },
    descritption:{
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#6A4029'
    },
    conPencl:{
        backgroundColor:'#6A4029',
        width: 35,
        height: 35,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 125,
        top: 90
    },
    pencil:{
        color: 'white'
    },
    history:{
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#6A4029'
    },
    seemore:{
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#6A4029'
    },
    slider:{
        display: 'flex',
        flexDirection: 'row'
    },
    imageHistory:{
        width: 59,
        height: 64,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10
    },
    containerNavigation:{
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    button: {
        width: "100%",
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 20,
        // alignItems: 'center'
    },
    textButton:{
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#6A4029'
    },
    arrowButton:{
        fontSize: 30,
        color: '#6A4029'
    }
})

export default styles;