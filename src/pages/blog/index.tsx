import request from 'datocms';
import { gql } from 'graphql-request';
import { blogCardFrag, blogPageFrag } from 'graphql/fragments';
import { BlogPageRecord, BlogPostRecord } from 'graphql/generatedTypes';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import Breadcrumbs from 'molecules/Breadcrumbs/Breadcrumbs';

import BlogListing from 'components/BlogListing/BlogListing';
import Footer from 'components/Footer/Footer';
import Switchback from 'components/Switchback/Switchback';

interface IBlogPage extends BlogPageRecord {
  blogs: BlogPostRecord[];
}

const BlogPage: FC<IBlogPage> = ({ switchback, blogs }) => {
  const breadcrumbs = [{ label: 'Home', link: 'https://www.justinwallace.dev' }, { label: 'All Blogs' }];

  return (
    <>
      <Head>
        <title>Justin Wallace | Blog</title>
      </Head>
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

export const getStaticProps: GetStaticProps = async () => {
  const QUERY = gql`
    query blogPageQuery {
      blogPage {
        ...blogPageFrag
      }
      allBlogPosts {
        ...blogCardFrag
      }
    }
    ${blogPageFrag}
    ${blogCardFrag}
  `;
  const data = await request({
    query: QUERY,
  });

  return {
    props: { ...data.blogPage, blogs: data.allBlogPosts },
  };
};

export default BlogPage;
