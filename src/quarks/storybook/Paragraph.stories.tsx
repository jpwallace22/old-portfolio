import { ComponentStory } from '@storybook/react';

import Paragraph from 'quarks/Paragraph';

export const Template: ComponentStory<typeof Paragraph> = args => <Paragraph {...args} />;

export const paragraph = Template.bind({});
paragraph.parameters = {
  controls: {
    include: ['textStyle', 'children'],
  },
};

paragraph.args = {
  children: "I'm a Paragraph. Inspect me!",
};
