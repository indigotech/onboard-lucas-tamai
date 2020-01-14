import { client } from "./ApolloClient";
import { gql } from "@apollo/client";
import { Alert, AsyncStorage } from "react-native";

export async function getUsers(offset:number){ 

    const token = await AsyncStorage.getItem("token")

    const query =  gql`
        query getUsers{
            Users(offset:${offset}){
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
    
function getContext(token:string){
    return {
        headers: {
          authorization: `${token}`,
        }
      }
}