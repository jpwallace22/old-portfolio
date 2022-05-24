import CheckBoxTwoTone from '@mui/icons-material/CheckBoxTwoTone';
import IndeterminateCheckBoxTwoTone from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import MUICheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledFormControl = styled(FormControlLabel).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface CheckboxProps extends BasicProps {
  /**
   * Text label of the Checkbox.
   */
  label?: string;
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
   * Determines the size of the `Checkbox`.
   */
  size?: 'small' | 'large';
  /**
   * If `true`, the checkbox is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is required.
   */
  required?: boolean;
  /**
   * If `true`, the component appears indeterminate. This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a `data-indeterminate` attribute on the `input`.
   */
  indeterminate?: boolean;
  /**
   * displays text under the label to assist the user.
   */
  helperText?: string;
  /**
   * Callback fired when the state is changed.
   * **Signature:**
   * `function(event: React.SyntheticEvent, checked: boolean) => void`
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  size,
  helperText,
  indeterminate,
  disabled,
  required,
  id,
  value,
  checked,
  error,
  errorMessage,
  ...props
}) => {
  const labelComponent = (
    <>
      <Text fontSize={size === 'small' ? 14 : 16} fontWeight="semiBold" marginLeft={size === 'small' ? 8 : 12}>
        {label}
      </Text>
      {helperText && (
        <Text
          display="block"
          textStyle={size === 'small' ? 'xs' : 'sm'}
          opacity={disabled ? '0.38' : '1'}
          marginLeft={size === 'small' ? 8 : 12}
          textColor={error ? 'swaggy-600' : { light: 'gray-500', dark: 'gray-300' }}
        >
          {error ? errorMessage : helperText}
        </Text>
      )}
    </>
  );

  return (
    <StyledFormControl
      control={
        <MUICheckbox
          size={size}
          indeterminate={indeterminate}
          required={required}
          checkedIcon={<CheckBoxTwoTone />}
          indeterminateIcon={<IndeterminateCheckBoxTwoTone />}
        />
      }
      disabled={disabled}
      checked={checked}
      id={id}
      value={value}
      label={labelComponent}
      {...props}
    />
  );
};

Checkbox.defaultProps = {
  label: '',
  size: 'small',
};

export default Checkbox;
