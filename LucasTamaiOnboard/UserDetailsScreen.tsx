import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Picker } from "react-native"
import { Navigation } from 'react-native-navigation'
import {validateEmail, validateCPF, validateBirth,validateName, validatePassword} from './LocalUserValidator'
import {createUser} from './addUser'
import { getUser } from './getUserDetails';



interface person{
    birthDate:string,
    cpf:string,
    email:string,
    name:string,
    role:string
}

export const UserDetails = (props) => {

    const [user,setUser] = React.useState<person>()

    async function getUserData() {
        const data = await getUser(props.id)
        setUser(data)
    }

    useEffect(() => {
        getUserData()
      },[user])


    return(
        <View>
            <Text style={styles.Header}>User Details:</Text>
            {user &&
            <>
            <Text style={styles.title}>Name: {user.name}</Text>
            <Text style={styles.title}>CPF: {user.cpf}</Text>
            <Text style={styles.title}>Email: {user.email}</Text>
            <Text style={styles.title}>Role: {user.role}</Text>
            <Text style={styles.title}>Birth: {user.birthDate}</Text>
            </>
        }  
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 8,
      },
      Header:{
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        margin: 30    
     },
    });