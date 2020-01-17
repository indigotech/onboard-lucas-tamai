//Login Screen from STEP 3/9 
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import { doLogin } from "./LoginValidator"
import { Navigation } from 'react-native-navigation'
import {validateEmail,validatePassword} from './LocalUserValidator'
import {SubmitButton} from './atoms/atm.buttons/submitButtonStyle'
import { Header } from './atoms/h1';
import { InputForm } from './atoms/atm.form/form.component';


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
                <Header> Bem vindo(a) à Taqtile </Header>
                <InputForm
                    title = "Email:"
                    caption = ""
                    placeholder = "Email"
                    onChangeText = {this.handleEmail}
                />
                <InputForm
                    title = "Senha: "
                    caption = ""
                    placeholder = "senha"
                    onChangeText = {this.handlePassword}
                />
                <SubmitButton
                    disabled = {!this.validateLogin()}
                    onPress = {this.handlePressButton}
                >
                <Text style={Styles.submitButtonText}>Entrar</Text>
                </SubmitButton>
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

    private validateLogin(){
        return(validateEmail(this.state.email) && validatePassword(this.state.password))
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

