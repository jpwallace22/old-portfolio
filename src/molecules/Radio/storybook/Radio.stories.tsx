import { ComponentStory } from '@storybook/react';

import Radio from 'molecules/Radio/Radio';

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

export const radio = Template.bind({});
radio.parameters = {
  controls: {
    include: [
      'label',
      'disabled',
      'size',
      'checked',
      'required',
      'onChange',
      'helperText',
      'id',
      'value',
      'error',
      'errorMessage',
    ],
  },
};
radio.args = {
  label: 'Remember me',
  helperText: 'Save my login details for next time',
  size: 'small',
  disabled: false,
  required: false,
  id: '',
  error: false,
  errorMessage: 'Something has gone wrong',
};
