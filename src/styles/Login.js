import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 65,
    textAlign: "left"
  },
  innerFrame: {
    flex: 1, 
    justifyContent: 'space-around',
    padding: 20
    // backgroundColor: 'rgba(0, 0, 0, .5)', 
  },
  input: {
    color: "white",
    fontFamily: "Poppins-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  forgot: {
    marginTop: 20,
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "white"
  },
  divider: {
    color: "white",
    textAlign: 'center',
    fontFamily: "Poppins-Bold",
    fontSize: 14
  },
  iconEye:{
    color: 'white',
    position: 'absolute',
    top: 260,
    right: 15
  }
});

export default styles;
