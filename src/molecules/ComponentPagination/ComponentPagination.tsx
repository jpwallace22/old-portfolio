import { FC, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Flex from 'quarks/Flex';

import Button from 'molecules/Button/Button';
import Dots from 'molecules/ComponentPagination/Dots';

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
  dotsCount?: number;
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
}) => {
  const color = dotsColors[variant];

  const handleRightArrowClick = useCallback(() => onRightArrowClick(), [onRightArrowClick]);
  const handleLeftArrowClick = useCallback(() => onLeftArrowClick(), [onLeftArrowClick]);
  const handleActiveDot = useCallback((dotIndex: number) => onSetActiveDot(dotIndex), [onSetActiveDot]);

  return (
    <Flex gap="32px" justifyContent="center" alignItems="center">
      {isWithArrow && (
        <Button
          // tabIndex={0}
          textColor="gray-900"
          aria-label="left"
          onClick={handleLeftArrowClick}
        >
          <FiChevronLeft />
        </Button>
      )}
      <Flex gap="16px">
        {[...Array(dotsCount).keys()]?.map((_, index: number) =>
          index === activeDot ? (
            <Dots isActive color="gray-900" onClick={() => handleActiveDot(index)} />
          ) : (
            <Dots
              color={color}
              onKeyDown={e => e.key === 'Enter' && handleActiveDot(index)}
              onClick={() => handleActiveDot(index)}
            />
          ),
        )}
      </Flex>
      {isWithArrow && (
        <Button
          // tabIndex={0}
          textColor="gray-900"
          aria-label="right"
          onClick={handleRightArrowClick}
        >
          <FiChevronRight />
        </Button>
      )}
    </Flex>
  );
};

export default ComponentPagination;
