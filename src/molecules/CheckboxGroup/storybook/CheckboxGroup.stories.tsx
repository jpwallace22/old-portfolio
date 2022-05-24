import { ComponentStory } from '@storybook/react';

import CheckboxGroup from 'molecules/CheckboxGroup/CheckboxGroup';

const Template: ComponentStory<typeof CheckboxGroup> = args => <CheckboxGroup {...args} />;

export const checkboxGroup = Template.bind({});
checkboxGroup.parameters = {
  controls: {
    include: [
      'label',
      'content',
      'helperText',
      'icon',
      'iconSize',
      'onChange',
      'checked',
      'disabled',
      'required',
      'indeterminate',
      'controlStyle',
      'checkboxSize',
      'id',
      'value',
    ],
  },
};
checkboxGroup.args = {
  label: 'Basic Plan',
  helperText: 'Includes up to 10 users, 20GB indiviual data and access to all features.',
  content: undefined,
  icon: undefined,
  controlStyle: 'checkbox',
  checkboxSize: 'small',
  disabled: false,
  required: false,
  indeterminate: false,
};
