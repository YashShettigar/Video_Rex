import React, { useState } from "react"
import { View, StyleSheet, Image, Text, ScrollView } from "react-native"
import { FAB, TextInput, Avatar } from "react-native-paper"
import ImagePicker from "react-native-image-picker"
import { requestMultiple, PERMISSIONS } from "react-native-permissions";

// styles
import { styles } from "../styles/SignUpStyles"

// auth
import { registerUser } from "../backend/Auth";

// image uploader
import { uploadImage } from "../backend/ImageUploader";

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'profile'
    },
    takePhotoButtonTitle: 'Take Photo',
    cancelButtonTitle: 'Cancel',
    chooseFromLibraryButtonTitle: 'Choose from device',
    mediaType: 'photo'
}

const user = {
    name: '',
    mob: '',
    address: '',
    mail: '',
    username: '',
    photoUrl: ''
}

export default ({ navigation }) => {
    const [ avatarUri, setAvatarUri ] = useState(require('../resources/no-image-here.jpg'))
    const [ permission, setPermission ] = useState('Denied')
    const [ imgUri, setImgUri ] = useState('../resources/no-image-here.jpg')
    const [ pass, setPass ] = useState('')

    requestMultiple([ PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MEDIA_LIBRARY, PERMISSIONS.IOS.PHOTO_LIBRARY ])
    .then(statuses => {
        if (statuses[PERMISSIONS.ANDROID.CAMERA] && statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] && statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]) {
            setPermission('Granted')
        }
        if (statuses[PERMISSIONS.IOS.CAMERA] && statuses[PERMISSIONS.IOS.MEDIA_LIBRARY] && statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]){
            setPermission('Granted')
        }
    })

    return (
        <ScrollView>
            <View style={ styles.titleContainer }>
                <Image
                    style={ styles.imgStyles }
                    source={ require('../resources/InitTitleBg.jpeg') }
                />
                <View style={ styles.titleText }>
                    <Text style={ styles.textStyles }>Register</Text>
                </View>
            </View>
            <View style={ styles.formContainer }>
                <TextInput
                    label="Full Name*"
                    style={ styles.inputStyles }
                    onChangeText={val => user.name=val}
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                />
                <TextInput 
                    label='Mobile Number*'
                    onChangeText={val => user.mob=val}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                />
                <TextInput 
                    label='Address*'
                    onChangeText={val => user.address=val}
                    style={ styles.addressText }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                    multiline={true}
                    numberOfLines={3}
                />
                <TextInput 
                    label='Email*'
                    onChangeText={val => user.mail=val}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                />
                <TextInput 
                    label='Username*'
                    onChangeText={val => user.username=val}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                />
                <TextInput 
                    label='Password*'
                    onChangeText={val => setPass(val)}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                    secureTextEntry={true}
                />
                <View
                    style={ styles.picSelectContainerStyles }
                >
                    <Avatar.Image
                        style={{ borderWidth: 2, borderColor: '#999', marginRight: 35 }}
                        size={70}
                        source={ avatarUri }
                    />
                    <FAB 
                        label='Avatar'
                        style={ styles.choosePicBtnStyle }
                        onPress={() => {
                            if (permission === 'Granted'){
                                ImagePicker.showImagePicker(options, (res) => {
                                    if (res.uri){
                                        setAvatarUri({ uri: res.uri })
                                        setImgUri(res.path)
                                    }
                                })
                            }
                        }}
                        color='#fff'
                    />
                </View>
                <FAB
                    style={ styles.signUpBtnStyles }s
                    color='#fff'
                    label='Register'
                    onPress={() => { 
                        user.photoUrl = uploadImage(imgUri, user.username)
                        registerUser(user, pass)
                        navigation.replace('Home')
                    }}
                />
                <View 
                    style={styles.LoginField}
                >
                    <Text
                        style={{ fontSize: 16, color: '#bbbbbb', alignSelf: 'center' }}
                    >
                        Already have an account?
                    </Text>
                    <Text
                        style={{ fontSize: 18, color: '#f54291', textDecorationLine: 'underline', alignSelf: 'center' }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login here.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}