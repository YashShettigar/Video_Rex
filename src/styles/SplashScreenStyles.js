import React from 'react'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pgStyles: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainerStyles: {
        width: 200,
        height: 200,
        alignItems: "center"
    },
    titleText: {
        color: '#fff',
        textShadowColor: '#000',
        fontSize: 55,
        textShadowRadius: 5,
        textShadowOffset: {
            width: 1,
            height: 1
        },
        marginBottom: 20,
        fontWeight: 'bold'
    }
})