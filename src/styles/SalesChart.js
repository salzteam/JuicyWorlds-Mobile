import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: "#F2F2F2",
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
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
})

export default styles;