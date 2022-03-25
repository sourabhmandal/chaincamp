import {
  checkCookies,
  setCookies,
  removeCookies,
  getCookie
} from 'cookies-next';
import React, { FC, ReactNode, useState } from 'react';
import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, useRouter } from 'next/router';
import { frontendRoute } from '../constants/routes';
import { verifyJWT } from '../utils/jwt';

export interface AuthContextValue {
  isAuthenticated: boolean;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = props => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessTokenCheck = checkCookies('accessToken');
    const refreshTokenCheck = checkCookies('refreshToken');
    if (accessTokenCheck && refreshTokenCheck) {
      setIsAuthenticated(true);
    }
    const refreshToken = getCookie('refreshToken');
    console.log(verifyJWT(refreshToken?.toString()!));
    if (!verifyJWT(refreshToken?.toString()!)) {
      setIsAuthenticated(false);
      logout();
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
