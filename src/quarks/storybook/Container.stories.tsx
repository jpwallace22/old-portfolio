import { ComponentStory } from '@storybook/react';

import Container from 'quarks/Container';

export const Template: ComponentStory<typeof Container> = args => <Container {...args} />;

export const container = Template.bind({});
container.parameters = {
  controls: {
    exclude: ['forwardedAs', 'ref', 'theme'],
  },
};

container.args = {
  children: "I'm a Container. Inspect me!",
};
