import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  const { min, max } = request.body.input.range;
  let id_list: [number] = [Math.floor(Math.random() * (max - min + 1)) + min];
  for (let i = 0; i < 9; i++) {
    id_list.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log(`min :: ${min}, max :: ${max}, id_list :: ${id_list}`);
  response.status(200).json({
    id_list: id_list
  });
}
