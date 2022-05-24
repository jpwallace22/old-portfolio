import { ComponentStory } from '@storybook/react';

import Grid from 'quarks/Grid';

export const Template: ComponentStory<typeof Grid> = args => <Grid {...args} />;

export const grid = Template.bind({});
grid.parameters = {
  controls: {
    include: [
      'gap',
      'children',
      'columnGap',
      'rowGap',
      'grid',
      'gridArea',
      'gridAutoColumns',
      'gridAutoFlow',
      'gridAutoRows',
      'gridColumn',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridTemplate',
      'gridTemplateAreas',
      'gridTemplateColumns',
      'gridTemplateRows',
    ],
  },
};

grid.args = {
  children: "I'm a Grid. Inspect me!",
};
