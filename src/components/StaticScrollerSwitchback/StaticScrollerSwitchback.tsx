import React from 'react';

import { useMediaQuery } from '@mui/material';

import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { ScrollingSwitchbackRecord } from 'graphql/types.gen';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

const DynamicScroller = React.lazy(() => import('components/StaticScrollerSwitchback/DynamicScroller'));
const StaticScroller = React.lazy(() => import('components/StaticScrollerSwitchback/StaticScroller'));

export type StaticScrollerSwitchbackProps = BasicProps & ScrollingSwitchbackRecord;

const StaticScrollerSwitchback: FC<StaticScrollerSwitchbackProps> = ({ heading, body, switchbacks, ...props }) => {
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Container {...props}>
      <Flex flexDirection="column" textAlign="center" gap="1rem">
        {heading && (
          <Heading textStyle="xs" lg={{ textStyle: 'md' }} xl={{ textStyle: 'lg' }}>
            {heading}
          </Heading>
        )}
        {body && <StructuredTextParser text={body} />}
      </Flex>
      {isDesktop ? (
        <DynamicScroller switchbacks={switchbacks} {...props} />
      ) : (
        <StaticScroller switchbacks={switchbacks} {...props} />
      )}
    </Container>
  );
};

export default StaticScrollerSwitchback;
