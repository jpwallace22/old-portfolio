const reactWorkflow = {
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
};

export default reactWorkflow;
