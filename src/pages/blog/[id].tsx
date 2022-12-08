import { lazy } from 'react';

import request from 'graphql/datocms';
import { blogPostFrag } from 'graphql/fragments';

import type { BlogPostRecord } from 'graphql/generatedTypes';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

const BlogPostPage = lazy(() => import('templates/Blog/BlogPostPage'));

export const getStaticPaths: GetStaticPaths = async () => {
  const SLUG_QUERY = `
    query {
      allBlogPosts {
        slug
      }
    }
  `;

  const data = await request({
    query: SLUG_QUERY,
  });

  const paths = data.allBlogPosts.map((post: { slug: string }) => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
};

const BlogDetail: FC<BlogPostRecord> = props => <BlogPostPage {...props} />;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const QUERY = `
    query blogQuery($slug: String) {
      blogPost(filter: { slug: { eq: $slug } }) {
        ...blogPostFrag
      }
    }
    ${blogPostFrag}
  `;
  const data = await request({
    query: QUERY,
    variables: {
      slug: slug as string,
    },
  });

  return {
    props: data.blogPost,
  };
};

export default BlogDetail;
