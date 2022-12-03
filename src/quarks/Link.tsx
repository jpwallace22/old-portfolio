import NextLink from 'next/link';
import styled from 'styled-components';

import type { BasicProps } from 'quarks/interpolations/basic';
import { basic } from 'quarks/interpolations/basic';

import parseUrl from 'utils/parseUrl';

import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

const StyledLink = styled.a`
  cursor: pointer;
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

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  const { isInternal, href: url, ...rest } = parseUrl(href);

  return isInternal ? (
    <NextLink href={url || ''} passHref>
      <StyledLink {...props} aria-label={href}>
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <StyledLink href={url} {...rest} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
