import { ComponentStory } from '@storybook/react';

import Hamburger from '../../../components/Navbar/Hamburger';

const Template: ComponentStory<typeof Hamburger> = args => <Hamburger {...args} />;

export const HamburgerStory = Template.bind({});
HamburgerStory.parameters = {
  controls: {
    include: [],
  },
};
HamburgerStory.args = {};
