//Login Screen from STEP 3/9 
import React, {Component} from "react"
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"



export default class Login extends Component{
    state = {
        email: '',
        password: ''
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
                />

                <Text style={Styles.inputHeader}>Senha</Text>
                <TextInput style = {Styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                />

                <TouchableOpacity 
                    style = {Styles.submitButton}>
                    <Text style={Styles.submitButtonText}>Entrar</Text>
                </TouchableOpacity>


            </View>
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
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginTop: 40,
    marginBottom: 15,
    marginHorizontal: 15,
    height: 40,    
    borderRadius: 6


 },
 submitButtonText:{
    color: 'white',
    textAlign: "center",
 }
})



