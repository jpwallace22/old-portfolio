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
      height: 600,
      width: 650,
    },
    techStack: ['next', 'react', 'javascript', 'css'],
    intro: {
      heading: 'A Static NextJS site',
      body: [
        'I was tasked with creating a static website for a mental health organization called BetterMind. This was a ground up project to include all branding, logo creation, web design, development, media, and copy. This is 100% my work, and was a solo project. ',
        'I chose to work with NextJS on this project because of its SSG capabilities. Since this site was all static, I had no need to make use of any SSR. I learned a lot on this (my first Next project) and had a LOT of fun with it.',
      ],
    },
  },
  {
    id: 'skilljumper',
    title: 'Skill Jumper',
  },
];
