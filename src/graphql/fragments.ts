/* eslint-disable import/prefer-default-export */
import { gql } from 'graphql-request';

export const workFrag = gql`
  fragment workFrag on WorkRecord {
    title
  }
`;
