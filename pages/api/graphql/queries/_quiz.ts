export const GET_ALL_QUIZ_IDS = `
query MyQuery {
  quiz {
    id
  }
}
`;

export const GET_RANDOM_QUIZ_IDS = `
query MyQuery($ids: [Int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], $size: Int! = 10) {
  get_random_quiz_id(ids: $ids, size: $size) {
    id_list
    size
  }
}
`;

export const GET_QUIZ_FROM_ID = `
query MyQuery($quiz_ids: [bigint!] = []) {
  quiz(where: {id: {_in: $quiz_ids}}) {
    correct_answer
    id
    option_four
    option_one
    option_three
    option_two
    question
  }
}
`;
