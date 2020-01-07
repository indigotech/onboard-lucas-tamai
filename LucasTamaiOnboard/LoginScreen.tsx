//Login Screen from STEP 3/9 
import React, {Component} from "react"
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"



export default class Login extends Component{
    state = {
        email: '',
        password: ''
     }

     handleEmail = (text:String) => {
        this.setState({ email: text })
     }

     handlePassword = (text) => {
        this.setState({ password: text })
     }

    validateLogin = (email:String, password:String) => {
        const expressionEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        const expressionPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
        if(expressionEmail.test(email.toLowerCase()) && expressionPassword.test(password.toLowerCase())){
            return(alert("Login efetuado"))
        }
        else return(alert("Erro ao logar"))
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
                    style = {Styles.submitButton}
                    onPress = {() => this.validateLogin(this.state.email, this.state.password)}
                    >
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



