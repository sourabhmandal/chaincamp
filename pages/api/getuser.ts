// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // set it as auth header
  const result = await fetch(
    'https://guiding-gibbon-63.hasura.app/api/rest/get_user_by_email',
    {
      method: 'POST',
      //@ts-ignore
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
      },
      body: req.body
    }
  );
  let userdata = await result.json();
  console.log(
    `fetch user data by email :: ${userdata.users[0].id}, ${userdata.users[0].name}, ${userdata.users[0].email}`
  );
  res.status(200).send(userdata.users[0]);
}
