import CheckBoxTwoTone from '@mui/icons-material/CheckBoxTwoTone';
import IndeterminateCheckBoxTwoTone from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import MUICheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import { FC, ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledFormControlLabel = styled(FormControlLabel).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

const sx = {
  '.MuiFormControlLabel-label': {
    width: '100%',
  },
  '.MuiCheckbox-root': {
    alignSelf: 'center',
  },
  '&:hover .MuiCheckbox-root': {
    backgroundColor: color.primary[50],
    color: color.primary[600],
    borderRadius: '4px',
  },
  '.MuiRadio-root': {
    alignSelf: 'center',
    marginTop: '0px',
  },
  '&:hover .MuiRadio-root': {
    backgroundColor: color.primary[50],
    color: color.primary[600],
  },
  '.Mui-checked ~ .MuiFormControlLabel-label .helper-text': {
    color: color.primary[500],
  },
  '.Mui-checked ~ .MuiFormControlLabel-label .content-text span': {
    color: color.primary[500],
  },
  '.Mui-checked ~ .MuiFormControlLabel-label .header-text': {
    color: color.primary[800],
  },
};

interface CheckboxGroupProps extends BasicProps {
  /**
   * Text label of the Checkbox.
   */
  label: string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is required.
   */
  required?: boolean;
  /**
   * If `true`, the checkbox is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component appears indeterminate. This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a `data-indeterminate` attribute on the `input`.
   */
  indeterminate?: boolean;
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
  value: string | boolean;
  /**
   * `<Checkbox>` or `<Radio>` component to be used within the `CheckboxGroup`. Default position is left, unless an icon exists, then it is right
   */
  controlStyle: 'checkbox' | 'radio';
  /**
   * Determines the size of the checkbox
   */
  checkboxSize?: 'small' | 'large';
  /**
   * Display additional text to the right of or under the label
   */
  content?: ReactNode;
  /**
   * Displays text under the label to assist the user.
   */
  helperText?: string;
  /**
   * Optional icon that will always be on the left of the component
   */
  icon?: ReactNode;
  /**
   * Choose the horizontal size of the icon, with height set automatically. Takes any valid CSS width.
   */
  iconSize?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  label,
  disabled,
  required,
  checked,
  indeterminate,
  controlStyle,
  content,
  helperText,
  icon,
  iconSize,
  checkboxSize,
  ...props
}) => {
  const controlComponent =
    controlStyle === 'checkbox' ? (
      <MUICheckbox
        size={checkboxSize}
        required={required}
        indeterminate={indeterminate}
        checkedIcon={<CheckBoxTwoTone />}
        indeterminateIcon={<IndeterminateCheckBoxTwoTone />}
        sx={{
          marginX: '16px',
          marginY: '0px',
        }}
      />
    ) : (
      <MuiRadio size={checkboxSize} required={required} sx={{ marginX: '16px' }} />
    );

  const headerComponent = (
    <Text
      className="header-text"
      textStyle="sm"
      fontWeight="semiBold"
      textColor={{
        light: checked ? 'primary-800' : 'common-black',
        dark: checked ? 'primary-800' : 'common-white',
      }}
    >
      {label}
    </Text>
  );

  const helperTextComponent = helperText && (
    <Text
      className="helper-text"
      textStyle="sm"
      opacity={disabled ? '0.38' : '1'}
      textColor={{
        light: checked ? 'primary-500' : 'gray-500',
        dark: checked ? 'primary-500' : 'gray-300',
      }}
    >
      {helperText}
    </Text>
  );

  const labelComponent = (
    <Flex alignItems="center">
      {icon && (
        <Flex width={iconSize} marginX={16} justifyContent="center">
          {icon}
        </Flex>
      )}
      <Flex paddingY={12} width="100%" flexDirection="column">
        <Flex alignItems="baseline" opacity={disabled ? '0.38' : '1'} gap="8px">
          {headerComponent}
          {content && <Flex className="content-text">{content}</Flex>}
        </Flex>
        {helperTextComponent}
      </Flex>
    </Flex>
  );

  return (
    <StyledFormControlLabel
      width="343px"
      md={{
        width: '768px',
      }}
      backgroundColor={{ light: checked ? 'primary-50' : 'common-white', dark: checked ? 'primary-50' : 'gray-800' }}
      border="1px solid"
      borderRadius="8px"
      borderColor={checked ? 'primary-300' : 'gray-200'}
      marginAll={0}
      control={controlComponent}
      label={labelComponent}
      labelPlacement={icon ? 'start' : 'end'}
      checked={checked}
      disabled={disabled}
      hover={{
        borderColor: 'primary-300',
      }}
      focus={{
        boxShadow: 'sm',
        borderColor: 'primary-300',
      }}
      sx={sx}
      {...props}
    />
  );
};

export default CheckboxGroup;

CheckboxGroup.defaultProps = {
  label: '',
  id: '',
  checkboxSize: 'small',
  controlStyle: 'checkbox',
  icon: undefined,
  iconSize: '24px',
  required: false,
  indeterminate: false,
  disabled: false,
};
