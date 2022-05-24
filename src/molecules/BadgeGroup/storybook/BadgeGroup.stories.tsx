import { ComponentStory } from '@storybook/react';

import Badge from 'molecules/Badge/Badge';
import BadgeGroup from 'molecules/BadgeGroup/BadgeGroup';

const Template: ComponentStory<typeof BadgeGroup> = args => <BadgeGroup {...args} />;

export const badgeGroup = Template.bind({});
badgeGroup.parameters = {
  controls: {
    include: ['title', 'textColor', 'backgroundColor', 'badgePosition', 'children', 'icon'],
  },
};
badgeGroup.args = {
  title: "We've just released a new feature",
  textColor: { light: 'primary-700', dark: 'gray-700' },
  backgroundColor: { light: 'primary-50', dark: 'gray-50' },
  badgePosition: 'start',
  children: (
    <Badge
      size="sm"
      textTransform="uppercase"
      textColor="common-white"
      backgroundColor={{ light: 'primary-600', dark: 'gray-700' }}
    >
      New Feature
    </Badge>
  ),
};
