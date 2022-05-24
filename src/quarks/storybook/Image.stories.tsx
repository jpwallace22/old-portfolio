import { ComponentStory } from '@storybook/react';

import Image from 'quarks/Image';

export const Template: ComponentStory<typeof Image> = args => <Image {...args}></Image>;

export const image = Template.bind({});
image.parameters = {
  controls: {
    include: ['src', 'width', 'height', 'opacity', 'objectFit', 'objectPosition', 'alt'],
  },
};

image.args = {
  unoptimized: true,
  src: './blurBackground.jpg',
  layout: 'fill',
  alt: '',
};
