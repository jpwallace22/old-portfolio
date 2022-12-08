import { lazy, useEffect, useState } from 'react';

import { Container, Flex } from 'quarks';
import { useSwipeable } from 'react-swipeable';

import { getSemiRandomString } from 'utils/functions';

import type { CaseStudyCardRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

const CaseStudyCard = lazy(() => import('components/cards/CaseStudyCard/CaseStudyCard'));
const ComponentPagination = lazy(() => import('molecules/ComponentPagination/ComponentPagination'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

type SliderCardProps = BasicProps & {
  cards: CaseStudyCardRecord[];
};

const Slider: FC<SliderCardProps> = ({ cards }) => {
  const [activeIndex, setActive] = useState(0);
  const [cardWidths, setCardWidths] = useState<number[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const gapBetweenCards = 64;
  const cardCount = cards?.length;

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
  };

  useEffect(() => {
    const getCards = [...document.querySelectorAll('.card-deck-items')];
    setCardWidths(getCards.map(card => card.getBoundingClientRect().width));
  }, [activeIndex]);

  const calculateSlideAnimation = (arr: number[], gap: number) => arr.reduce((a, b) => a + b + gap, 0);

  return cards?.length > 0 ? (
    <Flex
      as="section"
      gap="24px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 64 }}
      lg={{ paddingY: 96, gap: '48px' }}
      {...swipeHandler}
      ref={refPassthrough}
    >
      <StructuredTextParser
        text={cards[activeIndex]?.body}
        textColor={{ dark: 'gray-500', light: 'purple-900' }}
        paddingX={24}
        justifyContent="flex-end"
        width="100%"
        minHeight="150px"
        lg={{ display: 'none' }}
      />
      <Flex width={`calc(${cardCount}00% + 300px)`} flexDirection="column" lg={{ flexDirection: 'row' }}>
        <StructuredTextParser
          flex="0 0 300px"
          text={cards[activeIndex]?.body}
          textColor={{ dark: 'gray-500', light: 'purple-900' }}
          marginLeft={24}
          marginRight={24}
          textStyle="xl"
          justifyContent="center"
          lg={{ display: 'flex' }}
          display="none"
        />
        <Container overflowX="hidden">
          <Flex
            gap={`${gapBetweenCards}px`}
            marginLeft={24}
            md={{ marginLeft: 32 }}
            xl={{ marginLeft: 40 }}
            transform={`translateX(-${calculateSlideAnimation(cardWidths.slice(0, activeIndex), gapBetweenCards)}px)`}
            transition="transform 0.5s"
            flexWrap="nowrap"
            alignItems="stretch"
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {cards.map(card => (
              <Flex alignItems="center" key={getSemiRandomString()} className="card-deck-items">
                <CaseStudyCard {...card} />
              </Flex>
            ))}
          </Flex>
        </Container>
      </Flex>
      <ComponentPagination
        disable={isButtonDisabled}
        dotsCount={cardCount}
        activeDot={activeIndex}
        onLeftArrowClick={() => handleArrowClick('Left')}
        onRightArrowClick={() => handleArrowClick('Right')}
        onSetActiveDot={dot => setActive(dot)}
      />
    </Flex>
  ) : null;
};

export default Slider;
