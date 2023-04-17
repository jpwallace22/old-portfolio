/* eslint-disable import/prefer-default-export */
export const navbar = {
  links: [
    {
      text: 'about',
      url: 'https://www.justinwallace.dev/about',
    },
    {
      text: 'projects',
      url: 'https://www.justinwallace.dev/#works',
    },
    {
      text: 'blog',
      url: 'https://www.justinwallace.dev/blog',
    },
    {
      text: 'contact',
      url: 'https://www.justinwallace.dev/#footer',
    },
    {
      text: 'home',
      url: 'https://www.justinwallace.dev',
    },
  ],
  socials: {
    socials: [
      {
        platform: 'instagram' as const,
        url: 'https://instagram.com/van.surf.climb',
      },
      {
        platform: 'github' as const,
        url: 'https://github.com/jpwallace22',
      },
      {
        platform: 'linkedin' as const,
        url: 'https://www.linkedin.com/in/thejustinwallace/',
      },
    ],
  },
};
