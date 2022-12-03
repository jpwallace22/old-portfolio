import MUITooltip from '@mui/material/Tooltip';
import styled from 'styled-components';

import Paragraph from 'quarks/Paragraph';
import type { BasicProps } from 'quarks/interpolations/basic';
import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import type { FC, ReactElement, SyntheticEvent } from 'react';

const StyledTooltip = styled(MUITooltip).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

export interface TooltipProps extends BasicProps {
  /**
   * Tooltip reference element.
   * ⚠️ [Needs to be able to hold a ref.](https://mui.com/guides/composition/#caveat-with-refs)
   */
  children: ReactElement;
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: string | ReactElement;
  /**
   * If `true`, adds an arrow to the tooltip.
   */
  arrow?: boolean;
  /**
   * Rendered below the title. Used when more than a single line or phrase is needed in the tooltip.
   */
  description?: string | ReactElement;
  /**
   * Do not respond to focus-visible events.
   */
  disableFocusListener?: boolean;
  /**
   * Do not respond to hover events.
   */
  disableHoverListener?: boolean;
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user hovers over the tooltip before the `leaveDelay` is expired.
   */
  disableInteractive?: boolean;
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener?: boolean;
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   */
  followCursor?: boolean;
  /**
   * The number of milliseconds to wait before showing the tooltip. This prop won't impact the enter touch delay.
   */
  enterDelay?: number;
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay?: number;
  /**
   * Tooltip placement in regards to the hovered element.
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  /**
   * Callback fired when the component requests to be opened.
   * **Signature:**
   * `function(event: React.SyntheticEvent) => void`;
   * event: The event source of the callback.
   */
  onOpen?: (event: SyntheticEvent) => void;
  /**
   * Callback fired when the component requests to be closed.
   * **Signature:**
   * `function(event: React.SyntheticEvent) => void`;
   * event: The event source of the callback.
   */
  onClose?: (event: Event | SyntheticEvent<Element, Event>) => void;
}

const Tooltip: FC<TooltipProps> = ({ children, title, description, ...props }) => (
  <StyledTooltip
    cursor="pointer"
    title={
      <>
        {title}
        {description && (
          <Paragraph textColor={{ dark: 'gray-500', light: 'purple-900' }} textStyle="xs">
            {description}
          </Paragraph>
        )}
      </>
    }
    {...props}
  >
    {children}
  </StyledTooltip>
);

Tooltip.defaultProps = {
  arrow: true,
};

export default Tooltip;
