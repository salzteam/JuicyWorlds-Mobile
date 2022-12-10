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
    // paddingBottom: 360
  },
  innerFrame: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, .5)', 
  },
  textsmall: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    textAlign: 'center',
    width: 282
  }
});

export default styles;
