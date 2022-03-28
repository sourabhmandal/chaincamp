import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const id_array: [number] = request.body.input.ids;
  const min = Math.min(...id_array);
  const max = Math.max(...id_array);

  let id_list: [number] = [Math.floor(Math.random() * (max - min + 1)) + min];
  for (let i = 0; i < 9; i++) {
    id_list.push(id_array[Math.floor(Math.random() * (max - min + 1)) + min]);
  }

  console.log(`min :: ${min}, max :: ${max}, id_list :: ${id_list}`);
  response.status(200).json({
    id_list: id_list
  });
}
