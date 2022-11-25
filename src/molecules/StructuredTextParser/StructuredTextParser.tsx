import Flex from 'quarks/Flex';
import Paragraph from 'quarks/Paragraph';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { TextProps } from 'quarks/interpolations/text';

import structuredTextParser from 'utils/structuredTextParser';

import type { FC } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

type StructuredTextProps = TextProps &
  FlexProps & {
    text?: StructuredTextGraphQlResponse | Record<string, unknown> | null;
  };

const StructuredTextParser: FC<StructuredTextProps> = ({ text, textColor, ...props }) => (
  <Paragraph as={Flex} flexDirection="column" gap="24px" {...props}>
    {structuredTextParser(text, textColor)}
  </Paragraph>
);

export default StructuredTextParser;
