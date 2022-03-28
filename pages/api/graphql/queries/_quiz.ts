export const GET_ALL_QUIZ_IDS = `
query MyQuery {
  quiz {
    id
  }
}
`;

export const GET_RANDOM_QUIZ_IDS = `
query MyQuery {
  get_random_quiz_id(range: {max: 10, min: 10}) {
    id_list
  }
}
`;

export const GET_QUIZ_FROM_ID = `
query MyQuery($_in: [bigint!] = $quiz_id) {
  quiz(where: {id: {_in: $_in}}) {
    id
    correct_answer
    option_four
    option_one
    option_three
    option_two
    question
  }
}
`;
