import { ComponentStory } from '@storybook/react';

import Flex from 'quarks/Flex';

export const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const flex = Template.bind({});
flex.parameters = {
  controls: {
    include: [
      'alignItems',
      'children',
      'justifyContent',
      'flexWrap',
      'flexDirection',
      'order',
      'flexBasis',
      'flexShrink',
      'flexGrow',
      'gap',
      'rowGap',
      'columnGap',
    ],
  },
};

flex.args = {
  children: "I'm a Flex. Inspect me!",
};
