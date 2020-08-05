import React from 'react'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    imgStyles: {
        width: '100%',
        height: '100%',
        borderBottomRightRadius: 50
    },
    formContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 60,
        flex: 1,
        alignSelf: 'stretch'
    },
    titleText: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingLeft: 30,
        paddingBottom: 20,
        justifyContent: 'flex-end'
    }, 
    signUpBtnStyles: {
        marginTop: 10,
        width: 140,
        height: 50,
        backgroundColor: '#01a9b4',
        borderRadius: 30
    },
    inputStyles: {
        width: 260, 
        height: 60, 
        marginBottom: 20,
        fontSize: 20
    },
    addressText: {
        width: 260, 
        marginBottom: 20,
        fontSize: 20
    },
    LoginField: {
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        marginVertical: 30
    },
    textStyles: {
        fontSize: 40, 
        color: '#fff', 
        fontWeight: '700',
        textShadowRadius: 5,
        textShadowColor: '#444',
        textShadowOffset: {
            width: 2,
            height: 1
        } 
    },
    choosePicBtnStyle: {
        width: 100,
        height: 45,
        backgroundColor: '#f54291',
        borderRadius: 10
    },
    picSelectContainerStyles: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})