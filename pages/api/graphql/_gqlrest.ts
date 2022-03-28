export const makeGqlRequest = async (query: string, vars: any) => {
  return fetch(`api/graphql`, {
    method: 'POST',
    headers: {
      'X-Hasura-Role': 'master'
    },
    body: JSON.stringify({
      query: query,
      operationName: 'MyQuery',
      variables: vars
    })
  });
};
