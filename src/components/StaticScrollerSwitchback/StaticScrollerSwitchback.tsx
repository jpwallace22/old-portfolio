import React from 'react';

import { useMediaQuery } from '@mui/material';

import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';

import StandardHeading from 'molecules/StandardHeading/StandardHeading';

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
      <StandardHeading heading={heading} body={body} />

      {isDesktop ? (
        <DynamicScroller switchbacks={switchbacks} {...props} />
      ) : (
        <StaticScroller switchbacks={switchbacks} {...props} />
      )}
    </Container>
  );
};

export default StaticScrollerSwitchback;
