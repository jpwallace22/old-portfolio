import MUIButtonGroup from '@mui/material/ButtonGroup';
import { Children, FC, ReactNode, cloneElement, isValidElement } from 'react';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledButtonGroup = styled(MUIButtonGroup).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface ButtonGroupProps extends BasicProps {
  /**
   * `<Button>` component to be used within the `ButtonGroup`
   */
  children: ReactNode;
  /**
   * Determines between an outlined or text style button
   */
  variant?: 'text' | 'outlined';
  /**
   * Orientation of button layout, either in vertical or horizontal
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * If `true`, the button is disabled.
   */
  disabled?: boolean;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, fullWidth, ...props }) => {
  const buttons = !fullWidth
    ? children
    : Children.map<ReactNode, ReactNode>(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            width: '100%',
          });
        }
      });

  return (
    <StyledButtonGroup fullWidth={fullWidth} {...props}>
      {buttons}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;

ButtonGroup.defaultProps = {
  variant: 'outlined',
  orientation: 'horizontal',
};
