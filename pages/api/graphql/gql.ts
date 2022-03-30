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
  console.log(token);

  if (!token) {
    console.log({ error: 'no session id' });
  } else {
    console.log('token found with role', role);
  }
  const reqbody = JSON.parse(req.body);
  const headers: HeadersInit = token
    ? {
        authorization: `Bearer ${token}`,
        'X-Hasura-Role': role
      }
    : {
        'X-Hasura-Role': role
      };

  const options: RequestInit = {
    method: 'POST',
    headers: headers,
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
