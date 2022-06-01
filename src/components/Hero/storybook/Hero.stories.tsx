import { ComponentStory } from '@storybook/react';

import Hero from '../Hero';

const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />;

export const HeroStory = Template.bind({});
HeroStory.parameters = {
  controls: {
    include: [],
  },
};
HeroStory.args = {};
