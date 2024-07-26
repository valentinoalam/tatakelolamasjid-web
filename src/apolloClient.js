import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://your-graphql-endpoint.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the Apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
