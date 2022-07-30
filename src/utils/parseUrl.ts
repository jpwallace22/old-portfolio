import NextLink from 'next/link';

const parseUrl = (href: string) => {
  if (href === '') {
    return {
      as: 'div' as const,
    };
  }

  const domain = 'justinwallace.dev';
  const url = new URL(href);
  const isInternalLink = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    as: isInternalLink ? NextLink : ('a' as const),
    href: isInternalLink ? url.href.split(url.host)[1] : href,
    rel: isInternalLink ? '' : 'noreferrer noopener',
    target: isInternalLink ? '' : '_blank',
  };
};

export default parseUrl;
