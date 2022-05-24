import { ComponentStory } from '@storybook/react';

import Button from 'molecules/Button/Button';

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const contained = Template.bind({});
contained.parameters = {
  controls: {
    include: [
      'backgroundColor',
      'borderColor',
      'children',
      'disabled',
      'endIcon',
      'href',
      'iconSize',
      'onClick',
      'size',
      'startIcon',
      'textColor',
      'variant',
    ],
  },
};
contained.args = {
  children: 'Button CTA',
  variant: 'contained',
  disabled: false,
  size: 'medium',
  iconSize: '1.25rem',
  href: 'https://www.webstacks.com/',
};

export const text = Template.bind({});
text.parameters = {
  controls: {
    include: [
      'backgroundColor',
      'borderColor',
      'children',
      'disabled',
      'endIcon',
      'href',
      'iconSize',
      'onClick',
      'size',
      'startIcon',
      'textColor',
      'variant',
    ],
  },
};
text.args = {
  children: 'Button CTA',
  variant: 'text',
  disabled: false,
  size: 'medium',
  iconSize: '1.25rem',
  href: 'https://www.webstacks.com/',
};
