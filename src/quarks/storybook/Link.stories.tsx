import { ComponentStory } from '@storybook/react';

import Link from 'quarks/Link';

export const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const link = Template.bind({});
link.parameters = {
  controls: {
    include: ['href', 'children'],
  },
};

link.args = {
  href: 'https://www.webstacks.com/',
  children: "I'm a Link. Inspect me!",
};
