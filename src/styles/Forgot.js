import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 65,
    textAlign: "center",
    lineHeight: 80
  },
  desc: {
    color: 'white',
    fontFamily: "Poppins-Reguler",
    fontSize: 14,
    textAlign: 'center',
    width: "60%",
    marginHorizontal: 63
   },
  innerFrame: {
    flex: 1, 
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, .5)', 
  },
  input: {
    color: "white",
    fontFamily: "Poppins-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginTop: 200,
    marginBottom: 30
  },
  recived: {
    color: 'white',
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 25,
  },
  inputCode:{
    fontFamily: "Poppins-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginTop: 200,
    color: 'white'
  },
  inputPassword:{
    fontFamily: "Poppins-Bold",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
    color: 'white'
  },
  iconEye:{
    color: 'white',
    position: 'relative',
    top: -43,
    right: -290
  }
});

export default styles;
