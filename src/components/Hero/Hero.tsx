import { useMediaQuery } from '@mui/material';
import { FC } from 'react';
import styled, { css } from 'styled-components';

// Assets
import { ReactComponent as Arrow } from 'assets/svg/hand-drawn-arrow.svg';

// Atoms
import { media } from 'atoms/breakpoints/breakpoints';

// Quarks
import Container from 'quarks/Container';
import Heading from 'quarks/Heading';
import Logo from 'quarks/Logo';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';

// Contexts
import useDarkMode from 'contexts/ThemeProvider';

const DrawnArrow = styled(Arrow)`
  ${basic}
`;

const Hero: FC<BasicProps> = ({ ...props }) => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Container {...props}>
      <Container
        as="section"
        maxWidth="390px"
        position="relative"
        paddingRight={64}
        sm={{ maxWidth: '580px' }}
        lg={{ maxWidth: '896px', paddingRight: 48 }}
      >
        {isDesktop && <DrawnArrow position="absolute" bottom="110%" right="70%" />}
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
          Oh, hello there!{' '}
          <Text fontSize={48} md={{ fontSize: 60 }}>
            👋🏼
          </Text>{' '}
          I&apos;m{' '}
          <Text fontFamily="secondaryFont" gradient="purpleLeft">
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
          transform="rotate(-10deg)"
          right="16px"
          bottom="-30px"
          xs={{ fontSize: 24 }}
          sm={{ fontSize: 30, right: '32px' }}
          md={{ fontSize: 36 }}
          lg={{ bottom: '-10px' }}
        >
          (Don&apos;t you just love alliteration?)
        </Text>
      </Container>
    </Container>
  );
};

export default Hero;

Hero.defaultProps = {};
