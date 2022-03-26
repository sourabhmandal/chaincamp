export async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: object
) {
  const result = await fetch(
    'https://guiding-gibbon-63.hasura.app/v1/graphql',
    {
      method: 'POST',
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    templates {
      id
      name
      price
    }
  }
`;

async function startFetchMyQuery() {
  const { errors, data } = await fetchGraphQL(operationsDoc, 'MyQuery', {});

  if (errors) {
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchMyQuery();
