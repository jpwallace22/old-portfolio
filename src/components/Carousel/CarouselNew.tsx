import { CaseStudyCardRecord } from 'graphql/generatedTypes';
import { FC, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMeasure } from 'react-use';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import { CaseStudyCard } from 'components/cards';

type CarouselCardProps = BasicProps & {
  cards: CaseStudyCardRecord[];
};

const Carousel: FC<CarouselCardProps> = ({ cards }) => {
  const [activeIndex, setActive] = useState(0);
  const [ref, { width: cardWidth }] = useMeasure<HTMLDivElement>();
  const gapBetweenCards = 64;
  const cardCount = cards?.length;

  const swipeHandler = useSwipeable({
    onSwipedRight: () => (activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1)),
    onSwipedLeft: () => (activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1)),
  });

  const refPassthrough = (el: HTMLDivElement) => {
    swipeHandler.ref(el);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'Right' && cardCount) {
      activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1);
    } else if (direction === 'Left' && cardCount) {
      activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1);
    }
  };

  return (
    <Flex
      gap="24px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 64 }}
      lg={{ paddingY: 96, gap: '48px' }}
      {...swipeHandler}
      ref={refPassthrough}
    >
      <Container width={`${cardCount}00%`}>
        <Flex
          marginLeft={32}
          md={{ marginLeft: 32 }}
          xl={{ marginLeft: 40 }}
          gap={`${gapBetweenCards}px`}
          transform={`translateX(-${activeIndex * (cardWidth + gapBetweenCards)}px)`}
          transition="transform 0.5s"
          flexWrap="nowrap"
          alignItems="stretch"
        >
          {cards?.map(card => (
            <Flex alignItems="center" key={card?.internalName} ref={ref}>
              <CaseStudyCard {...card} />
            </Flex>
          ))}
        </Flex>
      </Container>
      <ComponentPagination
        dotsCount={cardCount}
        activeDot={activeIndex}
        onLeftArrowClick={() => handleArrowClick('Left')}
        onRightArrowClick={() => handleArrowClick('Right')}
        onSetActiveDot={dot => setActive(dot)}
      />
    </Flex>
  );
};

export default Carousel;
