import { ApolloClient, InMemoryCache } from '@apollo/client'
console.log('url', process.env.EXPO_PUBLIC_API_URL)
const client = new ApolloClient({
  uri: `${process.env.EXPO_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache(),
})

export default client
