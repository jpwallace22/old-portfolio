import { lazy, useEffect, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import request from 'graphql/datocms';
import { buttonFrag, companyFrag, imageFrag, personFrag, switchBackFrag, testimonialCardFrag } from 'graphql/fragments';
import { useRouter } from 'next/router';
import { Container, Image, LargeCircle, SmallCircle } from 'quarks';
import styled from 'styled-components';

import dots from 'assets/images/dots.webp';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import Hero from 'components/Hero/Hero';
import SEO from 'components/SEO/SEO';

import { emailObfuscator, throttle } from 'utils/functions';

import type { HomepageRecord } from 'graphql/generatedTypes';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));

const Carousel = lazy(() => import('components/Carousel/Carousel'));

const HeroLine = styled(Line)``;

type IHomePage = {
  data: HomepageRecord;
};

const Home: FC<IHomePage> = ({ data }) => {
  const { worksHeading, worksIntro, aboutMe, works, testimonials } = data;
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);
  const router = useRouter();

  const handleScroll = throttle(() => {
    const aboutSection = document.querySelector('.switchBack')?.getBoundingClientRect();
    if (aboutSection) {
      const heroPercentage =
        document.documentElement.scrollTop / (aboutSection.top + document.documentElement.scrollTop);

      setDrawHero(250 * heroPercentage);
    }
  }, 10);

  useEffect(() => {
    // Draw line, stop, remove eventListener and leave line drawn
    if (drawHero < 200) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawHero]);

  return (
    <>
      <SEO />
      {/* // contain="layout" marginX="auto" maxWidth="1440px" paddingX={16} lg={{ paddingX: 32 }} */}
      <Container as="main">
        <Container
          className="heroSection"
          as="section"
          minHeight="85vh"
          contain="layout"
          position="relative"
          lg={{ minHeight: '100vh' }}
        >
          <LargeCircle position="absolute" right="40%" bottom="50%" zIndex={-1} opacity={1} lg={{ right: '50%' }} />
          <Image
            src={dots}
            width={635}
            height={629}
            alt=""
            position="absolute"
            left="50%"
            top="0"
            zIndex={-1}
            priority
            lg={{ left: '58%' }}
          />
          <Container
            position="absolute"
            width="200px"
            right="30%"
            top="70%"
            md={{ right: '10%' }}
            lg={{ width: '350px', right: '30%' }}
          >
            <HeroLine
              id="hero-line"
              css={`
                stroke-width: ${isDesktop ? 1 : 1.75};
                stroke-dasharray: 190;
                stroke-dashoffset: ${drawHero > 190 ? 0 : 190 - drawHero};
              `}
            />
          </Container>
          <SmallCircle position="absolute" left="80%" top="10%" zIndex={-1} lg={{ left: '75%' }} />
          <Hero position="absolute" top="5%" lg={{ top: '40%' }} />
        </Container>
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
