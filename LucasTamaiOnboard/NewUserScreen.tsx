import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Picker } from "react-native"
import { Navigation } from 'react-native-navigation'
import {validateEmail, validateCPF, validateBirth,validateName, validatePassword} from './LocalUserValidator'
import {createUser} from './addUser'

export const NewUserScreen = () => {

    const [name,setName] = React.useState("")
    const [birth,setBirth] = React.useState()
    const [CPF, setCPF] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [role,setRole] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [loading, setLoading] = React.useState(false)


    function validateForm(){
        //TODO separar e tratar cada um individualmente
        return(validateBirth(birth) && validateCPF(CPF) && validateEmail(email) && validateName(name) && validatePassword(password))
    }


    const handleEmail = (email:string) => {
        setEmail(email)
    }

    const handleCPF = (CPF:string) => {
        setCPF(CPF)
    }

    const handleRole = (role:string) => {
        setRole(role)
    }

    const handleName = (name:string) => {
        setName(name)
    }

    const handleBirth = (birth:string) => {
        setBirth(birth)

    }

    const handlePassword = (password:string) => {
        setPassword(password)
    }

    const handlePressButton = async () => {
        setLoading(true)
        try{
            await createUser(email,password,role,birth,name,CPF)
            changePage()
        }
        catch(error){
            Alert.alert(error.message)
        }
        setLoading(false)

    }

    function changePage(){
        Navigation.pop("stackMain")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Header}>New User</Text>
            <Text style={styles.inputHeader}>Name:</Text>
            <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {handleName}
            />
            <Text style={styles.inputHeader}>CPF:</Text>
            <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "CPF"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {handleCPF}
            />
            <Text style={styles.inputHeader}>Birth date:</Text>
            <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                placeholder = "YYYY-MM-DD"
                onChangeText = {handleBirth}
            />
            <Text style={styles.inputHeader}>Email:</Text>
            <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {handleEmail}
            />
            <Text style={styles.inputHeader}>Password:</Text>
            <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {handlePassword}
            />
            <Text style={styles.inputHeader}>Role:</Text>
            <Picker
                selectedValue={role}
                onValueChange={handleRole}
                style = {styles.picker}

                >
                <Picker.Item label="User" value="user" />
                <Picker.Item label="Admin" value="admin" />
            </Picker>
            <TouchableOpacity 
                style={validateForm() ? styles.enabledSubmitButton : styles.disabledSubmitButton}
                disabled={!validateForm()}
                onPress={handlePressButton}
                >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>



        </View>
        )
}

const styles = StyleSheet.create({ 
    container: {
    paddingTop: 18,
 },
 Header:{
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 20    
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
 picker:{
    height: "auto"
 },
 enabledSubmitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginTop: 0,
    marginBottom: 15,
    marginHorizontal: 15,
    height: 40,    
    borderRadius: 6,
 },
 disabledSubmitButton:{
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginTop: 0,
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