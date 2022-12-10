import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 34,
    color: 'black'
  },
  container:{
    paddingLeft: 20,
  },
  category:{
    fontFamily: "Poppins-Bold",
    color: "#6A4029",
    fontSize: 17,
    paddingTop: 5
  },
  card: {
    marginTop: 50,
    position: 'relative',
    backgroundColor: 'white',
    width: 220,
    height: 270,
    shadowColor: "#3939391A",
    elevation: 1,
    borderRadius: 30,
    marginHorizontal: 20
  },
  imageCard: {
    width: 168,
    height: 189,
    borderRadius: 20
  },
  containerImage:{
    position: "relative",
    left: 25,
    top:-35 
  },
  containerTitle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    width: "50%",
    lineHeight: 22.29
  },
  cardPrice: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: "#6A4029"
  },
  see: {
    textAlign: 'right',
    paddingRight: 25,
    fontFamily: 'Poppins-Reguler',
    fontSize: 15,
    color: '#6A4029'
  }
});

export default styles;
