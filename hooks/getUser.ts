import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthContextValue } from '../context/AuthContext';

export const useHasuraUser = (): AuthContextValue => useContext(AuthContext);
