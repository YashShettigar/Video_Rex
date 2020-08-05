import React from "react"
import { View, StyleSheet } from "react-native";


export default () => {
    return (
        <View
            elevation={10}
            style={ styles.dialogContainer }
        >
            <Text style={ styles.warningStyles } >Registration Failed! Account already exists!</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    dialogContainer: {
        width: 200,
        height: 100,
        borderRadius: 20,
        alignItems: 'center'
    },
    warningStyles: {
        color: '#990308',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

})