import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Picker } from "react-native"
import { Navigation } from 'react-native-navigation'
import { getUser } from '../utils/getUsers';
import { Header } from '../atoms/h1';



interface Person{
    birthDate:string,
    cpf:string,
    email:string,
    name:string,
    role:string
}

export const UserDetails = (props) => {

    const [user,setUser] = React.useState<Person>()

    async function getUserData() {
        const data = await getUser(props.id)
        setUser(data)
    }

    useEffect(() => {
        getUserData()
      },[user])


    return(
        <View>
            <Header>User Details</Header>
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
    });