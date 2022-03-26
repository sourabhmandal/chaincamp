import {
  checkCookies,
  setCookies,
  removeCookies,
  getCookie
} from 'cookies-next';
import React, { FC, ReactNode, useState } from 'react';
import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { frontendRoute } from '../constants/routes';
import { decodeAccessJWT, verifyJWT } from '../utils/jwt';

export interface AuthContextValue {
  isAuthenticated: boolean;
  user: any;
  setUser: any;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  user: {
    id: 0,
    role: ''
  },
  setUser: undefined,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export type UserData = {
  id: number | undefined;
  name?: string | undefined;
  locale?: string;
  email?: string;
  phone?: string;
  role: string | undefined;
  created_at?: any;
  updated_at?: any;
};

export const AuthProvider: FC<AuthProviderProps> = props => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData>({
    id: 0,
    role: ''
  });

  useEffect(() => {
    const accessToken = getCookie('accessToken')?.toString()!;
    const refreshToken = getCookie('refreshToken')?.toString()!;
    if (accessToken && refreshToken) {
      setIsAuthenticated(true);
    }
    if (!verifyJWT(refreshToken)) {
      setIsAuthenticated(false);
      logout();
      return;
    }

    const userdata = decodeAccessJWT(accessToken);
    setUser({ id: userdata?.sub, role: userdata?.role });
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

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout
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
