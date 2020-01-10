import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import {validateLogin, doLogin} from "./LoginValidator"
import { Navigation } from 'react-native-navigation'



export default class UserListScreen extends Component<{}> {
    constructor(props){
        super(props)
        Navigation.events().bindComponent(this);   
    }
    render(){
        return(
            <View>
                <Text>
                    Lista de usuarios
                </Text>

            </View>
            )
    }
}
