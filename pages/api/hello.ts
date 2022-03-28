// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const session = await getSession(req, res);
  console.log(session?.idToken);
  res.status(200).json({ name: 'John Doe' });
});
