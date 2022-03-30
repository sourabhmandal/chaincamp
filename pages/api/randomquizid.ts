import { NextApiRequest, NextApiResponse } from 'next';



export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id_array: [number] = request.body.input.ids;
  const size: number = request.body.input.size;

  const shuffled = id_array.sort(() => 0.5 - Math.random());
  let id_list: number[] = shuffled;
  if (size < id_array.length)
    id_list = shuffled.slice(0, request.body.input.size);

  console.log(`shuffled :: ${shuffled}, id_list :: ${id_list}`);
  response.status(200).json({
    id_list: id_list,
    size: request.body.input.size
  });
}
