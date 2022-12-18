import { lazy, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import request from 'graphql/datocms';
import { buttonFrag, companyFrag, imageFrag, personFrag, switchBackFrag, testimonialCardFrag } from 'graphql/fragments';
import { useRouter } from 'next/router';
import { Container, Dots, Heading, Image, LargeCircle, SmallCircle } from 'quarks';
import styled from 'styled-components';

import dots from 'assets/images/dots.webp';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import Hero from 'components/Hero/Hero';
import SEO from 'components/SEO/SEO';

import { emailObfuscator, throttle } from 'utils/functions';

import type { HomepageRecord } from 'graphql/generatedTypes';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));
const Carousel = lazy(() => import('components/Carousel/Carousel'));

const HeroLine = styled(Line)``;

type IHomePage = {
  data: HomepageRecord;
};

const Home: FC<IHomePage> = ({ data }) => {
  const { worksHeading, worksIntro, aboutMe, works, testimonials } = data;
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);
  const aboutRef = useRef<HTMLElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  // Dray line
  const handleScroll = throttle(() => {
    const worksSection = worksRef.current?.getBoundingClientRect();
    const aboutSection = aboutRef.current?.getBoundingClientRect();
    if (worksSection && aboutSection) {
      const heroPercentage =
        document.documentElement.scrollTop / (aboutSection.top + document.documentElement.scrollTop);

      setDrawHero(250 * heroPercentage);
    }
  }, 10);

  useEffect(() => {
    // Draw the line, then stop, remove the eventListener and leave line drawn
    if (drawHero < 200) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawHero]);

  return (
    <>
      <SEO />
      <Container as="main" contain="layout" maxWidth="1440px" marginX="auto" paddingX={16} lg={{ paddingX: 32 }}>
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

        <StandardFadeIn>
          <Container
            as="section"
            ref={aboutRef}
            position="relative"
            paddingBottom={64}
            contain="layout"
            zIndex={1}
            id="about"
            lg={{ paddingY: 64, paddingBottom: 80 }}
          >
            <Switchback cta1Action={() => emailObfuscator(router)} {...aboutMe} />
            <Dots position="absolute" bottom="0" left="45%" lg={{ top: '110px', left: '50%' }} />
          </Container>
        </StandardFadeIn>

        <Container as="section" paddingBottom={64} paddingTop={80} position="relative">
          <Carousel cards={testimonials} />
        </Container>

        <Container id="works" ref={worksRef} as="section" position="relative" contain="layout" paddingY={64}>
          <LargeCircle position="absolute" left="-900px" top="90px" zIndex={-10} lg={{ bottom: '-200px' }} />
          <StandardFadeIn>
            <Heading as="h3" textStyle="lg" marginBottom={24} lg={{ textStyle: 'xl' }}>
              {worksHeading}
            </Heading>
            <StructuredTextParser
              text={worksIntro}
              maxWidth="730px"
              textColor={{ dark: 'gray-500', light: 'purple-900' }}
            />
          </StandardFadeIn>
          <AlternatingSwitchbacks works={works} />
        </Container>
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
