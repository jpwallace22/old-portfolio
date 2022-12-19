import { lazy, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Flex } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import type { TestimonialCardRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MutableRefObject, UIEvent } from 'react';

const TestimonialCard = lazy(() => import('components/cards/TestimonialCard/TestimonialCard'));

type CarouselCardProps = BasicProps & {
  cards: TestimonialCardRecord[];
};

const Carousel: FC<CarouselCardProps> = ({ cards }) => {
  const [scrollPos, setScrollPos] = useState<'start' | 'end' | null>('start');
  const [active, setActive] = useState(0);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const cardCount = cards.length;
  const isDesktop = useMediaQuery(media.lg);

  const doScrolling = (targetRef: MutableRefObject<HTMLDivElement | null>, dir: 'left' | 'right') => {
    const target = targetRef.current;
    if (dir === 'left') {
      target?.scrollBy(-100, 0);
    } else {
      target?.scrollBy(100, 0);
    }
  };

  const handleButtonClick = (dir: 'left' | 'right') => {
    setTimeout(() => doScrolling(scrollBoxRef, dir), 1);
  };

  const handleDotClick = (index: number) => {
    if (!scrollBoxRef.current?.scrollWidth) return;
    const pane = scrollBoxRef.current?.scrollWidth / cardCount;
    scrollBoxRef.current?.scrollTo(index * pane, 0);
  };

  const handleScroll = ({ target }: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    const element = target as HTMLDivElement;
    const leftScroll = element.scrollLeft;
    const pane = window.innerWidth;

    switch (true) {
      case leftScroll === 0:
        setScrollPos('start');
        break;
      case leftScroll > 0 && leftScroll < pane * (cardCount - 2) + pane / 1.2:
        setScrollPos(null);
        break;
      case leftScroll > pane * (cardCount - 2):
        setScrollPos('end');
        break;
      default:
        null;
    }
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
      <Container
        position="absolute"
        top="0"
        bottom="0"
        left="-2px"
        right="-2px"
        zIndex={2}
        transition="background .5s ease"
        css={`
          background: ${scrollPos !== 'start' &&
            'linear-gradient(90deg, rgba(17, 14, 45, 1) 0%, rgba(17, 14, 45, 0) 8%)'}${!scrollPos && ','} ${scrollPos !== 'end' && 'linear-gradient(90deg, rgba(17, 14, 45, 0) 92%, rgba(17, 14, 45, 1) 100%)'};
          pointer-events: none;
        `}
      />
      <Flex
        gap="32px"
        flexWrap="nowrap"
        // alignItems="center"
        alignItems="stretch"
        overflowX="scroll"
        ref={scrollBoxRef}
        onScroll={e => handleScroll(e)}
        css={`
          overflow-anchor: none;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {cards?.map((card, i) => (
          <TestimonialCard
            key={card.id}
            flex="1 0 100%"
            lg={{ flex: '1 0 80%' }}
            index={i}
            setActive={setActive}
            {...card}
          />
        ))}
      </Flex>
      <ComponentPagination
        dotsCount={cardCount}
        onLeftArrowClick={() => handleButtonClick('left')}
        onRightArrowClick={() => handleButtonClick('right')}
        onSetActiveDot={i => handleDotClick(i)}
        activeDot={active}
        disableOnEnd
        showArrows={isDesktop}
      />
    </Flex>
  ) : null;
};

export default Carousel;
