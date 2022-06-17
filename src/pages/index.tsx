import { useMediaQuery } from '@mui/material';
import { home } from 'data/data';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import Paragraph from 'quarks/Paragraph';

// Molecules
import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

// Components
import AlternatingSwitchbacks from 'components/AlternatingSwitchbacks/AlternatingSwitchbacks';
import Footer from 'components/Footer/Footer';
import Hero from 'components/Hero/Hero';
import Switchback from 'components/Switchback/Switchback';

import { emailObfuscator } from 'utils/functions';

const HeroLine = styled(Line)``;
const AboutLine = styled(Line2)``;

const Home = () => {
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);
  const [drawAbout, setDrawAbout] = useState(0);
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
  });

  return (
    <>
      <Head>
        <title>Justin Wallace | Home</title>
      </Head>
      <Container as="main" maxWidth="1440px" marginX="auto" paddingX={16} lg={{ paddingX: 32 }}>
        <Container
          className="heroSection"
          as="section"
          height="85vh"
          contain="layout"
          position="relative"
          lg={{ height: '100vh' }}
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
              width={650}
              height={650}
              alt=""
              position="absolute"
              left="50%"
              top="0"
              zIndex={-1}
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
            position="relative"
            paddingBottom={64}
            contain="layout"
            zIndex={1}
            id="about"
            lg={{ paddingY: 64, paddingBottom: 80 }}
          >
            <Switchback cta1Action={() => emailObfuscator(router)} {...home.aboutMe} />
            <Dots position="absolute" bottom="0" left="45%" lg={{ top: '110px', left: '50%' }} />
          </Container>
        </StandardFadeIn>

        <Container id="works" as="section" position="relative" contain="layout" paddingY={64}>
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
              Some Works
            </Heading>
            <Paragraph maxWidth="730px">
              A couple of projects that show my progression over the years. From jQuery to Node (and plenty of others in
              between) I feel these works highlight my thought process and how I am always try to make the most out of
              whatever tools I have.{' '}
            </Paragraph>
          </StandardFadeIn>
          <AlternatingSwitchbacks works={home.works} />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
