import { useCallback } from 'react';

import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import Flex from 'quarks/Flex';

import Button from 'molecules/Button/Button';
import Dots from 'molecules/ComponentPagination/Dots';

import { getSemiRandomString } from 'utils/functions';

import type { FC } from 'react';

interface ComponentPaginationProps {
  /**
   * if `true`, arrows will show up.
   */
  isWithArrow?: boolean;
  /**
   * Determines between light or dark style dots.
   */
  variant?: 'light' | 'dark';
  /**
   * The current active dot.
   */
  activeDot?: number;
  /**
   * The number of dots to generate.
   */
  dotsCount: number;
  /**
   * Callback to set active dot.
   * @param dot number
   */
  onSetActiveDot: (dot: number) => void;
  /**
   * Callback fired when left arrow is clicked.
   */
  onLeftArrowClick: () => void;
  /**
   * Callback fired when right arrow is clicked.
   */
  onRightArrowClick: () => void;
  /**
   * If true, button will disable at end of list
   */
  disableOnEnd?: boolean;
  /**
   * If true, buttons will be disabled
   */
  disable?: boolean;
}

const dotsColors = {
  light: 'gray-200',
  dark: 'gray-700',
} as const;

const ComponentPagination: FC<ComponentPaginationProps> = ({
  isWithArrow = true,
  variant = 'light',
  activeDot,
  dotsCount,
  onSetActiveDot,
  onLeftArrowClick,
  onRightArrowClick,
  disableOnEnd,
  disable,
}) => {
  const color = dotsColors[variant];

  const handleRightArrowClick = useCallback(() => onRightArrowClick(), [onRightArrowClick]);
  const handleLeftArrowClick = useCallback(() => onLeftArrowClick(), [onLeftArrowClick]);
  const handleActiveDot = useCallback((dotIndex: number) => onSetActiveDot(dotIndex), [onSetActiveDot]);

  return (
    <Flex gap="32px" justifyContent="center" alignItems="center">
      {isWithArrow && (
        <Button
          boxShadow="none"
          textColor={disableOnEnd && activeDot === 0 ? 'transparent' : 'gray-900'}
          aria-label="left"
          hover={{ textColor: 'primary-600', backgroundColor: 'transparent' }}
          onClick={handleLeftArrowClick}
          disabled={disable || (disableOnEnd && activeDot === 0)}
          cursor="pointer"
        >
          <TiChevronLeft />
        </Button>
      )}
      <Flex gap="16px">
        {[...Array(dotsCount).keys()]?.map((_, index: number) =>
          index === activeDot ? (
            <Dots isActive color="gray-900" key={getSemiRandomString()} onClick={() => handleActiveDot(index)} />
          ) : (
            <Dots
              key={getSemiRandomString()}
              color={color}
              onKeyDown={e => e.key === 'Enter' && handleActiveDot(index)}
              onClick={() => handleActiveDot(index)}
              hover={{ backgroundColor: activeDot && index < activeDot ? 'primary-600' : 'purple-500' }}
            />
          ),
        )}
      </Flex>
      {isWithArrow && (
        <Button
          boxShadow="none"
          textColor={disableOnEnd && activeDot === dotsCount - 1 ? 'transparent' : 'gray-900'}
          aria-label="right"
          hover={{ textColor: 'purple-500', backgroundColor: 'transparent' }}
          onClick={handleRightArrowClick}
          disabled={disable || (disableOnEnd && activeDot === dotsCount - 1)}
          cursor="pointer"
        >
          <TiChevronRight />
        </Button>
      )}
    </Flex>
  );
};

export default ComponentPagination;
