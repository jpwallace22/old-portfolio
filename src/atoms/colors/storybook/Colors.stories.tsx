import { ComponentStory } from '@storybook/react';

import Colors from 'atoms/colors/storybook/Colors';

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const colors = Template.bind({});
colors.parameters = {
  options: { showPanel: false },
};
