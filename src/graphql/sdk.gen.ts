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
export const BlogListingFragmentDoc = gql`
  fragment BlogListing on BlogListingRecord {
    __typename
    id
    internalName
    blogs {
      ...BlogCard
    }
  }
  ${BlogCardFragmentDoc}
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
    sectionId
    sectionBackgroundColor
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
export const FeaturedBlogFragmentDoc = gql`
  fragment FeaturedBlog on FeaturedBlogRecord {
    __typename
    id
    internalName
    heading
    body {
      value
    }
    blogs {
      ...BlogCard
    }
  }
  ${BlogCardFragmentDoc}
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
      ...BlogCard
      ...TestimonialCard
    }
  }
  ${BlogCardFragmentDoc}
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
    slug
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
    sectionId
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
export const ScrollingSwitchbackFragmentDoc = gql`
  fragment ScrollingSwitchback on ScrollingSwitchbackRecord {
    __typename
    id
    internalName
    heading
    body {
      value
    }
    switchbacks {
      ...SwitchBack
    }
  }
  ${SwitchBackFragmentDoc}
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
    componentGenerator {
      components {
        ...FeaturedBlog
        ...SwitchBack
        ...Carousel
        ...AlternatingSwitchback
        ...ScrollingSwitchback
      }
    }
  }
  ${ImageFragmentDoc}
  ${SwitchBackFragmentDoc}
  ${FeaturedBlogFragmentDoc}
  ${CarouselFragmentDoc}
  ${AlternatingSwitchbackFragmentDoc}
  ${ScrollingSwitchbackFragmentDoc}
`;
export const PageGenFragmentDoc = gql`
  fragment PageGen on PageGeneratorRecord {
    internalName
    __typename
    id
    slug
    seo {
      description
      title
      image {
        ...Image
      }
    }
    components {
      ...FeaturedBlog
      ...SwitchBack
      ...Carousel
      ...AlternatingSwitchback
      ...ScrollingSwitchback
    }
  }
  ${ImageFragmentDoc}
  ${FeaturedBlogFragmentDoc}
  ${SwitchBackFragmentDoc}
  ${CarouselFragmentDoc}
  ${AlternatingSwitchbackFragmentDoc}
  ${ScrollingSwitchbackFragmentDoc}
`;
export const WorkPageSlugsDocument = gql`
  query WorkPageSlugs {
    allWorks {
      slug
    }
  }
`;
export const PageSlugsDocument = gql`
  query PageSlugs {
    allPageGenerators {
      slug
    }
  }
`;
export const PageDataDocument = gql`
  query PageData($slug: String) {
    pageGenerator(filter: { slug: { eq: $slug } }) {
      ...PageGen
    }
  }
  ${PageGenFragmentDoc}
`;
export const PageDataWithBlogsDocument = gql`
  query PageDataWithBlogs($slug: String) {
    pageGenerator(filter: { slug: { eq: $slug } }) {
      ...PageGen
    }
    allBlogPosts(orderBy: publishDate_DESC) {
      ...BlogCard
    }
  }
  ${PageGenFragmentDoc}
  ${BlogCardFragmentDoc}
`;
export const WorkPageDataDocument = gql`
  query WorkPageData($slug: String) {
    work(filter: { slug: { eq: $slug } }) {
      ...Work
    }
    pageGenerator(filter: { slug: { eq: "home" } }) {
      components {
        __typename
        ... on AlternatingSwitchbackRecord {
          cards {
            ...Work
          }
        }
      }
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
    PageSlugs(
      variables?: PageSlugsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<PageSlugsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<PageSlugsQuery>(PageSlugsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'PageSlugs',
        'query',
      );
    },
    PageData(variables?: PageDataQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<PageDataQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<PageDataQuery>(PageDataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'PageData',
        'query',
      );
    },
    PageDataWithBlogs(
      variables?: PageDataWithBlogsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<PageDataWithBlogsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<PageDataWithBlogsQuery>(PageDataWithBlogsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PageDataWithBlogs',
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
