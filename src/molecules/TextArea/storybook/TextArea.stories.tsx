import { ComponentStory } from '@storybook/react';

import TextArea from 'molecules/TextArea/TextArea';

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const textArea = Template.bind({});
textArea.parameters = {
  controls: {
    include: [
      'label',
      'helperText',
      'placeholder',
      'name',
      'disabled',
      'error',
      'required',
      'id',
      'minRows',
      'maxRows',
      'onChange',
      'value',
      'errorMessage',
    ],
  },
};
textArea.args = {
  label: 'Description',
  placeholder: 'Enter a description',
  disabled: false,
  error: false,
  required: false,
  helperText: 'This is a hint to help the user',
  name: 'description',
  id: 'description',
  errorMessage: 'Something went wrong',
};
