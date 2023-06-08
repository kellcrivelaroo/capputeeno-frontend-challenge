// import { ApolloClient, InMemoryCache } from '@apollo/client'

// export const client = new ApolloClient({
//   uri: 'http://localhost:3333/',
//   cache: new InMemoryCache(),
// })

import { ApolloClient, InMemoryCache } from '@apollo/client'

const secretKey = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string

export const client = new ApolloClient({
  uri: 'https://evolved-crane-27.hasura.app/v1/graphql',
  headers: {
    'Content-Type': 'application/json',
    'X-Hasura-Admin-Secret': secretKey,
  },
  cache: new InMemoryCache(),
})
