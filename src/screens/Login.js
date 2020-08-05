import React, { useState } from 'react'
import { View, Image, Text } from "react-native"
import { Button, FAB, TextInput } from "react-native-paper"

// styles
import { styles } from "../styles/LoginStyles"

export default ({ navigation }) => {
    const [ user, setUser ] = useState('')
    const [ pass, setPass ] = useState('')

    return (
        <View style={ styles.pgStyles }>
            <View style={ styles.titleContainer }>
                <Image
                    style={ styles.imgStyles }
                    source={ require('../resources/InitTitleBg.jpeg') }
                />
                <View style={ styles.btnContainer }>
                    <Button 
                        mode='text'
                        style={ styles.btnStyles }
                        icon='chevron-left-circle-outline'
                        color='#fff'
                        compact={true}
                        uppercase={false}
                        labelStyle={ styles.navBtnStyles}
                        onPress={() => navigation.goBack()}
                    >
                        Register
                    </Button>
                    <View style={ styles.titleText }>
                        <Text style={ styles.textStyles }>Login</Text>
                    </View>
                </View>
            </View>
            <View style={ styles.formContainer }>
                <TextInput
                    label="Username"
                    value={user}
                    onChangeText={text => setUser(text)}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                />
                <TextInput 
                    label='Password'
                    value={pass}
                    onChangeText={pass => setPass(pass)}
                    style={ styles.inputStyles }
                    underlineColor='#f54291'
                    selectionColor='#f54291'
                    secureTextEntry={true}
                />
                <FAB
                    style={ styles.loginBtnStyles }
                    color='#fff'
                    label='Login'
                    onPress={() => navigation.replace('Home')}
                />
            </View>
        </View>
    )
}