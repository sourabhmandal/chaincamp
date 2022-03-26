import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getCookie } from 'cookies-next';
import jwtDecode from 'jwt-decode';

const httpLink = createHttpLink({
  uri: 'https://guiding-gibbon-63.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const access = getCookie('accessToken');
  //@ts-expect-error
  const { role } = jwtDecode(access?.toString()!);
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-Hasura-Role': role,
      authorization: access ? `Bearer ${access?.toString()}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
