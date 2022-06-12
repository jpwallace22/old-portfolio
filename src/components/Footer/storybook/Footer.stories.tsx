import { ComponentStory } from '@storybook/react';

import Footer from '../Footer';

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const FooterStory = Template.bind({});
FooterStory.parameters = {
  controls: {
    include: [],
  },
};
FooterStory.args = {};
