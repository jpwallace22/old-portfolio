import React from 'react';

import { Flex, Heading } from 'quarks';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { Maybe } from 'graphql/types.gen';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC } from 'react';
import type { StructuredData } from 'utils/structuredTextParser';

interface IHeading extends FlexProps {
  heading?: Maybe<string>;
  headingAs?: Maybe<string>;
  body?: Maybe<StructuredData>;
}

const StandardHeading: FC<IHeading> = ({ heading, headingAs = 'h3', body, ...props }) => (
  <StandardFadeIn>
    <Flex gap="24px" flexDirection="column" lg={{ maxWidth: '66%' }} {...props}>
      <Heading as={(headingAs as HeadingTypes) || 'h3'} textStyle="lg" lg={{ textStyle: 'xl' }}>
        {heading}
      </Heading>
      <StructuredTextParser text={body} textColor={{ dark: 'gray-500', light: 'purple-900' }} />
    </Flex>
  </StandardFadeIn>
);

export default StandardHeading;
