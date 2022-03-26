import gql from 'graphql-tag';

export const GET_LOGGED_USER_DETAIL = (userid: number) => {
  return gql`
  query MyQuery {
    users(where: { id: { _eq: "${userid}" } }) {
      id
      locale
      name
      email
      created_at
      phone
      role
      updated_at
    }
  }
`;
};
