import { FC, useState } from 'react';
import { useMeasure } from 'react-use';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import type { BasicProps } from 'quarks/interpolations/basic';

import ComponentPagination from 'molecules/ComponentPagination/ComponentPagination';

import { getSemiRandomString } from 'utils/functions';

type CarouselCardProps = BasicProps & {
  cards: Array<Record<string | number, unknown>>;
};

const Carousel: FC<CarouselCardProps> = ({ cards }) => {
  const [activeIndex, setActive] = useState(0);
  const [ref, { width: cardWidth }] = useMeasure<HTMLDivElement>();
  const gapBetweenCards = 64;
  const cardCount = cards?.length;

  const handleArrowClick = (direction: string) => {
    if (direction === 'Right' && cardCount) {
      activeIndex === cardCount - 1 ? setActive(0) : setActive(activeIndex + 1);
    } else if (direction === 'Left' && cardCount) {
      activeIndex === 0 ? setActive(cardCount - 1) : setActive(activeIndex - 1);
    }
  };

  return (
    <Flex
      gap="48px"
      flexDirection="column"
      paddingY={48}
      justifyContent="center"
      md={{ paddingY: 64 }}
      lg={{ paddingY: 96 }}
    >
      <Container width={`${cardCount}00%`}>
        <Flex
          md={{ marginLeft: 32 }}
          xl={{ marginLeft: 40 }}
          gap="64px"
          transform={`translateX(-${activeIndex * (cardWidth + gapBetweenCards)}px)`}
          transition="transform 0.5s"
          flexWrap="nowrap"
          alignItems="stretch"
        >
          {cards?.map(card => (
            <Flex alignItems="center" key={getSemiRandomString()} ref={ref}>
              {card?.title as string}
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
