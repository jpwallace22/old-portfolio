import { ComponentStory } from '@storybook/react';

import Navbar from '../Navbar';

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const NavbarStory = Template.bind({});
NavbarStory.parameters = {
  controls: {
    include: [],
  },
};
NavbarStory.args = {};
