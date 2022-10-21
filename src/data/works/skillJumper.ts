const skillJumper = {
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
      title: 'Play it',
      url: 'https://skill-jumper.netlify.app/',
    },
  ],
  gallery: [
    {
      url: '/images/skilljumper/skilljumper-2.gif',
      height: 989,
      width: 800,
    },
    {
      url: '/images/skilljumper/skilljumper-3.webp',
      height: 997,
      width: 806,
    },
  ],
};

export default skillJumper;
