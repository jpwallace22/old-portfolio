import { ComponentStory } from '@storybook/react';

import Switchback from '../Switchback';

const Template: ComponentStory<typeof Switchback> = args => <Switchback {...args} />;

export const SwitchbackStory = Template.bind({});
SwitchbackStory.parameters = {
  controls: {
    include: [],
  },
};
SwitchbackStory.args = {};
