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
  conPencl:{
      backgroundColor:'#6A4029',
      width: 35,
      height: 35,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: 40,
      top: 180
  },
  conAdd:{
      backgroundColor:'#6A4029',
      width: 35,
      height: 35,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      // right: 40,
      left: 30,
      bottom: 25
      // top: 180
  },
  addModal:{
      backgroundColor:'#6A4029',
      width: 35,
      height: 35,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20
      // position: 'relative',
      // right: 40,
      // left: 30,
      // bottom: 25
      // top: 180
  },
  pencil:{
      color: 'white'
  },
  add:{
      color: 'white',
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
    width: "80%",
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
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
    // bottom: 0
    // justifyContent: 'flex-end',
    paddingLeft: 50,
    paddingBottom: 25,
    flexDirection: 'row'
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
  button: {
    backgroundColor: '#FFBA33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5
  },
  buttonClose: {
    backgroundColor: "#6A4029",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontFamily:'Poppins-Bold',
    color: '#6A4029',
    textAlign: "center",
    fontSize: 12
  },
});

export default styles;
