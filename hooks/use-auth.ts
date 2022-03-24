import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthContextValue } from '../context/AuthContext';

export const useAuth = (): AuthContextValue => useContext(AuthContext);
