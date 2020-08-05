import React from 'react'
import { utils } from '@react-native-firebase/app'
import storage, { firebase } from "@react-native-firebase/storage"

export const uploadImage = async (imgUrl, username) => {

    const img = imgUrl.split('/')
    const fileName = img[img.length-1]    
    
    const ref = firebase.storage().ref('images/'+username+fileName)
    await ref.putFile(imgUrl)
    const imgUri = await storage().ref('images/'+username+fileName).getDownloadURL()
    return username+imgUri
}
