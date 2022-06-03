import { FC, ReactNode, useState } from 'react';
import { css } from 'styled-components';

// Quarks
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

  return (
    <Flex {...props} position="sticky" top="0">
      <Hamburger
        paddingAll={16}
        position="relative"
        right={active ? '-70%' : '0'}
        transition="1s all ease"
        active={active}
        setActive={setActive}
        zIndex={99}
      />
      <Flex
        position="absolute"
        height="100vh"
        width="90%"
        flexDirection="column"
        transition="1s all ease"
        right={active ? '10%' : '100%'}
        css={css`
          background-color: ${(cssProps: CSSProps) =>
            cssProps.theme.palette.mode === 'dark' ? 'rgba(26,22,49,.95)' : 'rgba(255,255,255,.85)'};
        `}
      >
        <Link href="https://justinwallace.dev">
          <Logo
            width="50%"
            maxWidth="200px"
            marginX="auto"
            marginTop={32}
            position="relative"
            paddingY={64}
            cursor="pointer"
          />
        </Link>
        <Flex as="ul" flexDirection="column" justifyContent="center">
          {links.map(link => (
            <Link href={link.url} key={link.text}>
              <Flex
                as="li"
                width="100%"
                textAlign="center"
                height="100px"
                alignItems="center"
                justifyContent="center"
                hover={{ backgroundColor: 'purple-700' }}
                cursor="pointer"
              >
                <Text textStyle="xl" fontSize={36} fontWeight="bold">
                  {link.text}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex as="ul" justifyContent="center">
          {socials && <Socials links={socials} marginTop={64}></Socials>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

Navbar.defaultProps = {};
