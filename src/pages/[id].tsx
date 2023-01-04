import sdk from 'graphql/datoCmsGqlClient';
import Layout from 'templates/Layout';

import SEO from 'components/SEO/SEO';

import ComponentGenerator from 'utils/ComponentGenerator';

import type { PageGeneratorRecord } from 'graphql/types.gen';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

// Create paths
export const getStaticPaths: GetStaticPaths<PageGeneratorRecord['id']> = async () => {
  const { allPageGenerators } = await sdk.PageSlugs();

  const paths = allPageGenerators
    .filter(page => page.slug !== 'home')
    .map(page => ({
      params: { id: page.slug },
    }));

  return { paths, fallback: false };
};

// Query Data
export const getStaticProps: GetStaticProps<PageGeneratorRecord, { id: string }> = async ({ params }) => {
  const slug = params?.id;

  /**
   * secondary query for the blog listing page to get all of the
   * blog posts and splice them into a blog listing component
   */
  if (slug === 'blog') {
    const data = await sdk.PageDataWithBlogs({ slug });
    const blogListing = {
      __typename: 'BlogListingRecord',
      blogs: data.allBlogPosts,
    } as const;

    data.pageGenerator?.components.splice(1, 0, blogListing);

    return {
      props: data.pageGenerator as PageGeneratorRecord,
    };
  }

  const data = await sdk.PageData({ slug });

  return {
    props: data.pageGenerator as PageGeneratorRecord,
  };
};

const Page: FC<PageGeneratorRecord> = ({ slug, components }) => (
  <>
    <SEO slug={slug} />
    <Layout>
      <ComponentGenerator components={components} />
    </Layout>
  </>
);

export default Page;
