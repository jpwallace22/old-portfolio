import { ComponentStory } from '@storybook/react';

import Typography from 'atoms/typography/storybook/Typography';

const Template: ComponentStory<typeof Typography> = () => <Typography />;

export const typography = Template.bind({});
typography.parameters = {
  options: { showPanel: false },
};
typography.args = {};
