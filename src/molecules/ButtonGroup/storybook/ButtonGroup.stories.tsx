import { ComponentStory } from '@storybook/react';
import { FiArrowLeft, FiArrowRight, FiCircle, FiPlus } from 'react-icons/fi';

import Button from 'molecules/Button/Button';
import ButtonGroup from 'molecules/ButtonGroup/ButtonGroup';

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args}></ButtonGroup>;

export const leadingIcon = Template.bind({});
leadingIcon.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
leadingIcon.args = {
  children: (
    <>
      <Button startIcon={<FiCircle />} width="100%">
        Leading
      </Button>
      <Button startIcon={<FiCircle />} width="100%">
        Middle
      </Button>
      <Button startIcon={<FiCircle />} width="100%">
        Trailing
      </Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};

export const noIcon = Template.bind({});
noIcon.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
noIcon.args = {
  children: (
    <>
      <Button width="100%">Leading</Button>
      <Button width="100%">Middle</Button>
      <Button width="100%">Trailing</Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};

export const iconOnly = Template.bind({});
iconOnly.parameters = {
  controls: {
    include: ['disabled', 'fullWidth', 'variant', 'orientation'],
  },
};
iconOnly.args = {
  children: (
    <>
      <Button paddingX={12} width="100%">
        <FiArrowLeft size="20" />
      </Button>
      <Button paddingX={12} width="100%">
        <FiPlus size="20" />
      </Button>
      <Button paddingX={12} width="100%">
        <FiArrowRight size="20" />
      </Button>
    </>
  ),
  disabled: false,
  fullWidth: false,
  variant: 'outlined',
  orientation: 'horizontal',
};
