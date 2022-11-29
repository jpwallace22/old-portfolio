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

export const caseStudyCardFrag = gql`
  fragment caseStudyCardFrag on CaseStudyCardRecord {
    __typename
    id
    internalName
    image {
      ...imageFrag
    }
    body {
      value
    }
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
`;

export const switchBackFrag = gql`
  fragment switchBackFrag on SwitchbackRecord {
    __typename
    id
    internalName
    reverse
    heading
    body {
      value
    }
    image {
      ...imageFrag
    }
    buttons {
      ...buttonFrag
    }
  }
`;

export const categoryFrag = gql`
  fragment categoryFrag on CategoryRecord {
    __typename
    id
    internalName
    name
    slug
  }
`;

export const workFrag = gql`
  fragment workFrag on WorkRecord {
    __typename
    id
    internalName
    title
    subtitle
    heading
    body {
      value
      blocks
    }
    information {
      value
      blocks
    }
    bannerImage {
      ...imageFrag
    }
    ctas {
      ...buttonFrag
    }
    techStack {
      ...techFrag
    }
    slider {
      ...caseStudyCardFrag
    }
  }
  ${buttonFrag}
  ${techFrag}
  ${caseStudyCardFrag}
  ${imageFrag}
`;

export const blogPostFrag = gql`
  fragment blogPostFrag on BlogPostRecord {
    __typename
    id
    internalName
    title
    subtitle
    publishDate
    slug
    categories {
      ...categoryFrag
    }
    body {
      value
      blocks
    }
    featuredImage {
      ...imageFrag
    }
  }
  ${categoryFrag}
  ${imageFrag}
`;
