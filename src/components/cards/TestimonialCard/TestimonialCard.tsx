import { lazy } from 'react';

import { Container, Flex, Image, Link, Paragraph } from 'quarks';
import { IoIosQuote } from 'react-icons/io';
import styled from 'styled-components';

import color, { gradient } from 'atoms/colors/colors';

import type { TestimonialCardRecord } from 'graphql/generatedTypes';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

const Quotes = styled(IoIosQuote)`
  transform: scaleX(-1);
  position: absolute;
  top: -70px;
`;

type TestimonialCardProps = TestimonialCardRecord & FlexProps;

const TestimonialCard: FC<TestimonialCardProps> = ({ quote, person, ...props }) => (
  <Flex
    flexDirection="column"
    position="relative"
    gap="32px"
    width="100%"
    maxWidth="1376px"
    borderRadius="32px"
    boxShadow="lg"
    backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
    paddingX={24}
    paddingTop={48}
    paddingBottom={24}
    marginTop={48}
    justifyContent="center"
    lg={{ paddingAll: 64 }}
    xl={{ paddingAll: 80 }}
    css={`
      /* background-clip: padding-box;
      border: solid 5px transparent; */
      border-radius: 32px;
      scroll-snap-align: center;
      /* &:before {
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
      } */
    `}
    {...props}
  >
    <Quotes size={120} fill={color.primary[500]} />

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
          <Image
            fill
            loading="eager"
            alt={`${person?.firstName} ${person?.lastName}`}
            src={person?.thumbnail?.url || person.company?.logo?.url || ''}
            sizes="10vw"
            objectFit="contain"
          />
        </Container>
      )}
      <Link href={person?.website || ''}>
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
      </Link>
    </Flex>
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
  </Flex>
);

export default TestimonialCard;
