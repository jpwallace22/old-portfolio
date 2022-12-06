import { Container, Flex, Image, Paragraph } from 'quarks';
import { IoIosQuote } from 'react-icons/io';
import styled from 'styled-components';

import color from 'atoms/colors/colors';

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
    gap="32px"
    width="94vw"
    maxWidth="1440px"
    borderRadius="24px"
    backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
    paddingX={24}
    paddingTop={48}
    paddingBottom={24}
    lg={{ paddingX: 48, paddingTop: 64, paddingBottom: 48 }}
    {...props}
  >
    <Quotes size={120} fill={color.primary[500]} />
    {quote && (
      <StructuredTextParser
        text={quote}
        fontSize={20}
        lineHeight={32}
        lg={{ fontSize: 24, lineHeight: 32 }}
        xl={{ fontSize: 30, lineHeight: 38 }}
        textColor={{ dark: 'gray-400', light: 'purple-800' }}
      />
    )}
    <Flex position="relative" width="100%" flexDirection="row" alignItems="center" gap="50px 40px">
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
      <Flex flexDirection="column" alignItems="start">
        {person?.firstName && person?.lastName && (
          <Paragraph textStyle="lg" fontWeight="bold" fontSize={14} lineHeight={18}>
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
