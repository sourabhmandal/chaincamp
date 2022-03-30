import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //@ts-ignore
  const secret = process.env.JWT_SECRET;
  let role = req.headers['x-hasura-role']?.toString() || 'anonymous';
  const token = await getToken({ req, secret, raw: true });
  if (!token) {
    // Not Signed in
    res.status(401);
  }

  if (!token) {
    console.log({ error: 'no session id' });
  } else {
    console.log('token found with role', role);
  }
  const reqbody = JSON.parse(req.body);

  const options: RequestInit = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'X-Hasura-Role': role
    },
    body: JSON.stringify({
      query: reqbody.query,
      operationName: reqbody.operationName || 'MyQuery',
      variables: reqbody.vars
    })
  };

  const result: Response = await fetch(
    'https://guiding-gibbon-63.hasura.app/v1/graphql',
    options
  );
  let data;
  if (!result.ok) {
    res.send({ error: 'error in fetching data' });
  } else {
    data = await result.json();
    res.send(data);
  }

  return data;
}
