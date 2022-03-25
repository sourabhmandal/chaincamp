import { checkCookies, setCookies, removeCookies } from 'cookies-next';
import React, { FC, ReactNode, useState } from 'react';
import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, useRouter } from 'next/router';
import { frontendRoute } from '../constants/routes';

export interface AuthContextValue {
  isAuthenticated: boolean;
  accessToken?: string;
  refreshToken?: string;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = props => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const accessToken = checkCookies('accessToken');
    const refreshToken = checkCookies('refreshToken');
    if (accessToken && refreshToken) {
      console.log('AUTH CONTEXT', 'is Authenticated');
      router.push(frontendRoute.DASHBOARD);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (
    accessToken: string,
    refreshToken: string
  ): Promise<void> => {
    setCookies('accessToken', accessToken, {
      httpOnly: false,
      maxAge: 3600
    });
    setCookies('refreshToken', refreshToken, {
      httpOnly: false,
      maxAge: 3600
    });
    setIsAuthenticated(true);
  };

  const logout = async (): Promise<void> => {
    // Request server to logout user profile and remove its session
    removeCookies('accessToken');
    removeCookies('refreshToken');
  };

  // add as middleware
  const refresh = async (): Promise<void> => {
    // refresh api call
    const accessToken = '';
    const refreshToken = '';
    setCookies('accessToken', accessToken);
    setCookies('refreshToken', refreshToken);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        accessToken,
        refreshToken,
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
