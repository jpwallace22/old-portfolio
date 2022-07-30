import { useMediaQuery } from '@mui/material';
import { FC, ReactNode, useRef, useState } from 'react';
import { BsLightbulbFill as LightBulb, BsFillLightbulbOffFill as LightBulbOff } from 'react-icons/bs';
import { useSwipeable } from 'react-swipeable';
import { css } from 'styled-components';

// Assets
import logoPath from 'assets/svg/logo-gradient.svg';
import { ReactComponent as LogoMark } from 'assets/svg/logomark-grad.svg';

// Quarks
import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

// Molecules
import Socials from 'molecules/Socials/Socials';

// Components
import ClickMe from 'components/Navbar/ClickMe';
import Hamburger from 'components/Navbar/Hamburger';

import { underlineOnHover } from 'utils/css';

import useDarkMode from 'contexts/ThemeProvider';

import { CSSProps } from 'theme/getAppTheme';

type NavbarProps = BasicProps & {
  links: {
    text: string;
    url: string;
  }[];
  socials?: {
    platform: string;
    image: ReactNode;
    url: string;
  }[];
  currentSection: string;
};

const Navbar: FC<NavbarProps> = ({ links, socials, currentSection, ...props }) => {
  const [active, setActive] = useState(false);

  const [isDark, setIsDark] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => setActive(false),
  });

  const mobileNav = useRef<HTMLDivElement | null>(null);

  const refPassthrough = (el: HTMLDivElement) => {
    swipeHandler.ref(el);
    mobileNav.current = el;
  };

  const LightSwitch = (size: number) =>
    isDark ? (
      <LightBulb size={size} onClick={() => setIsDark(!isDark)} />
    ) : (
      <LightBulbOff size={size} onClick={() => setIsDark(!isDark)} />
    );

  const slideTransition = '.5s right ease';

  const [{ url: home }] = links.filter(link => link.text === 'home');
  const navLinks = links.filter(link => link.text !== 'home');

  return (
    <Container backdropFilter="sm" position="sticky" top="0px" zIndex={999}>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        paddingAll={16}
        position="relative"
        after={
          isDesktop
            ? {
                content: '',
                position: 'absolute',
                top: '100%',
                height: '1px',
                backgroundColor: isDark ? 'gray-500' : 'common-black',
                left: '0',
                right: '0',
                marginX: 'auto',
                width: '88%',
                maxWidth: '1100px',
              }
            : undefined
        }
        lg={{ paddingX: 32, maxWidth: '1280px', marginX: 'auto' }}
        {...props}
      >
        <ClickMe />
        <Hamburger
          navRef={mobileNav}
          className={active ? 'close-menu' : undefined}
          position="relative"
          right={active ? '-70%' : '0'}
          transition={slideTransition}
          active={active}
          setActive={setActive}
          lg={{ display: 'none' }}
          zIndex={99}
        />
        <Link href={home}>
          <LogoMark width={45} cursor="pointer" />
        </Link>
        <Flex
          {...swipeHandler}
          ref={refPassthrough}
          position="absolute"
          height="100vh"
          width="90%"
          flexDirection="column"
          transition={slideTransition}
          top="0"
          right={active ? '10%' : '100%'}
          backdropFilter="sm"
          css={css`
            background-color: ${!isDesktop
              ? (cssProps: CSSProps) =>
                  cssProps.theme.palette.mode === 'dark' ? 'rgba(26,22,49,.90)' : 'rgba(255,255,255,.85)'
              : undefined};
          `}
          lg={{
            position: 'relative',
            top: 'unset',
            right: 'unset',
            backdropFilter: undefined,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: '50px',
          }}
        >
          {!isDesktop && (
            <>
              <Grid cursor="pointer" position="relative" top="24px" left="32px">
                {LightSwitch(32)}
              </Grid>
              <Link href={home}>
                <Image
                  src={logoPath}
                  width={200}
                  height={200}
                  alt="logo"
                  marginX="auto"
                  marginTop={80}
                  marginBottom={32}
                  cursor="pointer"
                  onClick={() => setActive(false)}
                />
              </Link>
            </>
          )}
          <Flex
            as="ul"
            flexDirection="column"
            justifyContent="center"
            lg={{
              flexDirection: 'row',
              gap: '32px',
            }}
          >
            {navLinks.map(link => (
              <Link href={link.url} key={link.text}>
                <Flex
                  as="li"
                  width="100%"
                  textAlign="center"
                  height="100px"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => setActive(false)}
                  hover={
                    isDark
                      ? {
                          backgroundColor: isDesktop ? 'transparent' : 'purple-700',
                        }
                      : {
                          backgroundColor: isDesktop ? 'transparent' : 'primary-600',
                        }
                  }
                  cursor="pointer"
                  lg={{ height: 'inherit' }}
                >
                  <Text
                    textStyle="xl"
                    fontSize={36}
                    position="relative"
                    fontWeight="bold"
                    lg={{ textStyle: 'xl', fontWeight: 'light' }}
                    css={isDesktop ? underlineOnHover(-10, currentSection === link.text) : undefined}
                  >
                    {link.text}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
          {isDesktop && (
            <Grid cursor="pointer" placeItems="center" marginLeft={32}>
              {LightSwitch(24)}
            </Grid>
          )}
          {!isDesktop && socials && (
            <Flex justifyContent="center">
              <Socials links={socials} marginTop={32}></Socials>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;

Navbar.defaultProps = {};
