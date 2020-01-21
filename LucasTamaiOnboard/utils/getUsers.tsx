import { client } from "./ApolloClient";
import { gql } from "@apollo/client";
import { Alert, AsyncStorage } from "react-native";

export async function getUsers(offset:number,limit:number){ 

    const token = await AsyncStorage.getItem("token")

    const query =  gql`
        query getUsers{
            Users(offset:${offset},limit: ${limit}){
            nodes{
                id,
                name,
                email,   
            }
            } 
        }  
        `

    if(token){
        const context = getContext(token)
        const result = await client.query({query:query, context:context})
        return(result.data.Users.nodes)

    }
}

export async function getUser(id:number){ 

    const token = await AsyncStorage.getItem("token")

    const query =  gql`
    query getUser{
        User(id: ${id}){
          name,
          cpf,
          birthDate,
          email,
          role
        }
      }  
        `

    if(token){
        const context = getContext(token)
        const result = await client.query({query:query, context:context})
        return(result.data.User)

    }
}
    
function getContext(token:string){
    return {
        headers: {
          authorization: `${token}`,
        }
      }
}