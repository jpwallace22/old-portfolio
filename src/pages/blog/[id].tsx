import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';

import type { BlogPostRecord } from 'graphql/types.gen';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

const BlogPostPage = lazy(() => import('templates/Blog/BlogPostPage'));

// Create paths
export const getStaticPaths: GetStaticPaths<BlogPostRecord['id']> = async () => {
  const data = await sdk.BlogPostSlugs();

  const paths = data.allBlogPosts.map(post => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
};

// Query data
export const getStaticProps: GetStaticProps<BlogPostRecord, { id: string }> = async ({ params }) => {
  const slug = params?.id;
  const data = await sdk.BlogPostData({ slug });

  return {
    props: data.blogPost as BlogPostRecord,
  };
};

const BlogDetail: FC<BlogPostRecord> = props => <BlogPostPage {...props} />;

export default BlogDetail;
