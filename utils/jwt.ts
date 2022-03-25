import jwt_decode from 'jwt-decode';

export const verifyJWT = (token: string) => {
  try {
    const { exp }: any = jwt_decode(token);
    return exp > Math.round(new Date().getTime() / 1000);
  } catch (err) {
    return false;
  }
};
