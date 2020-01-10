import React, { Component } from "react"
import { gql } from '@apollo/client';
import { Navigation } from "react-native-navigation";
import UserListScreen from "./UserListScreen";
import {client} from "./ApolloClient";

export function validateLogin(email:string, password:string) {
    const expressionEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const expressionPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (expressionEmail.test(email.toLowerCase()) && expressionPassword.test(password.toLowerCase())) {
        return(true)
    }
    else {
        return(false)
    }
}

export function doLogin(email:string,password:string){
    client.mutate({ 
        mutation: gql`
        mutation Autenticate{
            Login(data: {
                email: "${email}",
                password: "${password}"
            } ){
            token
            }
        }  
    `}).then(result => {
        storeToken(result)
        changePage()
    }).catch(error => alert(error))
}

export function storeToken(result:any){
    const Token = JSON.stringify(result.data.Login.token);
    
}

function changePage(){
    Navigation.setRoot({root: {component: {name: "UserListScreen"} } })
}