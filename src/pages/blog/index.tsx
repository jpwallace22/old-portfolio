import sdk from 'graphql/datoCmsGqlClient';
import Layout from 'templates/Layout';

import SEO from 'components/SEO/SEO';

import ComponentGenerator from 'utils/ComponentGenerator';

import type { BlogListingRecord, BlogPageRecord } from 'graphql/types.gen';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

interface IBlogPage extends BlogPageRecord {
  blogListing: BlogListingRecord;
}

// Query data
export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.BlogPageData();
  const blogListing = {
    __typename: 'BlogListingRecord',
    blogs: data.allBlogPosts,
  };

  return {
    props: { ...data.blogPage, blogListing },
  };
};

const BlogPage: FC<IBlogPage> = ({ blogListing, seo, componentGenerator }) => {
  const [firstComp, ...compsAfterListing] = componentGenerator?.components || [];
  const blogPageComponents = [firstComp, blogListing, ...compsAfterListing];

  return (
    <>
      <SEO {...seo} slug="/blog" />
      <Layout>
        <ComponentGenerator components={blogPageComponents} />
      </Layout>
    </>
  );
};
export default BlogPage;
