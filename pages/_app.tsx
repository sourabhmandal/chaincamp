import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@primer/react';
import { AuthProvider } from '../context/AuthContext';
import { client } from '../graphql/apollo';
import { baseTheme } from '../themes/base';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={baseTheme}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </CookiesProvider>
  );
}

export default MyApp
