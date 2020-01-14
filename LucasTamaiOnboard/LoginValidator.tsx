import { gql } from '@apollo/client';
import { Navigation } from "react-native-navigation";
import UserListScreen from "./UserListScreen";
import {client} from "./ApolloClient";
import { Alert, AsyncStorage } from "react-native";

export async function doLogin(email:string,password:string): Promise<string>{ 
    
    const result = await client.mutate({ 
        mutation: gql`
        mutation Autenticate{
            Login(data: {
                email: "${email}",
                password: "${password}"
            } ){
            token
            }
        }  
    `})
    storeToken("token",result.data.Login.token)
    return(result.data.Login.token)
}
    
const storeToken = async (key:string, token:string) => {
    try{
        await AsyncStorage.setItem(key,token)        
    }
    catch(error){}

}
