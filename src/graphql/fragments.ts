/* eslint-disable import/prefer-default-export */
import { gql } from 'graphql-request';

export const imageFrag = gql`
  fragment imageFrag on FileField {
    __typename
    id
    alt
    blurhash
    height
    width
    url
  }
`;

export const buttonFrag = gql`
  fragment buttonFrag on ButtonRecord {
    __typename
    id
    internalName
    disabled
    icon
    id
    title
    url
  }
`;

export const techFrag = gql`
  fragment techFrag on TechStackRecord {
    __typename
    id
    internalName
    title
    thumbnail {
      ...imageFrag
    }
  }
  ${imageFrag}
`;

export const workFrag = gql`
  fragment workFrag on WorkRecord {
    __typename
    id
    internalName
    title
    subtitle
    heading
    bannerImage {
      ...imageFrag
    }
    ctas {
      ...buttonFrag
    }
    techStack {
      ...techFrag
    }
    gallery {
      ...imageFrag
    }
  }
  ${buttonFrag}
  ${techFrag}
`;
