import MUISlider from '@mui/material/Slider';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledSlider = styled(MUISlider).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

export interface SliderProps extends BasicProps {
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: number | number[];
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Controls when the value label is displayed:
   *
   * `auto` the value label will display when the thumb is hovered or focused.
   *
   * `on` will display persistently
   *
   * `off` will never display.
   */
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  /**
   * Callback function to format the label. Typical pattern: `value => '${value}%'`. A second argument can be added to format the index as well.
   */
  valueLabelFormat?: (value: number, index: number) => ReactNode | string;
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   */
  disableSwap?: boolean;
  /**
   * Marks indicate predetermined values to which the user can move the slider. If `true` the marks are spaced according the value of the `step` prop. If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks?: { value: number; label?: ReactNode }[] | boolean;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max?: number;
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min?: number;
  /**
   * Name attribute of the hidden `input` element.
   */
  name?: string;
  /**
   * The component orientation.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The track presentation:
   *
   * `normal` the track will render a bar representing the slider value.
   *
   * `inverted` the track will render a bar representing the remaining slider value.
   *
   * `false` the track will render without a bar.
   */
  track?: 'inverted' | 'normal' | false;
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex?: number;
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.) The `min` prop serves as the origin for the valid values. We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step?: number;
  /**
   * A transformation function, to change the scale of the slider.
   *
   * default: `(x) => x`
   */
  scale?: (value: number) => number;
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (any). **Warning:** This is a generic event not a change event.
   *
   * value: The new value.
   *
   * activeThumb: Index of the currently moved thumb.
   */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value?: number[] | number;
  /**
   * Callback function that is fired when the change has been committed. ie, dragging the slider will not fire the event, but releasing the slider will.
   *
   * event: The event source of the callback. Warning: This is a generic event not a change event.
   */
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | Array<number>) => void;
  /**
   * The label of the slider.
   */
  ariaLabel?: string;

  /**
   * The id of the element containing a label for the slider.
   */
  ariaLabelledBy?: string;
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  ariaValueText?: string;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider. This is important for screen reader users.
   *
   * index: The thumb label's index to format.
   */
  getAriaLabel?: (index: number) => string;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider. This is important for screen reader users.
   *
   * value: The thumb label's value to format.
   *
   * index: The thumb label's index to format.
   */
  getAriaValueText?: (value: number, index: number) => string;
}

const Slider: FC<SliderProps> = ({ ariaLabel, ariaLabelledBy, ariaValueText, ...props }) => (
  <StyledSlider aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} aria-valuetext={ariaValueText} {...props} />
);

export default Slider;
