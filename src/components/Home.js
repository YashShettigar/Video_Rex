import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

export default () => {
    return (
        <ScrollView>
            <View 
                style={ styles.titleStyles }
            >
                <Text
                    style={ styles.titleText }
                >
                    Vid-Rex
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleStyles: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe346e',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    titleText: {
        width: 200,
        height: 90,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#000',
        textShadowRadius: 4,
        textShadowOffset: {
            width: 1,
            height: 1
        }
    }
})