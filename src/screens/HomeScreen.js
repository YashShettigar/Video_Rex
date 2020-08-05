import React, { useState } from 'react'
import { BottomNavigation } from "react-native-paper"

// screen components
import Home from '../components/Home'
import Profile from '../components/Profile'

export default (props) => {
    const [ index, setIndex ] = useState(0)
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#fcbf1e' },
        { key: 'profile', title: 'Profile', icon: 'account', color: '#127681' }
    ])

    const ProfileScreen = (props) => <Profile {...props} />

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        profile: ProfileScreen
    })

    return (
        <BottomNavigation 
            shifting={true}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            sceneAnimationEnabled={true}
        />
    )
}