import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    fontSize: 65,
    textAlign: "center",
    paddingBottom: 360
  },
  innerFrame: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, .5)', 
  },
  input: {
    color: "white",
    fontFamily: "Poppins-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  iconEye:{
    color: 'white',
    position: 'absolute',
    top: 66,
    right: 10
  }
});

export default styles;
