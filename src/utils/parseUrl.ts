export const parseUrl = (href: string) => {
  if (!href) {
    return {
      role: 'none',
      tabIndex: -1,
      cursor: 'auto',
      isInternal: false,
    };
  }

  if (href[0] === '#') {
    return {
      isInternal: true,
      cursor: 'pointer',
      tabIndex: 0,
      href,
    };
  }

  const domain = 'justinwallace.dev';
  const url = !(href[0] === '/') && new URL(href);
  const isInternal = (url && url.hostname === `www.${domain}`) || (url && url.hostname === domain);

  return {
    isInternal,
    rel: isInternal ? '' : 'noreferrer noopener',
    target: isInternal ? '' : '_blank',
    href: isInternal ? url.href.split(url.host)[1] : href,
  };
};

export default parseUrl;
