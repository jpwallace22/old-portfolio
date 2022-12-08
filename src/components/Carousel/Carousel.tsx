import { lazy, useEffect, useState } from 'react';

import { Container, Flex } from 'quarks';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
import { useSwipeable } from 'react-swipeable';

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
  const [activeIndex, setActive] = useState(2);
  const [cardWidths, setCardWidths] = useState<number[]>([]);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hover, setHover] = useState(0);

  const allCards = [cards[cards.length - 2], cards[cards.length - 1], ...cards, cards[0], cards[1]];
  const cardCount = allCards?.length;
  const gapBetweenCards = 64;

  const leftClick = () => (activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1));
  const rightClick = () => (activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1));

  const swipeHandler = useSwipeable({
    onSwipedRight: leftClick,
    onSwipedLeft: rightClick,
    preventScrollOnSwipe: true,
  });

  const refPassthrough = (el: HTMLDivElement) => {
    swipeHandler.ref(el);
  };

  const handleArrowClick = (direction: string) => {
    setHover(0);
    if (direction === 'Right' && cardCount) {
      rightClick();
      setIsButtonDisabled(true);
    } else if (direction === 'Left' && cardCount) {
      leftClick();
      setIsButtonDisabled(true);
    }
  };

  const handleTransitionEnd = () => {
    setIsButtonDisabled(false);
    if (activeIndex === 1) {
      setShouldAnimate(false);
      setActive(cardCount - 3);
    } else if (activeIndex === cardCount - 2) {
      setShouldAnimate(false);
      setActive(2);
    }
  };

  useEffect(() => {
    const getCards = [...document.querySelectorAll('.carousel-cards')];
    setCardWidths(getCards.map(card => card.getBoundingClientRect().width));
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === cardCount - 3) {
      setShouldAnimate(true);
    } else if (activeIndex === 2) {
      setShouldAnimate(true);
    }
  }, [activeIndex, cardCount]);

  const calculateSlideAnimation = (arr: number[], gap: number, hvr: number) =>
    arr.reduce((a, b) => a + b + gap + hvr, 0);

  return cards?.length > 0 ? (
    <Flex
      as="section"
      gap="32px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 64 }}
      lg={{ paddingY: 96, gap: '48px' }}
      {...swipeHandler}
      ref={refPassthrough}
    >
      <Flex width={`calc(${cardCount}00% + 300px)`} flexDirection="column" lg={{ flexDirection: 'row' }}>
        <Container>
          <Flex
            gap={`${gapBetweenCards}px`}
            transform={`translateX(-${calculateSlideAnimation(
              cardWidths.slice(0, activeIndex),
              gapBetweenCards,
              hover,
            )}px)`}
            transition={shouldAnimate && 'transform 0.5s'}
            flexWrap="nowrap"
            alignItems="stretch"
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {allCards?.map(card => (
              <Flex alignItems="center" key={getSemiRandomString()} className="carousel-cards">
                <TestimonialCard {...card} />
              </Flex>
            ))}
          </Flex>
        </Container>
      </Flex>
      <Flex justifyContent="space-around" gap="32px">
        <Button
          flex="0 0 30%"
          backgroundColor="purple-700"
          opacity={0.4}
          transition="opacity .2s"
          hover={{ opacity: 1 }}
          height="82px"
          onMouseEnter={() => setHover(-10)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleArrowClick('Left')}
          cursor="pointer"
          disabled={isButtonDisabled}
        >
          <TiChevronLeft size={40} />
        </Button>
        <Button
          flex="0 0 30%"
          height="82px"
          backgroundColor="purple-700"
          opacity={0.4}
          transition="opacity .2s"
          hover={{ opacity: 1 }}
          onMouseEnter={() => setHover(10)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleArrowClick('Right')}
          cursor="pointer"
          disabled={isButtonDisabled}
        >
          <TiChevronRight size={40} />
        </Button>
      </Flex>
    </Flex>
  ) : null;
};

export default Carousel;
