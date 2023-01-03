import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export const ImageFragmentDoc = gql`
  fragment Image on FileField {
    __typename
    id
    alt
    blurhash
    height
    width
    url
  }
`;
export const CategoryFragmentDoc = gql`
  fragment Category on CategoryRecord {
    __typename
    id
    internalName
    name
    slug
  }
`;
export const StructuredTextImageFragmentDoc = gql`
  fragment StructuredTextImage on ImageRecord {
    id
    media {
      title
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const BlogPostFragmentDoc = gql`
  fragment BlogPost on BlogPostRecord {
    __typename
    id
    internalName
    seo {
      description
      title
      image {
        ...Image
      }
    }
    title
    subtitle
    publishDate
    slug
    categories {
      ...Category
    }
    body {
      value
      blocks {
        ...StructuredTextImage
      }
    }
    featuredImage {
      ...Image
    }
  }
  ${ImageFragmentDoc}
  ${CategoryFragmentDoc}
  ${StructuredTextImageFragmentDoc}
`;
export const BlogCardFragmentDoc = gql`
  fragment BlogCard on BlogPostRecord {
    __typename
    id
    internalName
    title
    publishDate
    slug
    categories {
      ...Category
    }
    body {
      value
    }
    featuredImage {
      ...Image
    }
    excerpt {
      value
    }
  }
  ${CategoryFragmentDoc}
  ${ImageFragmentDoc}
`;
export const ButtonFragmentDoc = gql`
  fragment Button on ButtonRecord {
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
export const SwitchBackFragmentDoc = gql`
  fragment SwitchBack on SwitchbackRecord {
    __typename
    id
    internalName
    reverse
    heading
    headingAs
    showDots
    body {
      value
    }
    image {
      ...Image
    }
    buttons {
      ...Button
    }
  }
  ${ImageFragmentDoc}
  ${ButtonFragmentDoc}
`;
export const BlogPageFragmentDoc = gql`
  fragment BlogPage on BlogPageRecord {
    __typename
    id
    seo {
      description
      title
      image {
        ...Image
      }
    }
    switchback {
      ...SwitchBack
    }
  }
  ${ImageFragmentDoc}
  ${SwitchBackFragmentDoc}
`;
export const CompanyFragmentDoc = gql`
  fragment Company on CompanyRecord {
    __typename
    id
    internalName
    name
    website
    logo {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const PersonFragmentDoc = gql`
  fragment Person on PersonRecord {
    __typename
    id
    internalName
    firstName
    lastName
    website
    company {
      ...Company
    }
    role
    thumbnail {
      ...Image
    }
  }
  ${CompanyFragmentDoc}
  ${ImageFragmentDoc}
`;
export const TestimonialCardFragmentDoc = gql`
  fragment TestimonialCard on TestimonialCardRecord {
    __typename
    id
    internalName
    quote {
      value
    }
    person {
      ...Person
    }
  }
  ${PersonFragmentDoc}
`;
export const CarouselFragmentDoc = gql`
  fragment Carousel on CarouselRecord {
    __typename
    id
    internalName
    cards {
      ...TestimonialCard
    }
  }
  ${TestimonialCardFragmentDoc}
`;
export const TechStackFragmentDoc = gql`
  fragment TechStack on TechStackRecord {
    __typename
    id
    internalName
    title
    thumbnail {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const CaseStudyCardFragmentDoc = gql`
  fragment CaseStudyCard on CaseStudyCardRecord {
    __typename
    id
    internalName
    image {
      ...Image
    }
    body {
      value
    }
  }
  ${ImageFragmentDoc}
`;
export const WorkFragmentDoc = gql`
  fragment Work on WorkRecord {
    __typename
    id
    internalName
    seo {
      description
      title
      image {
        ...Image
      }
    }
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
      ...Image
    }
    ctas {
      ...Button
    }
    techStack {
      ...TechStack
    }
    slider {
      ...CaseStudyCard
    }
  }
  ${ImageFragmentDoc}
  ${ButtonFragmentDoc}
  ${TechStackFragmentDoc}
  ${CaseStudyCardFragmentDoc}
`;
export const AlternatingSwitchbackFragmentDoc = gql`
  fragment AlternatingSwitchback on AlternatingSwitchbackRecord {
    __typename
    id
    internalName
    heading
    headingAs
    body {
      value
    }
    cards {
      ...Work
    }
  }
  ${WorkFragmentDoc}
`;
export const PageGenFragmentDoc = gql`
  fragment PageGen on PageGeneratorRecord {
    __typename
    id
    seo {
      description
      title
      image {
        ...Image
      }
    }
    components {
      ...SwitchBack
      ...Carousel
      ...AlternatingSwitchback
    }
  }
  ${ImageFragmentDoc}
  ${SwitchBackFragmentDoc}
  ${CarouselFragmentDoc}
  ${AlternatingSwitchbackFragmentDoc}
`;
export const HomepageQueryDocument = gql`
  query HomepageQuery {
    pageGenerator(filter: { internalName: { eq: "Homepage" } }) {
      ...PageGen
    }
  }
  ${PageGenFragmentDoc}
`;
export const WorkPageSlugsDocument = gql`
  query WorkPageSlugs {
    allWorks {
      slug
    }
  }
`;
export const WorkPageDataDocument = gql`
  query WorkPageData($slug: String) {
    work(filter: { slug: { eq: $slug } }) {
      ...Work
    }
  }
  ${WorkFragmentDoc}
`;
export const BlogPageDataDocument = gql`
  query BlogPageData {
    blogPage {
      ...BlogPage
    }
    allBlogPosts(orderBy: publishDate_DESC) {
      ...BlogCard
    }
  }
  ${BlogPageFragmentDoc}
  ${BlogCardFragmentDoc}
`;
export const BlogPostSlugsDocument = gql`
  query BlogPostSlugs {
    allBlogPosts {
      slug
    }
  }
`;
export const BlogPostDataDocument = gql`
  query BlogPostData($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    HomepageQuery(
      variables?: HomepageQueryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<HomepageQueryQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<HomepageQueryQuery>(HomepageQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'HomepageQuery',
        'query',
      );
    },
    WorkPageSlugs(
      variables?: WorkPageSlugsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<WorkPageSlugsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<WorkPageSlugsQuery>(WorkPageSlugsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'WorkPageSlugs',
        'query',
      );
    },
    WorkPageData(
      variables?: WorkPageDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<WorkPageDataQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<WorkPageDataQuery>(WorkPageDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'WorkPageData',
        'query',
      );
    },
    BlogPageData(
      variables?: BlogPageDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogPageDataQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<BlogPageDataQuery>(BlogPageDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'BlogPageData',
        'query',
      );
    },
    BlogPostSlugs(
      variables?: BlogPostSlugsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogPostSlugsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<BlogPostSlugsQuery>(BlogPostSlugsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'BlogPostSlugs',
        'query',
      );
    },
    BlogPostData(
      variables?: BlogPostDataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogPostDataQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<BlogPostDataQuery>(BlogPostDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'BlogPostData',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
