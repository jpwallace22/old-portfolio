import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const navbar = {
  links: [
    {
      text: 'works',
      url: 'https://www.justinwallace.dev/works',
    },
    {
      text: 'about',
      url: 'https://www.justinwallace.dev/about',
    },
    {
      text: 'contact',
      url: 'https://www.justinwallace.dev/contact',
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

export const home = {};

export const works = [
  {
    id: 'bettermind',
    title: 'Better Mind',
    subTitle: 'Counseling Collective',
    bannerImage: {
      src: '/images/bettermind-1.webp',
      alt: 'Woman sitting in the lotus position',
      height: 550,
      width: 588,
    },
    techStack: ['next', 'react', 'javascript', 'css'],
  },
  {
    id: 'skilljumper',
    title: 'Skill Jumper',
  },
];
