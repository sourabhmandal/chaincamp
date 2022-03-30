import {
  GET_ALL_QUIZ_IDS,
  GET_QUIZ_FROM_ID,
  GET_RANDOM_QUIZ_IDS
} from '../pages/api/graphql/queries/_quiz';

export const getQuiz = async (size: number): Promise<any[]> => {
  // get quiz ids
  let res = await fetch('http://localhost:3000/api/graphql/gql', {
    method: 'POST',
    headers: {
      'x-hasura-role': 'user'
    },
    body: JSON.stringify({
      query: GET_ALL_QUIZ_IDS
    })
  });
  let json = await res.json();

  let data: any = json.data.quiz.map((idObj: any) => {
    return idObj.id;
  });

  // get random ids
  res = await fetch('http://localhost:3000/api/graphql/gql', {
    method: 'POST',
    headers: {
      'x-hasura-role': 'user'
    },
    body: JSON.stringify({
      query: GET_RANDOM_QUIZ_IDS,
      vars: { ids: data, size: size }
    })
  });
  json = await res.json();

  data = json.data.get_random_quiz_id.id_list;

  // get random quiz from random ids
  res = await fetch('http://localhost:3000/api/graphql/gql', {
    method: 'POST',
    headers: {
      'x-hasura-role': 'user'
    },
    body: JSON.stringify({
      query: GET_QUIZ_FROM_ID,
      vars: { quiz_ids: data }
    })
  });
  json = await res.json();
  data = json.data.quiz.map((quiz: any) => {
    const {
      correct_answer,
      id,
      option_four,
      option_one,
      option_three,
      option_two,
      question
    } = quiz;
    return {
      id,
      correct_answer,
      question,
      option_list: [option_one, option_two, option_three, option_four]
    };
  });
  return data;
};
