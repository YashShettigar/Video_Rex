import React from 'react'
import auth from "@react-native-firebase/auth" 
// import firestore from '@react-native-firebase/firestore'

export const checkUser = (user) => {
    
}   

export const registerUser = (user, pass) => {
    auth().createUserWithEmailAndPassword(user.mail , pass)
    .then(() => {
        // firestore().collection('users').add({
        //     name: user.name,
        //     address: user.address,
        //     mob_no: user.mob,
        //     mail: user.mail,
        //     username: user.username,
        //     profile_pic: user.photoUrl
        // })
        // .then(() => console.log('User added!'))
        console.log('Account created!')
    })
    .catch(error => {
        console.log(error.code)
    })
}