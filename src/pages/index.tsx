import { lazy, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import request from 'graphql/datocms';
import { buttonFrag, companyFrag, imageFrag, personFrag, switchBackFrag, testimonialCardFrag } from 'graphql/fragments';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Dots, Heading, Image, LargeCircle, SmallCircle } from 'quarks';
import styled from 'styled-components';

import dots from 'assets/images/dots.webp';
// import { ReactComponent as Line2 } from 'assets/svg/about-line.svg';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import Hero from 'components/Hero/Hero';

import { emailObfuscator } from 'utils/functions';

import type { HomepageRecord } from 'graphql/generatedTypes';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));
const Carousel = lazy(() => import('components/Carousel/Carousel'));

const HeroLine = styled(Line)``;
// const AboutLine = styled(Line2)``;

type IHomePage = {
  data: HomepageRecord;
};

const Home: FC<IHomePage> = ({ data }) => {
  const { worksHeading, worksIntro, aboutMe, works, testimonials } = data;
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);
  // const [drawAbout, setDrawAbout] = useState(0);

  const aboutRef = useRef<HTMLElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const worksSection = worksRef.current?.getBoundingClientRect();
      const aboutSection = aboutRef.current?.getBoundingClientRect();

      if (worksSection && aboutSection) {
        const heroPercentage =
          document.documentElement.scrollTop / (aboutSection.top + document.documentElement.scrollTop);

        // const aboutPercentage =
        //   (document.documentElement.scrollTop - (aboutSection.top + document.documentElement.scrollTop) + 250) /
        //   (worksSection.top +
        //     document.documentElement.scrollTop +
        //     250 -
        //     (aboutSection.top + document.documentElement.scrollTop));

        setDrawHero(250 * heroPercentage);
        // setDrawAbout(aboutPercentage > 0 ? 800 * aboutPercentage : 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Justin Wallace | Home</title>
        <link
          rel="preload"
          as="image"
          href="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27635%27%20height=%27629%27/%3e"
        />
      </Head>

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
            loading="eager"
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

        <Container as="section" paddingBottom={64} paddingTop={80} marginY={64} position="relative">
          <Container
            backgroundColor={{ dark: 'purple-700', light: 'purple-100' }}
            position="absolute"
            opacity={0.5}
            top={0}
            bottom={0}
            left="-1200px"
            right="-1200px"
            zIndex={-10}
          />
          <Carousel cards={testimonials} />
        </Container>

        <Container id="works" ref={worksRef} as="section" position="relative" contain="layout" paddingY={64}>
          {/* {isDesktop && (
            <Container position="absolute" left="380px" top="-60px">
              <AboutLine
                width={400}
                css={`
                  stroke-dasharray: 640;
                  stroke-dashoffset: ${drawAbout > 640 ? 0 : 640 - drawAbout};
                  stroke-width: 7;
                `}
              />
            </Container>
          )} */}
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
