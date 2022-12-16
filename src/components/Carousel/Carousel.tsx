import { lazy, useRef } from 'react';

import { Container, Flex } from 'quarks';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import Button from 'molecules/Button/Button';

import { getSemiRandomString } from 'utils/functions';

import type { TestimonialCardRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

const TestimonialCard = lazy(() => import('components/cards/TestimonialCard/TestimonialCard'));

type CarouselCardProps = BasicProps & {
  cards: TestimonialCardRecord[];
};

const Carousel: FC<CarouselCardProps> = ({ cards }) => {
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const gapBetweenCards = 80;

  return cards?.length > 0 ? (
    <Flex
      as="section"
      gap="32px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 64 }}
      lg={{ paddingY: 96, gap: '48px' }}
      position="relative"
    >
      <Container
        position="absolute"
        top="0"
        bottom="0"
        left="-16px"
        right="-16px"
        zIndex={2}
        css="background: linear-gradient(90deg, rgba(17,14,45,1) 0%, rgba(17,14,45,0) 7%, rgba(17,14,45,0) 93%, rgba(17,14,45,1) 100%); pointer-events: none;"
      />
      <Flex
        gap={`${gapBetweenCards}px`}
        flexWrap="nowrap"
        alignItems="stretch"
        overflowX="scroll"
        ref={scrollBoxRef}
        css={`
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {cards?.map(card => (
          <TestimonialCard key={getSemiRandomString()} flex="1 0 100%" {...card} />
        ))}
      </Flex>
      <Flex justifyContent="space-around" gap="32px">
        <Button
          flex="0 0 30%"
          hover={{ opacity: 1 }}
          height="82px"
          onClick={() => scrollBoxRef.current?.scrollBy(-50, 0)}
          cursor="pointer"
        >
          <TiChevronLeft size={40} />
        </Button>
        <Button
          flex="0 0 30%"
          transition="opacity .2s"
          hover={{ opacity: 1 }}
          onClick={() => scrollBoxRef.current?.scrollBy(50, 0)}
          cursor="pointer"
        >
          <TiChevronRight size={40} />
        </Button>
      </Flex>
    </Flex>
  ) : null;
};

export default Carousel;
