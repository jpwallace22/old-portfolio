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
  src: './blurBackground.jpg',
  width: '700px',
  height: 'auto',
  alt: '',
};
