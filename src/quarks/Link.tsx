import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';

import parseUrl from 'utils/parseUrl';

const StyledLink = styled.a`
  ${basic}
`;

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, BasicProps {
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

Link.defaultProps = {
  hover: {
    textColor: 'primary-600',
  },
};

export default Link;
