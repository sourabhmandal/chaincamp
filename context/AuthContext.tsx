import React, { FC, ReactNode, useState } from 'react';
import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { decodeAccessJWT, verifyJWT } from '../utils/jwt';

export interface AuthContextValue {
  hasuraUser: UserData;
  setHasuraUser: React.Dispatch<React.SetStateAction<UserData>> | any;
}

export const AuthContext = createContext<AuthContextValue>({
  hasuraUser: {
    id: 0,
    role: ''
  },
  setHasuraUser: undefined
});

export type UserData = {
  id: number | undefined;
  name?: string | undefined;
  picture?: string;
  email?: string;
  phone?: string;
  role: string | undefined;
  created_at?: any;
  updated_at?: any;
};

export const AuthProvider: FC<AuthProviderProps> = props => {
  const { children } = props;
  const [hasuraUser, setHasuraUser] = useState<UserData>({
    id: 0,
    role: ''
  });

  return (
    <AuthContext.Provider
      value={{
        hasuraUser,
        setHasuraUser
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
