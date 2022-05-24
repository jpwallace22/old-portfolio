import { ComponentStory } from '@storybook/react';

import Text from 'quarks/Text';

export const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const text = Template.bind({});
text.parameters = {
  controls: {
    include: ['textStyle', 'children'],
  },
};

text.args = {
  children: "I'm a Text. Inspect me!",
};
