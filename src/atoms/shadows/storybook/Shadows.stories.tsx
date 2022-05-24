import { ComponentStory } from '@storybook/react';

import Shadows from 'atoms/shadows/storybook/Shadows';

const Template: ComponentStory<typeof Shadows> = () => <Shadows />;

export const shadows = Template.bind({});
shadows.parameters = {
  options: { showPanel: false },
};
shadows.args = {};
