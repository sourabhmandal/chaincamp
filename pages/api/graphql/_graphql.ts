import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
export default withApiAuthRequired(async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  //@ts-ignore
  const { idToken } = await getSession(req, res);
  const role = req.headers['x-hasura-role']?.toString()!;

  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${idToken}`,
      'X-Hasura-Role': role
    },
    body: req.body
  };

  const result = await fetch(
    'https://guiding-gibbon-63.hasura.app/v1/graphql',
    options
  );
  let data = await result.json();
  res.send(data);
  return result;
});
