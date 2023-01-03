import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';
import Layout from 'templates/Layout';

import Section from 'molecules/Section/Section';

import SEO from 'components/SEO/SEO';

import ComponentGenerator from 'utils/ComponentGenerator';

import type { BlogPageRecord, BlogPostRecord } from 'graphql/types.gen';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const BlogListing = lazy(() => import('components/BlogListing/BlogListing'));
interface IBlogPage extends BlogPageRecord {
  blogs: BlogPostRecord[];
}

// Query data
export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.BlogPageData();

  return {
    props: { ...data.blogPage, blogs: data.allBlogPosts },
  };
};

const BlogPage: FC<IBlogPage> = ({ blogs, seo, componentGenerator }) => {
  const [compBeforeListing, ...compsAfterListing] = componentGenerator?.components || [];

  return (
    <>
      <SEO {...seo} slug="/blog" />
      <Layout>
        <ComponentGenerator components={[compBeforeListing]} />
        <Section>
          <BlogListing blogs={blogs} />
        </Section>
        <ComponentGenerator components={compsAfterListing} />
      </Layout>
    </>
  );
};
export default BlogPage;
