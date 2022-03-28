import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  const id_array = request.body.input.ids;
  let id_list: [number] = [Math.floor(Math.random() * 1000)];
  for (let i = 0; i < 9; i++) {
    id_list.push(id_array[Math.floor(Math.random() * 1000)]);
  }
  console.log('request.body :: ', request.body);
  console.log(`id_array :: ${id_array}, id_list :: ${id_list}`);
  response.status(200).json({
    id_list: id_list
  });
}
