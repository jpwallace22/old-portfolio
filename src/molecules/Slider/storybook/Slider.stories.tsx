import { ComponentStory } from '@storybook/react';

import Container from 'quarks/Container';

import Slider from 'molecules/Slider/Slider';

const Template: ComponentStory<typeof Slider> = args => (
  <Container height="200px">
    <Slider {...args} />
  </Container>
);

export const slider = Template.bind({});
slider.parameters = {
  controls: {
    include: [
      'ariaLabel',
      'ariaLabelledBy',
      'ariaValueText',
      'defaultValue',
      'disabled',
      'disableSwap',
      'getAriaLabel',
      'getAriaValueText',
      'marks',
      'max',
      'min',
      'name',
      'onChange',
      'onChangeCommitted',
      'orientation',
      'scale',
      'step',
      'track',
      'value',
      'valueLabelDisplay',
      'valueLabelFormat',
    ],
  },
};
slider.args = {
  marginTop: 32,
  valueLabelDisplay: 'auto',
  defaultValue: 42,
  orientation: 'horizontal',
  disabled: false,
  disableSwap: false,
  marks: false,
  step: 1,
  min: 0,
  max: 100,
  name: 'oneSlidyBoi',
  track: 'normal',
  ariaLabel: 'oneSlidyBoi',
  ariaLabelledBy: 'theLabel',
  ariaValueText: 'The amount you love Webstacks',
  width: '98%',
};
