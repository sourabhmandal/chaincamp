import jwtDecode from 'jwt-decode';

type AccessToken = {
  sub: number;
  role: string;
  'https://hasura.io/jwt/claims': {
    'X-Hasura-Allowed-Roles': [string];
    'X-Hasura-Default-Role': string;
    'X-Hasura-User-Id': number;
    'X-Hasura-Role': string;
  };
  iat: number;
  exp: number;
  iss: string;
};

export const verifyJWT = (token: string) => {
  try {
    const { exp }: any = jwtDecode(token);
    return exp > Math.round(new Date().getTime() / 1000);
  } catch (err) {
    return false;
  }
};

export const decodeAccessJWT = (token: string): AccessToken | undefined => {
  try {
    const decoded: AccessToken = jwtDecode(token);
    return decoded;
  } catch (err) {
    return undefined;
  }
};
