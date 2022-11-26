import { FC, KeyboardEventHandler, MouseEventHandler, forwardRef } from 'react';

import { GetColorDefinition } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';

interface DotsProps extends BasicProps {
  /**
   * The flag for an active dot.
   */
  isActive?: boolean;
  /**
   * Color definition of the dot.
   */
  color?: GetColorDefinition;
  /**
   * Callback function fired on Keyboard `onKeyDown` event.
   */
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  /**
   * Callback function fired on Mouse `onClick` event.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Dots: FC<DotsProps> = forwardRef(({ isActive, color, onKeyDown, onClick, ...props }: DotsProps, ref) => (
  <Container
    tabIndex={0}
    cursor="pointer"
    width={isActive ? '48px' : '12px'}
    height="12px"
    borderRadius={isActive ? '200px' : '50%'}
    transition="width .2s, border-radius .5s"
    backgroundColor={color}
    backgroundImage={isActive && 'gradient-purpleRight'}
    onKeyDown={onKeyDown}
    onClick={onClick}
    {...ref}
    {...props}
  />
));

export default Dots;
