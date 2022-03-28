import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { frontendRoute } from '../../../constants/routes';

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, { returnTo: frontendRoute.DASHBOARD });
    } catch (error: any) {
      res.status(error.status || 500).end(error.message);
    }
  }
});
