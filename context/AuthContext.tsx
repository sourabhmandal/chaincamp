import { Cookies, useCookies } from 'react-cookie';
import React, { FC, ReactNode } from 'react';
import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

interface State {}

export interface AuthContextValue {
  authcookies: { accessToken?: string; refreshToken?: string };
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  authcookies: {
    accessToken: '',
    refreshToken: ''
  },
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = props => {
  const { children } = props;
  const router = useRouter();
  const [authcookies, setAuthCookie, removeAuthCookie] = useCookies([
    'accessToken',
    'refreshToken'
  ]);

  useEffect(() => {
    if (authcookies.refreshToken && authcookies.refreshToken)
      router.push('/dashboard');
  }, []);

  const login = async (
    accessToken: string,
    refreshToken: string
  ): Promise<void> => {
    setAuthCookie('accessToken', accessToken, {
      httpOnly: false,
      maxAge: 3600
    });
    setAuthCookie('refreshToken', refreshToken, {
      httpOnly: false,
      maxAge: 3600
    });
  };

  const logout = async (): Promise<void> => {
    // Request server to logout user profile and remove its session
    removeAuthCookie('accessToken');
    removeAuthCookie('refreshToken');
  };

  const refresh = async (): Promise<void> => {
    // refresh api call
    const accessToken = '';
    const refreshToken = '';
    setAuthCookie('accessToken', accessToken);
    setAuthCookie('refreshToken', refreshToken);
  };

  return (
    <AuthContext.Provider
      value={{
        authcookies,
        login,
        logout,
        refresh
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthConsumer = AuthContext.Consumer;
