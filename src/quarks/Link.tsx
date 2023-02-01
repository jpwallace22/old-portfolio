import styled from 'styled-components';

import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import parseUrl from 'utils/parseUrl';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

const StyledLink = styled.a.withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  cursor: pointer;
  ${basic}
`;

interface LinkProps extends AnchorHTMLAttributes<HTMLDivElement>, BasicProps {
  /**
   *Takes a full url string. Internal links will be parsed as a `<Link>` and external links will be an `<a>` that safely opens in a new tab.
   */
  href: string;
  /**
   * The string or element within the link.
   */
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, href, ...props }) => (
  <StyledLink {...parseUrl(href)} {...props}>
    {children}
  </StyledLink>
);

export default Link;
