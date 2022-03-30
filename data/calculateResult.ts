import { backendRoute } from '../constants/routes';
import { CREATE_HISTORY } from '../pages/api/graphql/mutations/_score';

type countAnsResp = { correct: number; wrong: number; unattempted: number };
export function calculateResult(
  marksheet: number[],
  ans: number[]
): countAnsResp {
  let correct: number = 0,
    wrong: number = 0,
    unattempted: number = 0;
  marksheet.map((mark: number, idx) => {
    mark === ans[idx] ? correct++ : mark == -1 ? unattempted++ : wrong++;
  });
  return { correct, wrong, unattempted };
}

export async function saveResultToDB(
  correct: number,
  wrong: number,
  unattempted: number,
  user_email: string
) {
  let res = await fetch(backendRoute.GQL, {
    method: 'POST',
    headers: {
      'x-hasura-role': 'user'
    },
    body: JSON.stringify({
      query: CREATE_HISTORY,
      operationName: 'MyMutation',
      vars: { correct, wrong, unattempted, user_email }
    })
  });
  let json = await res.json();
  if (json.error) {
    return json;
  }
  let data: any = json.data.insert_history.returning[0];

  console.log(data);
  return data;
}
