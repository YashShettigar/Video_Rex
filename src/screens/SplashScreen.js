import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

// styles
import { styles } from "../styles/SplashScreenStyles"


export default ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('UIStateChecker')
        }, 2000)
    }, [])

    return (
        <ImageBackground
            style={ styles.pgStyles }
            source={ require('../resources/InitTitleBg.jpeg') }
        >
            <View 
                style={ styles.loadingContainerStyles }
            >
                <Text
                    style={ styles.titleText }
                >
                    Vid-Rex
                </Text>
                <ActivityIndicator
                    animating={true}
                    color='#f3c623'
                    size={ 70 }
                    
                />
            </View>
        </ImageBackground>       
    )
}