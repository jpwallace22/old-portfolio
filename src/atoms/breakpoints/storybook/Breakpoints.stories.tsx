import { ComponentStory } from '@storybook/react';

import Breakpoints from 'atoms/breakpoints/storybook/Breakpoints';

const Template: ComponentStory<typeof Breakpoints> = () => <Breakpoints />;

export const breakpoints = Template.bind({});
breakpoints.parameters = {
  options: { showPanel: false },
};
breakpoints.args = {};
