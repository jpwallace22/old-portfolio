import { ComponentStory } from '@storybook/react';

import AlternatingSwitchbacks from '../AlternatingSwitchbacks';

const Template: ComponentStory<typeof AlternatingSwitchbacks> = args => <AlternatingSwitchbacks {...args} />;

export const AlternatingSwitchbacksStory = Template.bind({});
AlternatingSwitchbacksStory.parameters = {
  controls: {
    include: [],
  },
};
AlternatingSwitchbacksStory.args = {};
