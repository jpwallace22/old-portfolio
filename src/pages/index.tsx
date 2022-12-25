import { lazy } from 'react';

import request from 'graphql/datocms';
import { buttonFrag, companyFrag, imageFrag, personFrag, switchBackFrag, testimonialCardFrag } from 'graphql/fragments';
import { useRouter } from 'next/router';
import { Container } from 'quarks';

import Hero from 'components/Hero/Hero';
import SEO from 'components/SEO/SEO';

import { emailObfuscator } from 'utils/functions';

import type { HomepageRecord } from 'graphql/generatedTypes';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));

const Carousel = lazy(() => import('components/Carousel/Carousel'));

type IHomePage = {
  data: HomepageRecord;
};

const Home: FC<IHomePage> = ({ data }) => {
  const { worksHeading, worksIntro, aboutMe, works, testimonials } = data;
  const router = useRouter();

  return (
    <>
      <SEO />
      <Container as="main">
        <Hero />
        <Switchback cta1Action={() => emailObfuscator(router)} showDots {...aboutMe} />
        <Carousel cards={testimonials} />
        <AlternatingSwitchbacks works={works} worksHeading={worksHeading} worksIntro={worksIntro} />
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const QUERY = `
    query {
      homepage {
        __typename
        worksHeading
        worksIntro {
          value
        }
        aboutMe {
          ...switchBackFrag
        }
        works {
          slug
          title
          bannerImage {
            ...imageFrag
          }
        }
        testimonials {
          ...testimonialCardFrag
        }
      }
    }
    ${testimonialCardFrag}
    ${personFrag}
    ${companyFrag}
    ${buttonFrag}
    ${imageFrag}
    ${switchBackFrag}
  `;

  const data = await request({
    query: QUERY,
  });

  return {
    props: {
      data: data.homepage,
    },
  };
};

export default Home;
