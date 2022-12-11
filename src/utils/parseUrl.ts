import Link from 'next/link';

const parseUrl = (href: string) => {
  if (!href) {
    return {
      as: 'div' as unknown as undefined,
      tabIndex: -1,
      cursor: 'auto',
      isInternal: false,
    } as const;
  }

  const domain = 'justinwallace.dev';
  if (href[0] === '/') {
    href = `https://www.justinwallace.dev${href}`;
  }
  const url = new URL(href);
  const isInternalLink = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    as: isInternalLink ? (Link as unknown as undefined) : ('a' as unknown as undefined), // as does not have proper type support
    href: isInternalLink ? url.href.split(url.host)[1] : href,
    rel: isInternalLink ? '' : 'noreferrer noopener',
    target: isInternalLink ? '' : '_blank',
  };
};

export default parseUrl;
