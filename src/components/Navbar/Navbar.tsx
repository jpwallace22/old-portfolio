import { useMediaQuery } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import { css } from 'styled-components';

// Assets
import { ReactComponent as LogoMark } from 'assets/svg/logomark-grad.svg';

// Quarks
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Logo from 'quarks/Logo';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

// Molecules
import Socials from 'molecules/Socials/Socials';

// Components
import Hamburger from 'components/Navbar/Hamburger';

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
};

const Navbar: FC<NavbarProps> = ({ links, socials, ...props }) => {
  const [active, setActive] = useState(false);
  const isDesktop = useMediaQuery(media.lg);

  const slideTransition = '.7s right ease';

  return (
    <Flex
      as="nav"
      position="sticky"
      justifyContent="space-between"
      backdropFilter="lg"
      top="0"
      paddingAll={16}
      after={
        isDesktop
          ? {
              content: '',
              position: 'absolute',
              top: '100%',
              height: '1px',
              backgroundColor: 'gray-500',
              left: '0',
              right: '0',
              marginX: 'auto',
              width: '88%',
            }
          : undefined
      }
      lg={{ paddingX: 32, maxWidth: '1280px', marginX: 'auto' }}
      {...props}
    >
      {!isDesktop && (
        <Hamburger
          position="relative"
          right={active ? '-70%' : '0'}
          transition={slideTransition}
          active={active}
          setActive={setActive}
          zIndex={99}
        />
      )}
      <Link href="https://www.justinwallace.dev">
        <LogoMark width={45} cursor="pointer" />
      </Link>
      <Flex
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
          <Link href="https://www.wallace.dev">
            <Logo maxWidth="200px" marginX="auto" marginTop={80} marginBottom={32} cursor="pointer" />
          </Link>
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
          {links.map(link => (
            <Link href={link.url} key={link.text}>
              <Flex
                as="li"
                width="100%"
                textAlign="center"
                height="100px"
                alignItems="center"
                justifyContent="center"
                hover={{
                  backgroundColor: isDesktop ? 'transparent' : 'purple-700',
                  textColor: isDesktop ? 'primary-500' : 'inherit',
                }}
                cursor="pointer"
                lg={{ height: 'inherit' }}
              >
                <Text textStyle="xl" fontSize={36} fontWeight="bold" lg={{ textStyle: 'xl', fontWeight: 'light' }}>
                  {link.text}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex as="ul" justifyContent="center">
          {!isDesktop && socials && <Socials links={socials} marginTop={32}></Socials>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

Navbar.defaultProps = {};
