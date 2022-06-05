import { ComponentStory } from '@storybook/react';

import TechStack from '../TechStack';

const Template: ComponentStory<typeof TechStack> = args => <TechStack {...args} />;

export const TechStackStory = Template.bind({});
TechStackStory.parameters = {
  controls: {
    include: [],
  },
};
TechStackStory.args = {};
