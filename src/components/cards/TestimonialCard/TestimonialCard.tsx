import { Container, Flex, Image, Paragraph } from 'quarks';
import { IoIosQuote } from 'react-icons/io';
import styled from 'styled-components';

import color, { gradient } from 'atoms/colors/colors';

import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { TestimonialCardRecord } from 'graphql/generatedTypes';
import type { FC } from 'react';

const Quotes = styled(IoIosQuote)`
  transform: scaleX(-1);
  position: absolute;
  top: -70px;
`;

const TestimonialCard: FC<TestimonialCardRecord> = ({ quote, person, ...props }) => (
  <Flex
    flexDirection="column"
    position="relative"
    gap="32px"
    width="93.3vw"
    maxWidth="1376px"
    borderRadius="32px"
    boxShadow="lg"
    backgroundColor={{ dark: 'common-black', light: 'common-white' }}
    paddingX={24}
    paddingTop={48}
    paddingBottom={24}
    sm={{ width: '95.5vw' }}
    lg={{ paddingAll: 64, width: '94vw' }}
    xl={{ width: '95vw', paddingAll: 80 }}
    css={`
      background-clip: padding-box;
      border: solid 5px transparent;
      border-radius: 32px;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -3px;
        border-radius: inherit;
        background: ${gradient.purpleLeft};
      }
    `}
    {...props}
  >
    <Quotes size={120} fill={color.primary[500]} />
    {quote && (
      <StructuredTextParser
        text={quote}
        fontSize={24}
        lineHeight={38}
        lg={{ fontSize: 30, lineHeight: 38 }}
        xl={{ fontSize: 48, lineHeight: 56 }}
        textColor={{ dark: 'gray-400', light: 'purple-800' }}
      />
    )}
    <Flex position="relative" width="100%" flexDirection="row" alignItems="center" gap="50px 20px">
      {person && (
        <Container
          borderRadius="100px"
          overflowX="hidden"
          width="80px"
          height="80px"
          position="relative"
          flex="0 0 80px"
        >
          <Image layout="fill" src={person.company?.logo?.url || ''} alt="" objectFit="cover" />
        </Container>
      )}
      <Flex flexDirection="column" alignItems="start" gap="4px">
        {person?.firstName && person?.lastName && (
          <Paragraph textStyle="lg" fontWeight="bold" fontSize={16} lineHeight={18}>
            {`${person?.firstName} ${person?.lastName}`}
          </Paragraph>
        )}
        {(person?.role || person?.company?.name) && (
          <Paragraph textStyle="lg" fontWeight="regular">
            {person?.role ? `${person?.role} • ` : ''}
            {person?.company?.name}
          </Paragraph>
        )}
      </Flex>
    </Flex>
  </Flex>
);

export default TestimonialCard;
