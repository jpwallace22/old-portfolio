/* eslint-disable import/prefer-default-export */
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const navbar = {
  links: [
    {
      text: 'about',
      url: 'https://www.justinwallace.dev/#about',
    },
    {
      text: 'works',
      url: 'https://www.justinwallace.dev/#works',
    },
    {
      text: 'contact',
      url: 'https://www.justinwallace.dev/#footer',
    },
    {
      text: 'resume',
      url: '/Resume.pdf',
    },
    {
      text: 'home',
      url: 'https://www.justinwallace.dev',
    },
  ],
  socials: [
    {
      platform: 'Instagram',
      image: <FiInstagram />,
      url: 'https://instagram.com/van.surf.climb',
    },
    {
      platform: 'Github',
      image: <FiGithub />,
      url: 'https://github.com/jpwallace22',
    },
    {
      platform: 'LinkedIn',
      image: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/thejustinwallace/',
    },
  ],
};
