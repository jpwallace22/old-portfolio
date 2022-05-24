import { ComponentStory } from '@storybook/react';

import Blurs from 'atoms/blurs/storybook/Blurs';

const Template: ComponentStory<typeof Blurs> = () => <Blurs />;

export const blurs = Template.bind({});
blurs.parameters = {
  options: { showPanel: false },
};
