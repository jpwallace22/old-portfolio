import { home } from 'data/data';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Assets
import dots from 'assets/images/dots.webp';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

// Quarks
import Container from 'quarks/Container';
import { Dots, LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

// Components
import AlternatingSwitchbacks from 'components/AlternatingSwitchbacks/AlternatingSwitchbacks';
import Hero from 'components/Hero/Hero';
import Switchback from 'components/Switchback/Switchback';

const HeroLine = styled(Line)``;

const Home = () => {
  const [drawHero, setDrawHero] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.heroSection');
      const aboutSection = document.querySelector('.aboutSection');

      if (heroSection && aboutSection) {
        const scrollPercentage =
          (heroSection.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        setDrawHero(400 * scrollPercentage);
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
            animate={{ y: 500, x: 0, opacity: [0, 0.5, 1] }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.6 }}
          >
            <LargeCircle position="absolute" right="40%" bottom="50%" zIndex={-1} opacity={1} lg={{ right: '50%' }} />
          </motion.div>
          <motion.div
            animate={{ scale: [1.5, 1], opacity: [0.1, 0.4, 1] }}
            transition={{ ease: 'easeInOut', duration: 1.6 }}
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

          <Container position="absolute" width="200px" right="30%" top="70%" lg={{ width: '350px' }}>
            <HeroLine
              id="hero-line"
              css={`
                stroke-width: 1;
                stroke-dasharray: 190;
                stroke-dashoffset: ${190 - drawHero};
              `}
            />
          </Container>

          <motion.div
            animate={{ y: 60, x: -20, opacity: [0, 0.8, 1] }}
            transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
          >
            <SmallCircle position="absolute" left="80%" top="10%" zIndex={-1} lg={{ left: '75%' }} />
          </motion.div>
          <motion.div animate={{ opacity: 1 }} transition={{ duration: 0.3 }} initial={{ opacity: 0.1 }}>
            <Hero position="absolute" top="5%" lg={{ top: '40%' }} />
          </motion.div>
        </Container>

        <Container
          as="section"
          position="relative"
          className="aboutSection"
          paddingBottom={64}
          contain="layout"
          zIndex={1}
          lg={{ paddingY: 64, paddingBottom: 80 }}
        >
          <Switchback {...home.aboutMe} />
          <Dots position="absolute" bottom="0" left="45%" lg={{ top: '110px', left: '50%' }} />
        </Container>

        <Container as="section" position="relative" contain="layout" paddingY={64}>
          <LargeCircle position="absolute" left="80%" bottom="-500px" zIndex={-10} lg={{ bottom: '-200px' }} />
          <Heading as="h3" textStyle="lg" marginBottom={32} lg={{ textStyle: 'xl' }}>
            Some Works
          </Heading>
          <AlternatingSwitchbacks works={home.works} />
        </Container>
      </Container>
    </>
  );
};

export default Home;
