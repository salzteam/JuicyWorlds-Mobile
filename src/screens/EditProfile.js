import React,{useState, useEffect} from 'react';

import styles from '../styles/EditProfile';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '../image/User.png'
import DatePicker from 'react-native-date-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

import {
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
  } from 'react-native'; 

import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

function EditProfile() {
    const [checked, setChecked] = useState('female');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState()
    const [displayDate, setDisplay] = useState("December 21th 1998")

    const navigation = useNavigation();
    const profile = useSelector(state => state.profile.profile);
    const auth = useSelector(state => state.auth.userData);

  useEffect(()=>{
    if (profile.gender === "male") setChecked("male")
    if (profile.gender === "female") setChecked("female")
    setDisplay(profile.born)
  },[profile])

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

    let launchImageLibrarys = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setFile(response.assets);
          }
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
            <Pressable style={styles.conPencl} onPress={launchImageLibrarys}>
                <IconComunity name={"pencil"} style={styles.pencil}size={20}/>
            </Pressable>
        </View>
        <View style={styles.containerInput}>
            <Text style={styles.label}>Name :</Text>
            <TextInput placeholder={profile.displayName} style={styles.input}/>
        </View>
        <View style={styles.containerRadio}>
            <View style={styles.radio}>
                <Pressable style={checked === "female" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>setChecked("female")}>
                    <View style={checked === "female" ? styles.checkedInner : styles.unchekedInner}>
                    </View>
                </Pressable>
                <Text style={styles.checkedText}>Female</Text>
            </View>
            <View style={styles.radio}>
                <Pressable style={checked === "male" ? styles.checkedOuter : styles.unchekedOuter} onPress={()=>setChecked("male")}>
                    <View style={checked === "male" ? styles.checkedInner : styles.unchekedInner}>
                    </View>
                </Pressable>
                <Text style={styles.uncheckedText}>Male</Text>
            </View>
        </View>
        <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Email Adress :</Text>
            <TextInput placeholder={auth.email} style={styles.input}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Phone Number :</Text>
            <TextInput placeholder={profile.noTelp} style={styles.input}/>
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
            <TextInput placeholder={profile.adress} style={styles.input}/>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}>
            <View
                style={{
                marginTop: 10,
                marginBottom: 55,
                backgroundColor: "#6A4029",
                height: 70,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
                }}>
                <Text style={{color: "white", fontFamily: 'Poppins-Black', fontSize: 17}}>Save and Update</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default EditProfile