import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //@ts-ignore
  const secret = process.env.JWT_SECRET;
  const role = req.headers['x-hasura-role']?.toString()!;
  const token = await getToken({ req, secret, raw: true });
  if (!token) {
    // Not Signed in
    res.status(401);
  }

  if (!token) {
    res.status(400).send({ error: 'no session id' });
    return;
  } else {
    console.log('token found with role', role);
  }
  const reqbody = JSON.parse(req.body);

  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'X-Hasura-Role': role
    },
    body: JSON.stringify({
      query: reqbody.query,
      operationName: 'MyQuery',
      variables: reqbody.vars
    })
  };

  const result: Response = await fetch(
    'https://guiding-gibbon-63.hasura.app/v1/graphql',
    options
  );
  let data;
  if (!result.ok) {
    res.send(result);
  } else {
    data = await result.json();
    res.send(data);
    console.log(data);
  }

  return data;
}
