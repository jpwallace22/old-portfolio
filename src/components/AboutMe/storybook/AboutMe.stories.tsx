import { ComponentStory } from '@storybook/react';

import AboutMe from '../AboutMe';

const Template: ComponentStory<typeof AboutMe> = args => <AboutMe {...args} />;

export const AboutMeStory = Template.bind({});
AboutMeStory.parameters = {
  controls: {
    include: [],
  },
};
AboutMeStory.args = {};
