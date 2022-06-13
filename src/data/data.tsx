import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const navbar = {
  links: [
    {
      text: 'works',
      url: 'https://www.justinwallace.dev/#works',
    },
    {
      text: 'about',
      url: 'https://www.justinwallace.dev/#about',
    },
    {
      text: 'contact',
      url: 'https://www.justinwallace.dev/#contact',
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

export const works = [
  {
    id: 'bettermind',
    title: 'BetterMind',
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
        'I was tasked with creating a static website for a mental health organization called BetterMind. This was a ground up project to include all branding, logo creation, web design, development, media, and copy. I had 5 weeks to complete and present the project, and had to do it solo. ',
        "I chose to work with NextJS on this project because of its SSG capabilities. Since this site was all static, I had didn't have to trouble myself with SSR or querying a CMS. This was my first dip into NextJS. I learned a ton from this and had a LOT of fun.",
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
  {
    id: 'reactworkflow',
    title: 'Workflow CLI',
    url: 'https://www.justinwallace.dev/works/reactworkflow',
    bannerImage: {
      src: '/images/reactworkflow/reactworkflow-1.webp',
      alt: 'React logo floating over ther terminal',
      height: 650,
      width: 650,
    },
  },
  {
    id: 'thissite',
    title: 'This Website',
    url: 'https://www.justinwallace.dev/works/thissite',
    bannerImage: {
      src: '/images/thissite/thissite-1.svg',
      alt: "Justin Wallace's personal logo",
      height: 650,
      width: 650,
    },
  },
  {
    id: 'eslint',
    title: 'Absolute Only',
    url: 'https://www.justinwallace.dev/works/eslint',
    bannerImage: {
      src: '/images/eslint/eslint-1.webp',
      alt: 'ESlint Absolute only logo',
      height: 650,
      width: 650,
    },
  },
];

const aboutMe = {
  heading: 'A bit about me',
  image: {
    url: '/images/headshot.webp',
    height: 700,
    width: 700,
    alt: '',
  },
  bio: [
    'I am a 14 year Navy veteran that decided to follow my dreams of becoming a web designer, only to find out that I ACTUALLY wanted to be a developer!',
    'Halfway through my journey as a web designer I pivoted over to engineering and have never looked back. Typescript development is what truly motivates me. Whether it be React or Node, I have a absolutely love writing clean, readable, scalable code.',
    'I currently live in sunny San Diego with my amazing wife and perfect little dog. Feel free to connect!',
  ],
  cta1: {
    url: 'mailto:hello@justinwallace.dev',
    text: 'Contact',
  },
  cta2: {
    url: 'https://www.github.com/jpwallace22',
    text: 'Check My Repos',
  },
};

export const home = {
  aboutMe,
  works,
};

export type WorksType = typeof works;
