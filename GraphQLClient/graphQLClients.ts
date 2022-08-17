import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;

const requestHeaders = {
  authorization: 'Bearer MY_TOKEN',
}
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: requestHeaders,
  });

  export default graphQLClient;