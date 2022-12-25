import { useEffect, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Heading, Image, LargeCircle, Logo, SmallCircle, Text } from 'quarks';
import styled, { css } from 'styled-components';

import dots from 'assets/images/dots.webp';
import { ReactComponent as Arrow } from 'assets/svg/drawn-arrow.svg';
import { ReactComponent as Line } from 'assets/svg/hero-line.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import { basic } from 'quarks/interpolations/basic';

import { sectionSizing } from 'molecules/Section/Section';

import { throttle } from 'utils/functions';

import useDarkMode from 'contexts/ThemeProvider';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

const DrawnArrow = styled(Arrow)`
  ${basic}
`;
const HeroLine = styled(Line)``;

const Hero: FC<BasicProps> = ({ ...props }) => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);
  const [drawHero, setDrawHero] = useState(0);

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
    <Container
      className="heroSection"
      marginX="auto"
      as="section"
      minHeight="85vh"
      contain="layout"
      position="relative"
      {...sectionSizing}
      lg={{ minHeight: '100vh', ...sectionSizing.lg }}
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
      <Container
        fontFamily="secondaryFont"
        position="absolute"
        top="5%"
        maxWidth="390px"
        paddingRight={64}
        sm={{ maxWidth: '580px' }}
        lg={{ maxWidth: '896px', paddingRight: 48, top: '40%' }}
        {...props}
      >
        {isDesktop && (
          <DrawnArrow
            position="absolute"
            bottom="110%"
            width="400px"
            right="70%"
            css={`
              .drawn-arrow_svg__clip-1 {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 1s ease-in forwards;
                animation-delay: 2.5s;
              }
              @keyframes draw {
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}
          />
        )}
        <Logo
          width="128px"
          lg={{ float: 'left', marginBottom: 0 }}
          marginRight={32}
          paddingTop={8}
          marginBottom={16}
          css={css`
            ::after {
              content: '';
              clear: both;
              display: table;
            }
          `}
        />
        <Heading
          as="h2"
          textStyle="xxl"
          fontSize={60}
          marginBottom={12}
          lineHeight={44}
          sm={{ fontSize: 72, lineHeight: 56 }}
          md={{ fontSize: 96, lineHeight: 72 }}
          lg={{ lineHeight: 56 }}
        >
          Oh, hello there!
          <Text fontSize={48} md={{ fontSize: 60 }}>
            👋🏼
          </Text>{' '}
          I&apos;m{' '}
          <Text fontFamily="secondaryFont" gradient="purpleLeft" whiteSpace="nowrap">
            Justin Wallace
          </Text>
        </Heading>
        <Heading
          as="h2"
          textStyle="xxl"
          fontSize={60}
          lineHeight={44}
          sm={{ fontSize: 72, lineHeight: 56 }}
          md={{ fontSize: 96, lineHeight: 72 }}
        >
          {' '}
          A dedicated developer &amp; designer{' '}
        </Heading>
        <Text
          fontSize={20}
          fontWeight={isDarkMode ? 'extraLight' : 'regular'}
          textColor={{ dark: 'gray-500', light: 'gray-900' }}
          position="absolute"
          fontFamily="primaryFont"
          transform="rotate(-10deg)"
          whiteSpace="nowrap"
          right="50px"
          bottom="-40px"
          xs={{ fontSize: 24, right: '25px' }}
          sm={{ fontSize: 30, right: '32px' }}
          md={{ fontSize: 36, bottom: '-60px' }}
          lg={{ bottom: '-20px' }}
        >
          (Don&apos;t you just love alliteration?)
        </Text>
      </Container>
    </Container>
  );
};

export default Hero;
