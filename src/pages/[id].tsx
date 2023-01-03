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

  const paths = allPageGenerators.map(page => {
    const slug = page.slug === 'home' ? '/' : page.slug;

    return {
      params: { id: slug },
    };
  });

  return { paths, fallback: false };
};

// Query Data
export const getStaticProps: GetStaticProps<PageGeneratorRecord, { id: string }> = async ({ params }) => {
  const slug = params?.id;

  const data = await sdk.PageData({ slug });

  return {
    props: data.pageGenerator as PageGeneratorRecord,
  };
};

const Page: FC<PageGeneratorRecord> = ({ components }) => (
  <>
    <SEO />
    <Layout>
      <ComponentGenerator components={components} />
    </Layout>
  </>
);

export default Page;
