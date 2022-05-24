import { ComponentStory } from '@storybook/react';

import BasicCard from 'components/Cards/BasicCard/BasicCard';

const Template: ComponentStory<typeof BasicCard> = args => <BasicCard {...args} />;

export const basicCard = Template.bind({});
basicCard.parameters = {
  controls: {
    include: [
      'heading',
      'subhead',
      'buttonText',
      'size',
      'endIcon',
      'startIcon',
      'iconStrokeWidth',
      'iconSize',
      'onClick',
      'href',
    ],
  },
};
basicCard.args = {
  buttonText: 'Apply Now',
  heading: 'Heading',
  subhead: 'Subhead',
  endIcon: undefined,
  startIcon: undefined,
  iconSize: '1.25rem',
  href: 'https://www.webstacks.com/',
  size: 'lg',
};
