const octoML = {
  id: 'octoml',
  title: 'OctoML Marketing Site',
  subTitle: 'Automate Model Deployment',
  url: 'https://www.justinwallace.dev/works/octoml',
  bannerImage: {
    src: '/images/octoml/octoml-1.png',
    alt: "Justin Wallace's personal logo",
    height: 650,
    width: 650,
  },
  techStack: ['gatsby', 'react', 'typescript', 'styledComponents', 'dato', 'graphql'],
  intro: {
    heading: 'A Headless SSG Marketing Site',
    body: [
      'As the lead developer for OctoML I had the pleasure of being able to take responsibility for an entire repository. I set up and maintained workflows and linting standards, as well as was responsible for peer and junior code reviews, sprint planning, and UX design review.',
      'The central idea around this site was control for content creators. With DatoCMS and GraphQL queries we set up a system where a content creator could create complete pages within minutes with complete control over everything. ',
    ],
  },
  ctas: [
    {
      icon: 'github',
      title: 'Private',
      disabled: true,
    },
    {
      icon: 'browser',
      title: 'OctoML.ai',
      url: 'https://www.octoml.ai',
    },
  ],
  gallery: [
    { url: '/images/octoml/octoml-2.png', height: 900, width: 1386 },
    { url: '/images/octoml/octoml-3.png', height: 897, width: 1387 },
    { url: '/images/octoml/octoml-4.png', height: 897, width: 1387 },
  ],
  keyPoints: [
    'First project that I was able to take full control of/responsibility for.',
    'Worked directly with OctoML stakeholders to provide an optimized experience for their content creators.',
    'Modeled with DatoCMS and queried with GraphQL utilizing fragments and GraphQL Codegen for the types.',
    'Includes full documentation created with Storybook.',
  ],
};

export default octoML;
