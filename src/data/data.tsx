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
    id: 'bettermind',
    title: 'Better Mind',
    bannerImage: {
      src: '/images/bettermind-1.webp',
      alt: 'Woman sitting in the lotus position',
      height: 550,
      width: 588,
    },
  },
  {
    id: 'skilljumper',
    title: 'Skill Jumper',
  },
];
