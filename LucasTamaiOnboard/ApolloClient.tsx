import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import LoginPage from './LoginScreen';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  })
}); 
