// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from 'next/server';
import { backendRoute, frontendRoute } from '../../constants/routes';
import { verifyJWT } from '../../utils/jwt';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  name: string;
};

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // set it as auth header
  const { idToken } = await getSession(req, res);
  console.log(idToken);
  res.status(200).json({ name: 'John Doe' });
});

