import { lazy, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Flex, Grid, Image, Link, Text } from 'quarks';
import { BsLightbulbFill as LightBulb, BsFillLightbulbOffFill as LightBulbOff } from 'react-icons/bs';
import { useSwipeable } from 'react-swipeable';

import logoPath from 'assets/svg/logo-gradient.svg';
import { ReactComponent as LogoMark } from 'assets/svg/logomark-grad.svg';

import { media } from 'atoms/breakpoints/breakpoints';

import Socials from 'molecules/Socials/Socials';

import Hamburger from 'components/Navbar/Hamburger';

import { underlineOnHover } from 'utils/css';

import useDarkMode from 'contexts/ThemeProvider';

import type { SocialsProps } from 'molecules/Socials/Socials';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { CSSProps } from 'theme/getAppTheme';

const ClickMe = lazy(() => import('components/Navbar/ClickMe'));

type NavbarProps = BasicProps & {
  links: {
    text: string;
    url: string;
  }[];
  socials?: SocialsProps;
};

const Navbar: FC<NavbarProps> = ({ links, socials, ...props }) => {
  const [active, setActive] = useState(false);

  const [isDark, setIsDark] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg, { defaultMatches: true });

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
          isDesktop && {
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
        }
        lg={{ paddingX: 32, maxWidth: '1280px', marginX: 'auto' }}
        {...props}
      >
        <ClickMe />
        <Hamburger
          navRef={mobileNav}
          position="relative"
          right={active ? '-70%' : '0'}
          transition={slideTransition}
          active={active}
          setActive={setActive}
          lg={{ display: 'none' }}
          zIndex={99}
        />
        <Link href={home} lineHeight={0}>
          <LogoMark width={45} />
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
          css={`
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
              <Flex
                as="li"
                key={link.text}
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
                <Link href={link.url} hover={{ textColor: undefined }}>
                  <Text
                    textStyle="xl"
                    fontSize={36}
                    position="relative"
                    fontWeight="bold"
                    lg={{ textStyle: 'xl', fontWeight: 'light' }}
                    css={`
                      ${underlineOnHover(-8)}
                    `}
                  >
                    {link.text}
                  </Text>
                </Link>
              </Flex>
            ))}
          </Flex>
          {isDesktop && (
            <Grid cursor="pointer" placeItems="center" marginLeft={32}>
              {LightSwitch(24)}
            </Grid>
          )}
          {!isDesktop && socials && active && (
            <Flex justifyContent="center">
              <Socials {...socials} size={36} marginTop={32} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
