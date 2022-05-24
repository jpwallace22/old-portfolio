import { ComponentStory } from '@storybook/react';

import Badge from 'molecules/Badge/Badge';

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const normalBadge = Template.bind({});
normalBadge.parameters = {
  controls: {
    include: ['children', 'size', 'iconSize', 'backgroundColor', 'textColor', 'textTransform', 'startIcon', 'endIcon'],
  },
};

normalBadge.args = {
  children: 'Label',
  size: 'md',
  textTransform: 'capitalize',
  iconSize: '16px',
  variant: 'normal',
};

export const iconOnlyBadge = Template.bind({});
iconOnlyBadge.parameters = {
  controls: {
    include: ['children', 'size', 'backgroundColor', 'textColor'],
  },
};

iconOnlyBadge.args = {
  size: 'md',
  variant: 'iconOnly',
  children: 'Plus',
};
