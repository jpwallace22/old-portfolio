import { ComponentStory } from '@storybook/react';

import SwitchComp from 'molecules/Switch/Switch';

const Template: ComponentStory<typeof SwitchComp> = args => <SwitchComp {...args} />;

export const Switch = Template.bind({});
Switch.parameters = {
  controls: {
    include: [
      'label',
      'disabled',
      'size',
      'required',
      'helperText',
      'id',
      'checked',
      'onChange',
      'value',
      'error',
      'errorMessage',
    ],
  },
};
Switch.args = {
  label: 'Remember me',
  helperText: 'Save my login details for next time',
  size: 'small',
  disabled: false,
  required: false,
  id: 'switch',
  value: false,
  error: false,
  errorMessage: 'Something went wrong',
};
