import { ComponentStory } from '@storybook/react';

import Masonry from '../Masonry';

const Template: ComponentStory<typeof Masonry> = args => <Masonry {...args} />;

export const MasonryStory = Template.bind({});
MasonryStory.parameters = {
  controls: {
    include: [],
  },
};
MasonryStory.args = {};
