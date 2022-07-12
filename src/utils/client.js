import {ApolloClient} from "@apollo/client"
import {InMemoryCache} from "@apollo/client/cache"

export const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${import.meta.env.REACT_APP_STEPZEN_API_KEY}`,
  },
  link: "http://localhost:5001/api/giggly-hummingbird/__graphql",
  cache: new InMemoryCache(),
})