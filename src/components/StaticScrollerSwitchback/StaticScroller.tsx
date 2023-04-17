import Flex from 'quarks/Flex';

import Switchback from 'components/Switchback/ScrollingSwitchback';

import type { StaticScrollerSwitchbackProps } from 'components/StaticScrollerSwitchback/StaticScrollerSwitchback';
import type { FC } from 'react';

const StaticScroller: FC<StaticScrollerSwitchbackProps> = ({ switchbacks }) => (
  <Flex flexDirection="column" marginTop={64} gap="96px" position="relative">
    {switchbacks?.map(segment => (
      <Switchback key={segment.id} {...segment} headingAs="h3" />
    ))}
  </Flex>
);

export default StaticScroller;
