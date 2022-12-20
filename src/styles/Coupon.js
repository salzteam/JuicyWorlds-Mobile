import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
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
    swipe: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    }
})

export default styles;