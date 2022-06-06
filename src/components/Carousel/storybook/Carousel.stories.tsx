import { ComponentStory } from '@storybook/react';

import Carousel from 'components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Template: ComponentStory<typeof Carousel> = args => <Carousel {...args}></Carousel>;

export const CarouselStory = Template.bind({});
CarouselStory.parameters = {
  controls: {
    include: ['autoPlay', 'interval'],
  },
};
CarouselStory.args = {
  autoPlay: false,
  interval: 6,
};
