import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  continerSwipe: {
    height: 288,
    backgroundColor: '#6A4029',
    borderBottomRightRadius: 30,
    // borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageDrawer:{
    borderRadius: 150,
    width: 142,
    height: 152
  },
  username: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 17,
    paddingTop: 10
  },
  email: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 15
  },
  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    // alignItems: 'center',
  },
  containerLogout: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    paddingTop: 50,
    paddingRight: 20,
    alignItems: 'center'
  },
  imageBottom: {
    marginHorizontal: 15,
    fontSize: 22,
    color: '#6A4029'
  },
  textBottom: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#6A4029'
  },
  Icons: {
    fontSize: 30,
    marginHorizontal: 3
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
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
    borderRadius: 20,
    width: 100,
    marginHorizontal: 10,
    padding: 10,
    elevation: 2
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
    width: 200,
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center"
  },
  notif:{
    position: 'absolute',
    width:12,
    height: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    right: 0,
    top: 0
  },
  textNotif:{
    fontFamily: 'Poppins-Bold',
    fontSize: 8,
    color: 'white'
  }
});

export default styles;
