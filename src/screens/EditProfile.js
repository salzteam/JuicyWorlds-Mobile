import React,{useState, useEffect} from 'react';

import styles from '../styles/EditProfile';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '../image/User.png'
import DatePicker from 'react-native-date-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { Divider } from '@rneui/themed';

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
    ToastAndroid ,
    ActivityIndicator,
    Modal
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import userAction from '../redux/actions/user';

function EditProfile() {
    const [checked, setChecked] = useState('female');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState()
    const [displayDate, setDisplay] = useState()
    const [body,setBody] = useState()
    const [allow, setAllow] = useState(false)

    const [modal, setModalVisible] = useState(true)

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const profile = useSelector(state => state.profile.profile);
    const isLoading = useSelector(state => state.profile.isLoading);
    const auth = useSelector(state => state.auth.userData);

    const changeHandler = (text,name) => {
      setBody(body => ({ ...body, [name]: text }));
    }

    useEffect(()=>{
      setAllow(false)
      if (body || file || displayDate !== profile.born || checked !== profile.gender) setAllow(true)
    }, [body,file,displayDate,checked])

  useEffect(()=>{
    if (profile.gender === "male") setChecked("male")
    if (profile.gender === "female") setChecked("female")
    setDisplay(profile.born)
    setFile()
  },[profile])

  const saveHandler = () => {
    if (!allow) return
    const Success = () => {
        ToastAndroid.showWithGravityAndOffset(
            `Data changed successfully`,
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
        )
    }
    const Error = (error) => {
      ToastAndroid.showWithGravityAndOffset(
          `${error}`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50
      );
    }
    let bodys = new FormData();
    if (file) bodys.append("image",  {
      name: 'test.' + file[0]?.type?.substr(6),
      type: file[0]?.type,
      uri:
        Platform.OS !== 'android'
          ? 'file://' + file[0]?.uri
          : file[0]?.uri,
    });
    if (body?.display_name) bodys.append("display_name", body.display_name);
    if (body?.display_name) bodys.append("display_name", body.display_name);
    if (body?.adress) bodys.append("adress", body.adress);
    if (displayDate !== profile.born) bodys.append("date_of_birth", displayDate);
    if (checked !== profile.gender) bodys.append("gender", checked);
    dispatch(userAction.editProfileThunk(bodys, auth.token,Success,Error))
  }

    const selectFiles = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { 
              name: 'customOptionKey', 
              title: 'Choose file from Custom Option' 
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        showImagePicker(options, res => {
          console.log('Response = ', res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
          } else {
            let source = res;
            setFile(source);
          }
        });
      };

      let launchCameras = () => {
        let options = {
          storageOptions: {
            saveToPhotos: true,
            skipBackup: true,
            path: 'images',
          },
        };
        launchCamera(options, (response) => {
          console.log('Response = ', response);
          if (response.errorMessage) {
            console.log(response);
            return (ToastAndroid.showWithGravityAndOffset(
              `Do not have access to open the camera`,
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
              25,
              50
            ))
          }
            setFile(response.assets);
        });
    
      }

    let launchImageLibrarys = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
          if (response.errorMessage) {
            return (ToastAndroid.showWithGravityAndOffset(
              `Do not have access to open the library`,
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
              25,
              50
            ))
          }
          setFile(response.assets);
        });
      }

    return (
    <ScrollView style={styles.container}>
        <View style={styles.navbar}>
            <IconComunity name={"chevron-left"} size={20} style={styles.icons} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.titleNavbar}>Edit profile</Text>
        </View>
        <View style={styles.userinfo}>
            <Image source={file ? {uri: file[0].uri} : {uri: profile.image}} style={styles.image}/>
            <Pressable style={styles.conPencl} onPress={()=>setModalVisible(true)}>
                <IconComunity name={"pencil"} style={styles.pencil}size={20}/>
            </Pressable>
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.label}>Name :</Text>
            <TextInput placeholder={profile.displayName} style={styles.input} onChangeText={text =>changeHandler(text, "display_name")}/>
        </View>
        <View style={styles.containerRadio}>
            <View style={styles.radio}>
                <Pressable style={checked === "female" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>setChecked("female")}>
                    <View style={checked === "female" ? styles.checkedInner : styles.unchekedInner}>
                    </View>
                </Pressable>
                <Text style={checked === "female" ? styles.checkedText :styles.uncheckedText }>Female</Text>
            </View>
            <View style={styles.radio}>
                <Pressable style={checked === "male" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>setChecked("male")}>
                    <View style={checked === "male" ? styles.checkedInner : styles.unchekedInner}>
                    </View>
                </Pressable>
                <Text style={checked === "male" ? styles.checkedText :styles.uncheckedText }>Male</Text>
            </View>
        </View>
        <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Email Adress :</Text>
            <TextInput placeholder={auth.email} style={styles.input} placeholderTextColor='black' editable={false} selectTextOnFocus={false}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Phone Number :</Text>
            <TextInput placeholder={profile.noTelp} style={styles.input} placeholderTextColor='black' editable={false} selectTextOnFocus={false}/>
        </View>
        <Pressable style={{marginBottom: 15}}>
            <Text style={styles.label}>Date of Birth :</Text>
            <Pressable style={styles.input}> 
                <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row'}}>
                    <Text style={displayDate === profile.born ? styles.berubah : styles.tanggal}>{displayDate}</Text>
                    <IconComunity name={"calendar-range"} style={{paddingTop: 15}} size={20} onPress={()=>{setOpen(true)}}/>
                </View>
            </Pressable>
            <DatePicker
                modal
                open={open}
                date={date}
                mode={"date"}
                onConfirm={(date) => {
                setOpen(false)
                let dd = String(date.getDate()).padStart(2, "0");
                let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
                let yyyy = date.getFullYear();
                const time = `${dd}/${mm}/${yyyy}`
                setDate(date)
                setDisplay(time)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </Pressable>
        <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Delivery Adress :</Text>
            <TextInput placeholder={profile.adress} style={styles.input} onChangeText={text =>changeHandler(text, "adress")}/>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveHandler}>
            <View
                style={{
                marginTop: 10,
                marginBottom: 55,
                backgroundColor: allow ? "#6A4029" : "#9F9F9F",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                {isLoading?<ActivityIndicator size='large' color='white' /> :<Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Save and Update</Text>}
            </View>
        </TouchableOpacity>
        <Modal
            visible={modal}
            transparent={true}
            onRequestClose={() => {
            setModalVisible();
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{justifyContent: 'flex-end', position: 'absolute', right: 15, top: 15}}>
                  <IconComunity name='window-close' size={25} onPress={()=>setModalVisible(!modal)}/>
              </View>
              <Pressable style={{marginTop: 20,marginBottom: 15 ,padding: 10, backgroundColor: '#DCDCDC'}} onPress={()=>{
                launchCameras()
                setModalVisible(!modal)
              }}>
                <Text style={{fontFamily: 'Poppins-Black', color: '#868686', fontSize: 17, textAlign: 'center'}}>OPEN CAMERA</Text>
              </Pressable>
              <Pressable style={{padding: 10,backgroundColor: '#DCDCDC'}} onPress={()=>{
                launchImageLibrarys()
                setModalVisible(!modal)
              }}>
                <Text style={{fontFamily: 'Poppins-Black', color: '#868686', fontSize: 17, textAlign: 'center'}}>OPEN IMAGE LIBRARY</Text>
              </Pressable>
            </View>
            </View>
        </Modal>
    </ScrollView>
  )
}

export default EditProfile