import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';
import { Container } from 'quarks';

import Hero from 'components/Hero/Hero';
import SEO from 'components/SEO/SEO';

import type { HomepageRecord } from 'graphql/types.gen';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));

const Carousel = lazy(() => import('components/Carousel/Carousel'));

// Query Data
export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.HomepageQuery();

  return {
    props: { ...data.pageGenerator },
  };
};

const Home: FC<HomepageRecord> = ({ components }) => (
  <>
    <SEO />
    <Container as="main">
      <Hero />
      {/* @ts-expect-error Will add to compgen  */}
      <Switchback {...components[0]} />
      {/* will remove cards */}
      <Carousel cards={[]} {...components[1]} />
      {/* @ts-expect-error Will add to compgen  */}
      <AlternatingSwitchbacks {...components[2]} />
    </Container>
    <Footer />
  </>
);

export default Home;
