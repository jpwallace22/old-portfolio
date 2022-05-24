import { ComponentStory } from '@storybook/react';

import Spacing from 'atoms/spacing/storybook/Spacing';

const Template: ComponentStory<typeof Spacing> = () => <Spacing />;

export const spacing = Template.bind({});
spacing.parameters = {
  options: { showPanel: false },
};
spacing.args = {};
