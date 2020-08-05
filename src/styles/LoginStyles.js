import React from 'react'
import { StyleSheet } from "react-native"

export 
const styles = StyleSheet.create({
    pgStyles: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    titleContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    imgStyles: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 50
    },
    btnStyles: {
        alignSelf: 'flex-start',
        width: 140,
        height: '25%'
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingTop: 60
    },
    btnContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    titleText: {
        width: '100%',
        height: '75%',
        paddingLeft: 30,
        paddingBottom: 20,
        justifyContent: 'flex-end'
    }, 
    loginBtnStyles: {
        marginTop: 10,
        width: 140,
        height: 50,
        backgroundColor: '#01a9b4',
        borderRadius: 30
    },
    inputStyles: {
        width: 280, 
        height: 60, 
        marginBottom: 20,
        fontSize: 20
    },
    navBtnStyles: { 
        fontSize: 20, 
        textShadowRadius: 5,
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 1, 
            height: 1
        }
    },
    textStyles: { 
        fontSize: 40, 
        color: '#fff', 
        fontWeight: 'bold',
        textShadowRadius: 5,
        textShadowColor: '#444',
        textShadowOffset: {
            width: 2,
            height: 1
        } 
    }
})