import { ComponentStory } from '@storybook/react';

import Checkbox from 'molecules/Checkbox/Checkbox';

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.parameters = {
  controls: {
    include: [
      'label',
      'disabled',
      'size',
      'indeterminate',
      'required',
      'helperText',
      'onChange',
      'value',
      'checked',
      'id',
      'value',
      'error',
      'errorMessage',
    ],
  },
};
checkbox.args = {
  label: 'Remember me',
  helperText: 'Save my login details for next time',
  size: 'small',
  disabled: false,
  required: false,
  indeterminate: false,
  id: 'remember',
  error: false,
  errorMessage: 'Something has gone wrong',
};
