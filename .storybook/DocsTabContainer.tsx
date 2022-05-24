// see @https://github.com/hipstersmoothie/storybook-dark-mode/issues/180#issuecomment-1113122807
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import { useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

const DocsTabContainer = ({ context, ...props }: DocsContainerProps) => {
  const [isDark, setDark] = useState(false);
  const { id: storyId, storyById } = context;

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);

    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  const {
    parameters: { docs = {} },
  } = storyById(storyId);

  docs.theme = isDark ? themes.dark : themes.light;

  return <DocsContainer context={context} {...props} />;
};

export default DocsTabContainer;
