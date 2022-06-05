import { ComponentStory } from '@storybook/react';

import SmallCard from '../SmallCard';

const Template: ComponentStory<typeof SmallCard> = args => <SmallCard {...args} />;

export const SmallCardStory = Template.bind({});
SmallCardStory.parameters = {
  controls: {
    include: [],
  },
};
SmallCardStory.args = {};
