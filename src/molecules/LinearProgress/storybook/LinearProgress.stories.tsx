import { ComponentStory } from '@storybook/react';

import LinearProgress from 'molecules/LinearProgress/LinearProgress';

const Template: ComponentStory<typeof LinearProgress> = args => <LinearProgress {...args} />;

export const linear = Template.bind({});
linear.parameters = {
  controls: {
    include: ['value', 'label', 'labelPosition', 'variant', 'valueBuffer'],
  },
};
linear.args = {
  marginTop: 32,
  value: 42,
  valueBuffer: 100,
  label: true,
  variant: 'buffer',
  labelPosition: 'end',
  width: '98%',
};
