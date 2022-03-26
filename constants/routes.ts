export const backendRoute = {
  GOOGLE_LOGIN: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/google/login`,
  REFRESH_TOKEN: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/token/refresh`
};
export const frontendRoute = {
  DASHBOARD: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/dashboard`,
  ERROR_PAGE: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/404`,
  LANDING: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/`,
  DASHBOARD_JOBS: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/dashboard/jobs`,
  THEMES: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/themes`,
  CALANDER: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/calander`,
  APPLICANT: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/applicants`,
  SETTINGS: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/settings`,
  HELLO_API: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/hello`,

  // oauth
  LOGIN: `/api/auth/login`,
  LOGOUT: `/api/auth/logout`,
  CALLBACK: `/api/auth/callback`,
  PROFILE: `/api/auth/me`
};
