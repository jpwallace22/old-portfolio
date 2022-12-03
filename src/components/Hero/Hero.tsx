import { useMediaQuery } from '@mui/material';
import { Container, Heading, Logo, Text } from 'quarks';
import styled, { css } from 'styled-components';

import { ReactComponent as Arrow } from 'assets/svg/drawn-arrow.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import type { BasicProps } from 'quarks/interpolations/basic';
import { basic } from 'quarks/interpolations/basic';

import useDarkMode from 'contexts/ThemeProvider';

import type { FC } from 'react';

const DrawnArrow = styled(Arrow)`
  ${basic}
`;

const Hero: FC<BasicProps> = ({ ...props }) => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Container fontFamily="secondaryFont" {...props}>
      <Container
        as="section"
        maxWidth="390px"
        position="relative"
        paddingRight={64}
        sm={{ maxWidth: '580px' }}
        lg={{ maxWidth: '896px', paddingRight: 48 }}
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
