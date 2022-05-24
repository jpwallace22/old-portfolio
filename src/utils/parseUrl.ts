const parseUrl = (href: string) => {
  const domain = 'localhost';
  const url = new URL(href);
  const isInternalLink = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    as: isInternalLink ? 'a' /* <-- Replace with GatsbyLink or NextLink */ : ('a' as const),
    to: isInternalLink ? url.href.split(url.host)[1] : undefined,
    rel: isInternalLink ? '' : 'noreferrer noopener',
    target: isInternalLink ? '' : '_blank',
    href,
  };
};

export default parseUrl;
