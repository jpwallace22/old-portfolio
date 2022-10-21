const uiLibrary = {
  id: 'webstacks',
  title: 'Webstacks UI Library',
  subTitle: 'And a template repository too!',
  url: 'https://www.justinwallace.dev/works/webstacks',
  bannerImage: {
    src: '/images/webstacks/webstacks-1.webp',
    alt: 'ESlint Absolute only logo',
    height: 650,
    width: 650,
  },
  techStack: ['typescript', 'mui', 'styledComponents', 'storybook'],
  intro: {
    heading: 'Framework Agnostic Template Repository',
    body: [
      'While employed at Webstacks as a frontend engineer, I, along with two others, architected and developed a framework agnostic template repository/UI library. The library consists of all your basic UI elements, atomic design variables, and all supporting documentation for its use. ',
      'The UI library leverages a customized version of MUI and Styled Components to make a prop based CSS system you can quickly style within your JSX. With the help of Typescript, it helps limit your choices for props and keeps all devs within the given style guidelines. ',
    ],
  },
  ctas: [
    {
      icon: 'github',
      title: 'Private repo',
      disabled: true,
    },
    {
      icon: 'browser',
      title: 'Check it out',
      url: 'https://webstacks-ui-library.netlify.app/',
    },
  ],
  gallery: [
    { url: '/images/webstacks/webstacks-2.gif', height: 426, width: 800 },
    { url: '/images/webstacks/webstacks-3.gif', height: 426, width: 800 },
    {
      url: '/images/webstacks/webstacks-4.webp',
      height: 427,
      width: 800,
    },
  ],
  keyPoints: [
    'This library is currently in production by five large scale tech companies to include Freshworks, Justworks, & Mutiny.',
    'Developed by a small team with high levels of communication (regarding complex ideas, architecture, and strategy) and collaboration.',
    'Consistently maintained, updated, and debugged as the head "librarian" of the UI Library.',
    'Gave regular training to adjacent team members on its implementations and abilities. ',
  ],
};

export default uiLibrary;
