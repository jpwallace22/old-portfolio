import { GraphQLClient } from 'graphql-request';

const request = ({ query, variables }: { query: string; variables?: Record<string, string | number | boolean> }) => {
  const headers = {
    authorization: `Bearer ${process.env.DATO_CMS}`,
  };

  const client = new GraphQLClient('https://graphql.datocms.com', { headers });

  return client.request(query, variables);
};

export default request;
