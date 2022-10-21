const betterMind = {
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
  keyPoints: [
    'My introduction to NextJS and my first "complete" React site. (On my portfolio so you can see my learning progression).',
    'Functioning Recaptcha with small backend scripts written in NodeJS.',
    'Designed, developed, and delivered in under 5 weeks time.',
    'Design includes logo, colors, fonts, layouts, and a branded style-guide deliverable.',
  ],
};

export default betterMind;
