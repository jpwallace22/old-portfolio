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
        url: '/images/bettermind/bettermind-2.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-3.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-4.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-5.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-6.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-7.webp',
        height: 768,
        width: 1366,
      },
    ],
  },
  {
    id: 'skilljumper',
    title: 'Skill Jumper',
    subTitle: 'Can you reach the top?',
    url: 'https://www.justinwallace.dev/works/skilljumper',
    bannerImage: {
      src: '/images/skilljumper/skilljumper-1.webp',
      alt: 'Justin Wallace as a cartoon jumping up some skill blocks',
      height: 650,
      width: 650,
    },
    techStack: ['jquery', 'javascript', 'css'],
    intro: {
      heading: 'A jQuery video game',
      body: [
        "SkillJumper is what I can probably call the real beginning of my javascript development journey. I had written a lot of javascript beforehand, but this is when I first starting using git version control. (even if I still wasn't using github 🤦🏼‍♂️)",
        'I really regret doing this project in jQuery. Though I learned a lot about DOM manipulation, event listeners, and timing events, I feel like I did it with a crutch and I could have learned so much more. But hindsight is 20/20 and this little game not only highlights some of my personal skills, but it pretty fun to play too!',
      ],
    },
    ctas: [
      {
        icon: 'github',
        title: 'Repository',
        url: 'https://github.com/jpwallace22/skill-jumper',
      },
      {
        icon: 'browser',
        title: 'Check it out',
        url: 'https://skill-jumper.netlify.app/',
      },
    ],
    gallery: [
      {
        url: '/images/skilljumper/skilljumper-2.webp',
        height: 608,
        width: 1080,
      },
      {
        url: '/images/skilljumper/skilljumper-3.webp',
        height: 608,
        width: 1080,
      },
      {
        url: '/images/skilljumper/skilljumper-4.webp',
        height: 608,
        width: 1080,
      },
    ],
  },
  {
    id: 'reactworkflow',
    title: 'Workflow CLI',
    subTitle: 'For Productivity',
    url: 'https://www.justinwallace.dev/works/reactworkflow',
    bannerImage: {
      src: '/images/reactworkflow/reactworkflow-1.webp',
      alt: 'React logo floating over the terminal',
      height: 650,
      width: 650,
    },
    techStack: ['node', 'typescript'],
    intro: {
      heading: 'CLI Productivity Booster',
      body: [
        'When building out a lot of components I found myself spending WAY too much scaffolding out the basic structure of every component just so I could get it the point of rendering on screen. I absolutely hate wasting my time.',
        'Workflow CLI at its current v1 stage is simply a recursive template generator used to create the basic layout of components needed for development. It uses a default path but can take a path option as well. I named it React Workflow CLI though because I plan to expand. ',
      ],
    },
    ctas: [
      {
        icon: 'github',
        title: 'Repository',
        url: 'https://github.com/jpwallace22/react-workflow-cli',
      },
      {
        icon: 'npm',
        title: 'Check it out',
        url: 'https://www.npmjs.com/package/react-workflow-cli',
      },
    ],
    autoplay: false,
    gallery: [
      {
        url: '/images/reactworkflow/reactworkflow-2.gif',
        height: 659,
        width: 1200,
      },
      {
        url: '/images/reactworkflow/reactworkflow-3.png',
        height: 634,
        width: 998,
      },
    ],
  },
  {
    id: 'thissite',
    title: 'This Website',
    subTitle: 'So Meta',
    url: 'https://www.justinwallace.dev/works/thissite',
    bannerImage: {
      src: '/images/thissite/thissite-1.svg',
      alt: "Justin Wallace's personal logo",
      height: 650,
      width: 650,
    },
    techStack: ['next', 'react', 'typescript', 'styledComponents'],
    intro: {
      heading: 'A large step up from BetterMind',
      body: [
        "This portfolio site is more than just a website to see my work. It IS my work. This site is ready to be attached to any headless CMS (though I'm most familiar with Contentful) and launched. I didn't use a CMS simply because I am a developer. ",
        "You might notice that the codebase for this site is pretty robust. That's because I plan on scaling and using this as a testing ground for future development ideas. I also took the time to build out a storybook so I can create independent components in the future (and to just show that I know how to do it) ",
      ],
    },
    ctas: [
      {
        icon: 'github',
        title: 'Repository',
        url: 'https://github.com/jpwallace22/BetterMind',
      },
      {
        icon: 'storyBook',
        title: 'Storybook',
        url: 'https://better-mind.vercel.app/',
      },
    ],
    gallery: [
      {
        url: '/images/bettermind/bettermind-2.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-3.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-4.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-5.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-6.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-7.webp',
        height: 768,
        width: 1366,
      },
    ],
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
        url: '/images/bettermind/bettermind-2.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-3.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-4.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-5.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-6.webp',
        height: 768,
        width: 1366,
      },
      {
        url: '/images/bettermind/bettermind-7.webp',
        height: 768,
        width: 1366,
      },
    ],
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
