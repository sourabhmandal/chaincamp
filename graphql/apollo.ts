import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://guiding-gibbon-63.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret':
        '4tksilu7Qfr1vADt1M73am6nAWD9Uf9BT70yj3DGqrYyOsjKzQGyDCukNaJW9jFA'
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
