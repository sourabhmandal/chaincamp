export const MY_TOP_RANKING = `
query MyQuery($_eq: String = "19mandal97@gmail.com") {
  history(where: {user_email: {_eq: $_eq}}, order_by: {correct: desc}, limit: 5, distinct_on: correct) {
    correct
    created_at
    score
    unattempted
    user_email
    wrong
  }
}
`;

export const OVERALL_TOP_RANKING = `
query MyQuery {
  history(order_by: {score: desc_nulls_last}, limit: 5) {
    correct
    created_at
    score
    unattempted
    user_email
    wrong
  }
}
`;
