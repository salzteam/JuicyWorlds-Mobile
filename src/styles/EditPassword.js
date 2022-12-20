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
        alignItems: 'center'
    },
    icons: {
        marginRight: 55,
        color: 'black',
        fontSize: 30
    },
    titleNavbar:{
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 20,
    },
    input:{
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 2
    },
    label:{
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#9F9F9F'
    },
    iconEye:{
        position: 'absolute',
        top: 40,
        right: 5
    }
})

export default styles;