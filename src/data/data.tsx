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
    url: 'https://www.justinwallace.dev/works/bettermind',
    subTitle: 'Counseling Collective',
    bannerImage: {
      src: '/images/bettermind/bettermind-1.webp',
      alt: 'Woman sitting in the lotus position',
      height: 650,
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
    ctas: [
      {
        icon: 'github',
        title: 'Repository',
        url: 'https://github.com/jpwallace22/BetterMind',
      },
      {
        icon: 'browser',
        title: 'Check it out',
        url: 'https://better-mind.vercel.app/',
      },
    ],
    gallery: [
      {
        url: '/images/bettermind/bettermind-5.png',
        height: 1204,
        width: 1382,
      },
      {
        url: '/images/bettermind/bettermind-2.webp',
        height: 300,
        width: 300,
      },
      {
        url: '/images/bettermind/bettermind-3.png',
        height: 715,
        width: 821,
      },
      {
        url: '/images/bettermind/bettermind-4.png',
        height: 921,
        width: 731,
      },
      {
        url: '/images/bettermind/bettermind-1.webp',

        height: 700,
        width: 700,
      },
      {
        url: '/images/bettermind/bettermind-6.png',
        height: 1181,
        width: 1393,
      },
    ],
  },
  {
    id: 'skilljumper',
    title: 'Skill Jumper',
    url: 'https://www.justinwallace.dev/works/skilljumper',
    bannerImage: {
      src: '/images/skilljumper/skilljumper-1.webp',
      alt: 'Justin Wallace as a cartoon jumping up some skill blocks',
      height: 650,
      width: 650,
    },
  },
];

export type WorksType = typeof works;
