import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const navbar = {
  links: [
    {
      text: 'works',
      url: 'https://justinwallace.dev/works',
    },
    {
      text: 'about',
      url: 'https://justinwallace.dev/about',
    },
    {
      text: 'contact',
      url: 'https://justinwallace.dev/contact',
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

export const home = {};

export const works = [
  {
    id: 'betterMind',
    title: 'Better Mind',
  },
  {
    id: 'skillJumper',
    title: 'Skill Jumper',
  },
];
