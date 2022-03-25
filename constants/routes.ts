export const backendRoute = {
  GOOGLE_LOGIN: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/google/login`,
  REFRESH_TOKEN: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/token/refresh`
};
export const frontendRoute = {
  DASHBOARD: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/dashboard`,
  LANDING: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/`,
  HELLO_API: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/hello`
};
