import { ComponentStory } from '@storybook/react';

import StandardFadeIn from '../StandardFadeIn';

const Template: ComponentStory<typeof StandardFadeIn> = args => <StandardFadeIn {...args} />;

export const StandardFadeInStory = Template.bind({});
StandardFadeInStory.parameters = {
  controls: {
    include: [],
  },
};
StandardFadeInStory.args = {
  children: 'Some Text!!',
};
