import { NextApiRequest, NextApiResponse } from 'next';



export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id_array: [number] = request.body.input.ids;


  const shuffled = id_array.sort(() => 0.5 - Math.random());
  const id_list = shuffled.slice(0, request.body.input.size);

  console.log(`shuffled :: ${shuffled}, id_list :: ${id_list}`);
  response.status(200).json({
    id_list: id_list
  });
}
