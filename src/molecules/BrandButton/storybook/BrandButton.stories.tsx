import { ComponentStory } from '@storybook/react';

import StoryBrandButtons from 'molecules/BrandButton/storybook/BrandButton';

const Template: ComponentStory<typeof StoryBrandButtons> = () => <StoryBrandButtons />;

export const brand = Template.bind({});
brand.parameters = {
  options: { showPanel: false },
  controls: {
    include: [
      'brandColor',
      'brandTextColor',
      'children',
      'disabled',
      'href',
      'onClick',
      'size',
      'startIcon',
      'variant',
    ],
  },
};
