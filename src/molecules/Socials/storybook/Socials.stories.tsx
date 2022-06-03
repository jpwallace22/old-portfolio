import { ComponentStory } from '@storybook/react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import Socials from '../Socials';

const Template: ComponentStory<typeof Socials> = args => <Socials {...args} />;

export const SocialsStory = Template.bind({});
SocialsStory.parameters = {
  controls: {
    include: [],
  },
};
SocialsStory.args = {
  links: [
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
