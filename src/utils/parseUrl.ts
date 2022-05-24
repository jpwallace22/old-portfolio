import NextLink from 'next/link';

const parseUrl = (href: string) => {
  const domain = 'justinwallace.dev';
  const url = new URL(href);
  const isInternalLink = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    as: isInternalLink ? NextLink : ('a' as const),
    to: isInternalLink ? url.href.split(url.host)[1] : undefined,
    rel: isInternalLink ? '' : 'noreferrer noopener',
    target: isInternalLink ? '' : '_blank',
    href,
  };
};

export default parseUrl;
