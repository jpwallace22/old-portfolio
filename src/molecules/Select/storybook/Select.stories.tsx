import { ComponentStory } from '@storybook/react';

import Select from 'molecules/Select/Select';

export const list = [
  'Phoenix Baker',
  'Olivia Rhye',
  'Lana Steiner',
  'Demi Wilkinson',
  'Candice Wu',
  'Natali Craig',
  'Drew Cano',
];

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const select = Template.bind({});
select.parameters = {
  controls: {
    include: [
      'list',
      'placeholderText',
      'label',
      'itemIcon',
      'startIcon',
      'onChange',
      'defaultValue',
      'iconSize',
      'error',
      'errorMessage',
      'helperText',
    ],
  },
};

select.args = {
  list,
  placeholderText: 'Select Team Member',
  label: 'Team member',
  iconSize: '1.25rem',
  error: false,
  errorMessage: 'Something has gone wrong',
  helperText: 'This is helper text for the user',
};
