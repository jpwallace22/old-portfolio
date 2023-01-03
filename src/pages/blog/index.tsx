import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import SEO from 'components/SEO/SEO';

import type { BlogPageRecord, BlogPostRecord } from 'graphql/types.gen';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const Breadcrumbs = lazy(() => import('molecules/Breadcrumbs/Breadcrumbs'));
const BlogListing = lazy(() => import('components/BlogListing/BlogListing'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));

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

const BlogPage: FC<IBlogPage> = ({ switchback, blogs, seo }) => {
  const breadcrumbs = [{ label: 'Home', link: 'https://www.justinwallace.dev' }, { label: 'All Blogs' }];

  return (
    <>
      <SEO {...seo} slug="/blog" />
      <Container
        backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
        position="relative"
        top="-70px"
        lg={{ top: '-82px' }}
        zIndex={2}
      >
        <Flex
          flexDirection="column"
          maxWidth="1170px"
          justifyContent="center"
          paddingTop={128}
          paddingBottom={32}
          paddingX={24}
          marginX="auto"
          sm={{ paddingBottom: 48 }}
          lg={{ paddingBottom: 96, maxWidth: '970px' }}
          xl={{ maxWidth: '1170px' }}
        >
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Switchback {...switchback} paddingTop={32} alignItems="center" />
        </Flex>
      </Container>
      <BlogListing blogs={blogs} />
      <Footer size={50} />
    </>
  );
};

export default BlogPage;
