import gql from 'graphql-tag';

export const TEST_QUERY = gql`
  {
    users {
      id
      name
    }
  }
`;
