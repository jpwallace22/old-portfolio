import betterMind from 'data/works/betterMind';
import octoML from 'data/works/octoML';
import reactWorkflow from 'data/works/reactWorkflow';
import skillJumper from 'data/works/skillJumper';
import thisSite from 'data/works/thisSite';
import uiLibrary from 'data/works/uiLibrary';
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

export const works = [uiLibrary, octoML, reactWorkflow, betterMind, skillJumper, thisSite];

const aboutMe = {
  heading: 'A bit about me',
  image: {
    url: '/images/headshot.webp',
    height: 700,
    width: 700,
    alt: '',
  },
  bio: [
    'I am a dedicated and driven software engineer with a love for fantastic frontends and intuitive interfaces. My educational background in web design/development paired with my endless curiosity helps me create accessible, semantic, responsive UX experiences.   ',
    'I have been most recently motivated by Typescript (both on the front and backend). However, I understand the need for diversity and am always learning. I have an obsession with writing clean, readable, scalable code regardless of language or framework.',
    'My greatest asset as a developer is my grit, curiosity, love for the craft, and willingness to learn. Nothing like digging into some docs with my morning coffee to start the day!',
  ],
  cta1: {
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
