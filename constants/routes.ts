export const backendRoute = {
  // oauth
  LOGIN: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/api/auth/signin`,
  LOGOUT: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/api/auth/signout`,
  CALLBACK: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/api/auth/callback`
};
export const frontendRoute = {
  QUIZ: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/quiz`,
  ERROR_PAGE: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/404`,
  LANDING: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/`,
  DASHBOARD_JOBS: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/dashboard/jobs`,
  THEMES: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/themes`,
  CALANDER: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/calander`,
  APPLICANT: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/applicants`,
  SETTINGS: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/settings`,
  HELLO_API: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/api/hello`,
  USER_PROFILE: `${process.env['NEXT_PUBLIC_FRONTEND_BASE_URL']}/profile`
};
