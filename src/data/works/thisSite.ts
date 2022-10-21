const thisSite = {
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
      'This portfolio site is more than just a website to SEE my work. It IS my work, and I feel like it would be a disservice to not touch on the process of its creation.',
      "You might notice that the codebase for this site is pretty robust. That's because I used a very unique way of styling, that, combined with the fact that the content is dynamically delivered, means this site is built to scale. ",
    ],
  },
  ctas: [
    {
      icon: 'github',
      title: 'Repository',
      url: 'https://github.com/jpwallace22/portfolio',
    },
    {
      icon: 'browser',
      title: 'This is it',
      disabled: true,
    },
  ],
  gallery: [
    { url: '/images/thissite/thissite-2.webp', height: 900, width: 1386 },
    { url: '/images/thissite/thissite-3.webp', height: 897, width: 1387 },
    { url: '/images/thissite/thissite-4.webp', height: 897, width: 1387 },
  ],
};

export default thisSite;
