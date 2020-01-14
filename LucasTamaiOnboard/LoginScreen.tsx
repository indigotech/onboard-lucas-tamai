//Login Screen from STEP 3/9 
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import { doLogin } from "./LoginValidator"
import { Navigation } from 'react-native-navigation'
import {validateLogin} from './LocalUserValidator'

interface LoginPageState {
    email: string;
    password: string;
    loading: boolean 
  }

export default class LoginPage extends Component<{}, LoginPageState> {
    constructor(props){
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            email: "",
            password: "",
            loading: false

        }
    }
    
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.Header}> Bem vindo(a) à Taqtile </Text>
                <Text style={Styles.inputHeader}>E-mail</Text>
                <TextInput style={Styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}

                />
                <Text style={Styles.inputHeader}>Senha</Text>
                <TextInput style = {Styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
                />
                <TouchableOpacity 
                    style = {validateLogin(this.state.email, this.state.password) ? Styles.enabledSubmitButton : Styles.disabledSubmitButton}
                    disabled = {!validateLogin(this.state.email, this.state.password)}
                    onPress = {this.handlePressButton}
                >
                <Text style={Styles.submitButtonText}>Entrar</Text>
                </TouchableOpacity>
                <ActivityIndicator color="#0000ff"
                    animating = {this.state.loading}/>
            </View>
        )
    }

    private handleEmail = (email:string) => {
        this.setState({ email: email })
    }

    private handlePassword = (password:string) => {
        this.setState({ password: password })
    }

    private handlePressButton = async () => {
        this.setState({ loading: true })
        try{
            await doLogin(this.state.email,this.state.password)
            this.changePage()
        }
        catch(error){
            Alert.alert(error.message)
        }
        this.setState({ loading: false })

    }

    private changePage(){
        Navigation.setRoot({root:  {
            stack:{
                id: "stackMain",
                children:[
                    {
                        component: {
                            name: "UserListScreen"
                        }
                    }]
                 }}}
                )
    }

}


const Styles = StyleSheet.create({ 
    container: {
    paddingTop: 23,
 },
 Header:{
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 30    
 },
 inputHeader:{
    fontSize: 12,
    textAlign: "left",
    marginLeft: 15
 },
 input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 6
 },
 enabledSubmitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginTop: 40,
    marginBottom: 15,
    marginHorizontal: 15,
    height: 40,    
    borderRadius: 6,
 },
 disabledSubmitButton:{
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginTop: 40,
    marginBottom: 15,
    marginHorizontal: 15,
    height: 40,    
    borderRadius: 6,
 },
 submitButtonText:{
    color: 'white',
    textAlign: "center",
 }
})

