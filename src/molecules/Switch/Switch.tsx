import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import styled from 'styled-components';

import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, SyntheticEvent } from 'react';

const StyledFormControl = styled(FormControlLabel).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface SwitchProps extends BasicProps {
  /**
   * Text label of the Switch button
   */
  label: string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * displays error message under the label (replaces helper text)
   */
  errorMessage?: string;
  /**
   * If `true`, the component is places in the error state
   */
  error?: boolean;
  /**
   * Determines the size of the `Switch` and `label`
   */
  size?: 'large' | 'small';
  /**
   * If `true`, the component is required.
   */
  required?: boolean;
  /**
   * Displays text under the label to assist the user
   */
  helperText?: string;
  /**
   * Callback fired when the state is changed.
   * **Signature:**
   * `function(event: React.ChangeEvent<HTMLInputElement>) => void`
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | boolean;
}

const Switch: FC<SwitchProps> = ({
  label,
  size,
  checked,
  required,
  value,
  helperText,
  id,
  error,
  errorMessage,
  ...props
}) => (
  <StyledFormControl
    control={<MuiSwitch size={size} required={required} />}
    value={value}
    checked={checked}
    id={id}
    label={
      <>
        <Text
          textStyle="md"
          fontSize={size === 'small' ? 14 : 16}
          fontWeight="semiBold"
          lineHeight={size === 'small' ? 20 : 24}
          alignSelf="flex-start"
        >
          {label}
        </Text>
        <Text
          display="block"
          textStyle={size === 'small' ? 'xs' : 'sm'}
          textColor={error ? 'danger-600' : { light: 'gray-500', dark: 'gray-300' }}
        >
          {error ? errorMessage : helperText}
        </Text>
      </>
    }
    {...props}
  />
);

Switch.defaultProps = {
  label: '',
  size: 'large',
};

export default Switch;
