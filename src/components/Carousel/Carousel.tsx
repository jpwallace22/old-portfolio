import { lazy, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Flex } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import { BlogListingCard } from 'components/cards';

import useDarkMode from 'contexts/ThemeProvider';

import type { BlogPostRecord, TestimonialCardRecord } from 'graphql/types.gen';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, MutableRefObject, UIEvent } from 'react';

const TestimonialCard = lazy(() => import('components/cards/TestimonialCard/TestimonialCard'));

type CarouselCardProps = BasicProps & {
  cards: Array<TestimonialCardRecord | BlogPostRecord>;
  showPagination?: boolean;
};

type ScrollPosition = 'start' | 'end' | null;

const getEdgeGradient = (scrollPos: ScrollPosition, rgb: [number, number, number]): string => {
  const rgbValues = `${rgb[0] + ',' + rgb[1] + ',' + rgb[2]}`;
  if (scrollPos) {
    return scrollPos !== 'start'
      ? `linear-gradient(90deg, rgb(${rgbValues}) 0%, rgba(${rgbValues}, 0) 8%)`
      : ` linear-gradient(90deg, rgba(${rgbValues}, 0) 92%, rgb(${rgbValues}) 100%)`;
  }

  return `linear-gradient(90deg, rgb(${rgbValues}) 0%, rgba(${rgbValues}, 0) 8%), linear-gradient(90deg, rgba(${rgbValues}, 0) 92%, rgb(${rgbValues}) 100%)`;
};

const Carousel: FC<CarouselCardProps> = ({ cards, showPagination = true }) => {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>('start');
  const [active, setActive] = useState(0);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const cardCount = cards.length;
  const isDesktop = useMediaQuery(media.lg);

  const [isDark] = useDarkMode();

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
    if (!scrollBoxRef.current?.scrollWidth) return;
    const element = target as HTMLDivElement;
    const leftScroll = element.scrollLeft;
    const pane = scrollBoxRef.current?.scrollWidth / cardCount;

    switch (true) {
      case leftScroll === 0:
        setScrollPos('start');
        break;
      case leftScroll > 0 && leftScroll <= pane * (cardCount - 2) + pane / 2:
        setScrollPos(null);
        break;
      case leftScroll + pane > pane * (cardCount - 2):
        setScrollPos('end');
        break;
      default:
        null;
    }
  };

  const isBlog = (card: TestimonialCardRecord | BlogPostRecord): card is BlogPostRecord =>
    card.__typename === 'BlogPostRecord';

  return cards?.length > 0 ? (
    <>
      <Flex
        width="100%"
        gap="32px"
        flexDirection="column"
        justifyContent="center"
        lg={{ gap: '48px' }}
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
          backgroundImage={getEdgeGradient(scrollPos, isDark ? [17, 14, 45] : [255, 255, 255])}
          css={`
            pointer-events: none;
          `}
        />
        <Flex
          gap="32px"
          flexWrap="nowrap"
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
          {cards?.map((card, i) =>
            isBlog(card) ? (
              <BlogListingCard
                key={card.id}
                marginTop={16}
                cursor="pointer"
                width="unset"
                flex="1 0 100%"
                sm={{ flex: '1 0 75%' }}
                md={{ flex: '1 0 50%' }}
                xl={{ flex: '1 0 30%' }}
                {...card}
              />
            ) : (
              <TestimonialCard
                key={card.id}
                flex="1 0 100%"
                lg={{ flex: '1 0 80%' }}
                index={i}
                setActive={setActive}
                {...card}
              />
            ),
          )}
        </Flex>
        {showPagination && (
          <ComponentPagination
            dotsCount={cardCount}
            onLeftArrowClick={() => handleButtonClick('left')}
            onRightArrowClick={() => handleButtonClick('right')}
            onSetActiveDot={i => handleDotClick(i)}
            activeDot={active}
            disableOnEnd
            showArrows={isDesktop}
          />
        )}
      </Flex>
    </>
  ) : null;
};

export default Carousel;
