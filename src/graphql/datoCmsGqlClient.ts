import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'graphql/sdk.gen';

const headers = {
  authorization: `Bearer ${process.env.DATO_CMS}`,
};

const client = new GraphQLClient('https://graphql.datocms.com', { headers });

const sdk = getSdk(client);

export default sdk;
