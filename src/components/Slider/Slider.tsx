import { CaseStudyCardRecord } from 'graphql/generatedTypes';
import { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import { CaseStudyCard } from 'components/cards';

type SliderCardProps = BasicProps & {
  cards: CaseStudyCardRecord[];
};

const Slider: FC<SliderCardProps> = ({ cards }) => {
  const [activeIndex, setActive] = useState(0);
  const [cardWidths, setCardWidths] = useState<number[]>([]);

  const gapBetweenCards = 64;
  const cardCount = cards?.length;

  const handleLeft = () => (activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1));
  const handleRight = () => (activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1));

  const swipeHandler = useSwipeable({
    onSwipedRight: handleLeft,
    onSwipedLeft: handleRight,
    preventScrollOnSwipe: true,
  });

  const refPassthrough = (el: HTMLDivElement) => {
    swipeHandler.ref(el);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'Right' && cardCount) {
      handleRight();
    } else if (direction === 'Left' && cardCount) {
      handleLeft();
    }
  };

  useEffect(() => {
    const allCards = [...document.querySelectorAll('.card-deck-items')];
    setCardWidths(allCards.map(card => card.getBoundingClientRect().width));
  }, [activeIndex]);

  const calculateSlide = (arr: number[], gap: number) => arr.reduce((a, b) => a + b + gap, 0);

  return cards?.length > 1 ? (
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
          text={cards[activeIndex]?.body}
          textColor={{ dark: 'gray-500', light: 'purple-900' }}
          marginLeft={24}
          marginRight={24}
          textStyle="xl"
          justifyContent="center"
          width="300px"
          lg={{ display: 'flex' }}
          display="none"
        />
        <Container overflowX="hidden">
          <Flex
            gap={`${gapBetweenCards}px`}
            marginLeft={24}
            md={{ marginLeft: 32 }}
            xl={{ marginLeft: 40 }}
            transform={`translateX(-${calculateSlide(cardWidths.slice(0, activeIndex), gapBetweenCards)}px)`}
            transition="transform 0.5s"
            flexWrap="nowrap"
            alignItems="stretch"
          >
            {cards?.map(card => (
              <Flex alignItems="center" key={card?.internalName} className="card-deck-items">
                <CaseStudyCard {...card} />
              </Flex>
            ))}
          </Flex>
        </Container>
      </Flex>
      <ComponentPagination
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
