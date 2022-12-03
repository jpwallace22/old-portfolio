/* eslint-disable no-inline-styles/no-inline-styles */
import { useMediaQuery } from '@mui/material';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { gql } from 'graphql-request';
import request from 'graphql/datocms';
import { buttonFrag, imageFrag, switchBackFrag } from 'graphql/fragments';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Grid, Logo } from 'quarks';
import { lazy, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Assets
import dots from 'assets/images/dots.webp';
import { ReactComponent as Line2 } from 'assets/svg/about-line.svg';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

// Atoms
import { media } from 'atoms/breakpoints/breakpoints';

// Quarks
import Container from 'quarks/Container';
import { Dots, LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import AlternatingSwitchbacks from 'components/AlternatingSwitchbacks/AlternatingSwitchbacks';
import Footer from 'components/Footer/Footer';
import Hero from 'components/Hero/Hero';
import Switchback from 'components/Switchback/Switchback';

import { emailObfuscator } from 'utils/functions';

import { useIntroState } from 'contexts/ThemeProvider';

const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

const HeroLine = styled(Line)``;
const AboutLine = styled(Line2)``;

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { worksHeading, worksIntro, aboutMe, works } = data;
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);
  const [drawAbout, setDrawAbout] = useState(0);

  const [introState, setIntroState] = useIntroState();

  useEffect(() => {
    const bannerTimer = setTimeout(() => setIntroState(false), 5000);

    return () => clearTimeout(bannerTimer);
  }, []);

  const aboutRef = useRef<HTMLElement | null>(null);
  const worksRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const worksSection = document.getElementById('works')?.getBoundingClientRect();
      const aboutSection = document.getElementById('about')?.getBoundingClientRect();

      if (worksSection && aboutSection) {
        const heroPercentage =
          document.documentElement.scrollTop / (aboutSection.top + document.documentElement.scrollTop);

        const aboutPercentage =
          (document.documentElement.scrollTop - (aboutSection.top + document.documentElement.scrollTop) + 250) /
          (worksSection.top +
            document.documentElement.scrollTop +
            250 -
            (aboutSection.top + document.documentElement.scrollTop));

        setDrawHero(250 * heroPercentage);
        setDrawAbout(aboutPercentage > 0 ? 800 * aboutPercentage : 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Justin Wallace | Home</title>
        <link
          rel="preload"
          as="image"
          href="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27635%27%20height=%27629%27/%3e"
        />
      </Head>
      {/* INTRO */}
      {introState && (
        <motion.div
          animate={{
            opacity: 0,
          }}
          transition={{ duration: 1.5, delay: 2.8 }}
          initial={{ opacity: 1 }}
        >
          <Grid
            position="fixed"
            zIndex={99999}
            right={0}
            left={0}
            width="100vw"
            top={0}
            bottom={0}
            backgroundColor="common-black"
            placeItems="center"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5, 1.2, 1, 1, 1, 0],
                rotate: [0, 0, 360, 360, 0, 0, 0, 180],
                borderRadius: ['0%', '20%', '50%', '30%', '0%', '0%', '0%', '0%'],
              }}
              transition={{
                // scale: { type: 'ease', duration: 3 },
                // rotate: { type: 'ease', duration: 3 },
                type: 'ease',
                duration: 3,
              }}
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                overflowY: 'hidden',
                overflowX: 'hidden',
              }}
            >
              <Logo width="320px" position="relative" top={0} left={0} />
            </motion.div>
          </Grid>
        </motion.div>
      )}
      <Container as="main" maxWidth="1440px" marginX="auto" paddingX={16} lg={{ paddingX: 32 }}>
        <Container
          className="heroSection"
          as="section"
          minHeight="85vh"
          contain="layout"
          position="relative"
          lg={{ minHeight: '100vh' }}
        >
          <motion.div
            animate={{ y: 500, x: 0 }}
            transition={{ y: { type: 'spring', stiffness: 100 }, duration: 1 }}
            initial={{ opacity: 0.8 }}
          >
            <LargeCircle position="absolute" right="40%" bottom="50%" zIndex={-1} opacity={1} lg={{ right: '50%' }} />
          </motion.div>
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 2.2 }}
            initial={{ opacity: 0, scale: 2 }}
          >
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
          </motion.div>

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

          <motion.div
            animate={{ y: 60, x: -20, opacity: 1 }}
            transition={{ x: { type: 'spring', stiffness: 300 }, y: { type: 'spring', stiffness: 300 }, duration: 1.5 }}
            initial={{ opacity: 0, x: -400 }}
          >
            <SmallCircle position="absolute" left="80%" top="10%" zIndex={-1} lg={{ left: '75%' }} />
          </motion.div>
          <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.3 }} initial={{ opacity: 0.1 }}>
            <Hero position="absolute" top="5%" lg={{ top: '40%' }} />
          </motion.div>
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

        <Container id="works" ref={worksRef} as="section" position="relative" contain="layout" paddingY={64}>
          {isDesktop && (
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
          )}
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
    </LazyMotion>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const QUERY = gql`
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
      }
    }
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
