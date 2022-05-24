import { ComponentStory } from '@storybook/react';

import CircularProgress from 'molecules/CircularProgress/CircularProgress';

const Template: ComponentStory<typeof CircularProgress> = args => <CircularProgress {...args} />;

export const circular = Template.bind({});
circular.parameters = {
  controls: {
    include: ['value', 'label', 'variant', 'size', 'description', 'labelFormat', 'disableShrink'],
  },
};
circular.args = {
  variant: 'determinate',
  value: 42,
  size: 'sm',
  description: 'Users',
  labelFormat: value => `${value}%`,
  label: true,
  disableShrink: false,
};
