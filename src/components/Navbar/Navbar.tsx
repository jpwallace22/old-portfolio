import { FC } from 'react';
import { css } from 'styled-components';

// Quarks
import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import { BasicProps } from 'quarks/interpolations/basic';

import { CSSProps } from 'theme/getAppTheme';

type NavbarProps = BasicProps & {
  links: {
    text: string;
    url: string;
  }[];
};

const Navbar: FC<NavbarProps> = ({ links, ...props }) => (
  <Flex {...props}>
    <Container
      as="ul"
      width="90%"
      height="100vh"
      position="absolute"
      css={css`
        background-color: ${(cssProps: CSSProps) =>
          cssProps.theme.palette.mode === 'dark' ? 'rgba(26,22,49,.90)' : 'rgba(255,255,255,.85)'};
      `}
    >
      {links.map(link => (
        <Container as="li" key={link.text}>
          {link.text}
        </Container>
      ))}
    </Container>
  </Flex>
);

export default Navbar;

Navbar.defaultProps = {};
