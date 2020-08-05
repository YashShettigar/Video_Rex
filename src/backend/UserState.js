import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import HomeScreen from "../screens/HomeScreen"
import { createStackNavigator } from "@react-navigation/stack"

// screens
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export default () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, [])

    if (initializing) { 
        console.log('Initializing....')
        return null
    }

    if (!user) {
        return (
            <Stack.Navigator
                initialRouteName=''
                headerMode='none'
            >
                <Stack.Screen 
                    name='Register'
                    component={SignUp}
                />
                <Stack.Screen 
                    name='Login'
                    component={Login}
                />
            </Stack.Navigator>
        )
    }

    return (
        <HomeScreen user={user.email} /> 
    )
}