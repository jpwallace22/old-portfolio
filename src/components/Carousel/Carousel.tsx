import { lazy, useRef, useState } from 'react';

import { Flex } from 'quarks';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import { getSemiRandomString } from 'utils/functions';

import type { TestimonialCardRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MutableRefObject } from 'react';

const TestimonialCard = lazy(() => import('components/cards/TestimonialCard/TestimonialCard'));

type CarouselCardProps = BasicProps & {
  cards: TestimonialCardRecord[];
};

const Carousel: FC<CarouselCardProps> = ({ cards }) => {
  const [active, setActive] = useState(0);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const cardCount = cards.length;
  const gapBetweenCards = 32;

  const doScrolling = (targetRef: MutableRefObject<HTMLDivElement | null>, dir: 'left' | 'right') => {
    const target = targetRef.current;
    if (dir === 'left') {
      target?.scrollBy(-100, 0);
    } else {
      target?.scrollBy(100, 0);
    }
  };

  const handleClick = (dir: 'left' | 'right') => {
    setTimeout(() => doScrolling(scrollBoxRef, dir), 1);
  };

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
      <Flex
        gap={`${gapBetweenCards}px`}
        flexWrap="nowrap"
        alignItems="center"
        overflowX="scroll"
        ref={scrollBoxRef}
        css={`
          overflow-anchor: none !important;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {cards?.map((card, i) => (
          <TestimonialCard flex="1 0 100%" key={getSemiRandomString()} {...card} index={i} setActive={setActive} />
        ))}
      </Flex>
      <ComponentPagination
        dotsCount={cardCount}
        onLeftArrowClick={() => handleClick('left')}
        onRightArrowClick={() => handleClick('right')}
        onSetActiveDot={i => setActive(i)}
        activeDot={active}
      />
    </Flex>
  ) : null;
};

export default Carousel;
