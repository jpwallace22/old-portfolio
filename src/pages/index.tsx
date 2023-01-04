import sdk from 'graphql/datoCmsGqlClient';
import Layout from 'templates/Layout';

import Hero from 'components/Hero/Hero';
import SEO from 'components/SEO/SEO';

import ComponentGenerator from 'utils/ComponentGenerator';

import type { PageGeneratorRecord } from 'graphql/types.gen';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

// Query Data
export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.PageData({ slug: 'home' });

  return {
    props: { ...data.pageGenerator },
  };
};

const Home: FC<PageGeneratorRecord> = ({ components }) => (
  <>
    <SEO />
    <Layout fullHeightFooter>
      <Hero />
      <ComponentGenerator components={components} />
    </Layout>
  </>
);

export default Home;
