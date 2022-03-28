export const GET_LOGGED_USER_DETAIL = `
  query MyQuery($user_email : String) {
    users(where: { email: { _eq: $user_email } }) {
      id
      name
      email
      phone
      role
      picture_url
      created_at
      updated_at
    }
  }
`;
