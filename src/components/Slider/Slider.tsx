import { lazy, useEffect, useState } from 'react';

import { Container, Flex } from 'quarks';
import { useSwipeable } from 'react-swipeable';

import type { CaseStudyCardRecord, TestimonialCardRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

const CaseStudyCard = lazy(() => import('components/cards/CaseStudyCard/CaseStudyCard'));
const TestimonialCard = lazy(() => import('components/cards/TestimonialCard/TestimonialCard'));
const ComponentPagination = lazy(() => import('molecules/ComponentPagination/ComponentPagination'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

type SliderCardProps = BasicProps & {
  cards: CaseStudyCardRecord[] | TestimonialCardRecord[];
  detailsVariant?: boolean;
};

const Slider: FC<SliderCardProps> = ({ cards, detailsVariant }) => {
  const [activeIndex, setActive] = useState(0);
  const [cardWidths, setCardWidths] = useState<number[]>([]);

  const isCaseStudy = (arr: SliderCardProps['cards']): arr is CaseStudyCardRecord[] =>
    arr[0].__typename === 'CaseStudyCardRecord';

  const gapBetweenCards = detailsVariant ? 64 : 32;
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
      {detailsVariant && isCaseStudy(cards) && (
        <StructuredTextParser
          text={cards[activeIndex]?.body}
          textColor={{ dark: 'gray-500', light: 'purple-900' }}
          paddingX={24}
          justifyContent="flex-end"
          width="100%"
          minHeight="150px"
          lg={{ display: 'none' }}
        />
      )}
      <Flex width={`calc(${cardCount}00% + 300px)`} flexDirection="column" lg={{ flexDirection: 'row' }}>
        {detailsVariant && isCaseStudy(cards) && (
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
        )}
        <Container overflowX={detailsVariant && 'hidden'}>
          <Flex
            gap={`${gapBetweenCards}px`}
            marginLeft={detailsVariant && 24}
            md={{ marginLeft: detailsVariant && 32 }}
            xl={{ marginLeft: detailsVariant && 40 }}
            transform={`translateX(-${calculateSlide(cardWidths.slice(0, activeIndex), gapBetweenCards)}px)`}
            transition="transform 0.5s"
            flexWrap="nowrap"
            alignItems="stretch"
          >
            {isCaseStudy(cards)
              ? cards?.map(card => (
                  <Flex alignItems="center" key={card?.internalName} className="card-deck-items">
                    <CaseStudyCard {...card} />
                  </Flex>
                ))
              : cards?.map(card => (
                  <Flex alignItems="center" key={card?.internalName} className="card-deck-items">
                    <TestimonialCard {...card} />
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
