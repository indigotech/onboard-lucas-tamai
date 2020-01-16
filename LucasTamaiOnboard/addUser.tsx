import { gql } from '@apollo/client';
import {client} from "./ApolloClient";

export async function createUser(email:string,password:string,role:string,birth:string,name:string,CPF:string): Promise<string> { 

        const result = await client.mutate({ 
        mutation: gql`
        mutation AddUser {
            UserCreate(data: {
                name: "${name}",
                email: "${email}",
                cpf: "${CPF}",
                birthDate: "${birth}",
                password: "${password}",
                role: ${role}
            } ) {
                name
            }
          }
        `})
        return(result.data)
    
}