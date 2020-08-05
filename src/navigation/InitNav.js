import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

// screens
import SplashScreen  from '../screens/SplashScreen'
import HomeScreen from "../screens/HomeScreen"
import UserState from '../backend/UserState'

const Stack = createStackNavigator()

export const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen"
                headerMode='none'
            >
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                />
                <Stack.Screen 
                    name="UIStateChecker"
                    component={UserState}
                />
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}