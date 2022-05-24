import MUICircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import styled from 'styled-components';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import { CSSProps } from 'theme/getAppTheme';

const StyledCircularProgress = styled(MUICircularProgress).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  & {
    ${basic}
  }
`;

interface CircularProgressProps extends BasicProps {
  /**
   * Determines the width and height of the element
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * The value of the progress indicator for the `determinate` variant. Value between 0 and 100.
   */
  value?: number;
  /**
   * The variant to use. Use `indeterminate` when there is no progress value.
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * String displayed either in the center of the circle above the label, or under the circle for the `xs` size variant
   */
  description?: string;
  /**
   * Optionally shows the current `value` in the center. Can be formatted with `labelFormat`
   */
  label?: boolean;
  /**
   * Callback function that takes the value and returns a string to format the label as needed.
   * ```
   * (value: number) => `${value}%`
   * ```
   */
  labelFormat?: (value: number) => string;
  /**
   * If `true`, the shrink animation is disabled. This only works if variant is `indeterminate`.
   */
  disableShrink?: boolean;
}

const CircularProgress: FC<CircularProgressProps> = ({
  size,
  variant,
  value,
  description,
  labelFormat,
  label,
  disableShrink,
  ...props
}) => {
  const sizes = {
    xs: {
      diameter: 58,
      label: 12,
      gap: 0,
    },
    sm: {
      diameter: 144,
      label: 18,
      gap: 4,
    },
    md: {
      diameter: 180,
      label: 24,
      gap: 8,
    },
    lg: {
      diameter: 216,
      label: 30,
      gap: 10,
    },
    xl: {
      diameter: 252,
      label: 36,
      gap: 20,
    },
  } as const;

  const isXs = size === 'xs';

  const formatLabel = (inputValue: number, inputLabelFormat?: (arg0: number) => string) =>
    inputLabelFormat ? inputLabelFormat(inputValue) : inputValue;

  return (
    <Container>
      <Container position="relative" width="fit-content" height={`${sizes[size].diameter}px`} {...props}>
        <StyledCircularProgress
          size={sizes[size].diameter}
          thickness={5}
          value={value}
          variant={variant}
          disableShrink={disableShrink}
        />
        {variant === 'determinate' && (
          <StyledCircularProgress
            size={sizes[size].diameter}
            thickness={5}
            value={100}
            variant="determinate"
            position="absolute"
            left={0}
            zIndex={-1}
            css={`
              .MuiCircularProgress-circle {
                color: ${(cssProps: CSSProps) =>
                  cssProps.theme.palette.mode === 'light'
                    ? cssProps.theme.palette.primary[50]
                    : cssProps.theme.palette.gray[700]};
              }
            `}
          />
        )}
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={description && !isXs ? `${sizes[size].gap}px` : 0}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={`${sizes[size].gap}px`}
        >
          {!isXs && description && (
            <Text textStyle="xs" fontWeight="semiBold" textColor={{ light: 'gray-500', dark: 'gray-300' }}>
              {description}
            </Text>
          )}
          {label && variant === 'determinate' && (
            <Text
              textStyle="xs"
              fontWeight="semiBold"
              textColor={{ light: isXs ? 'gray-700' : 'gray-900', dark: 'gray-300' }}
              fontSize={sizes[size].label}
            >
              {value && formatLabel(value, labelFormat)}
            </Text>
          )}
        </Flex>
      </Container>
      {isXs && description && (
        <Text
          textStyle="xs"
          fontWeight="semiBold"
          textColor={{ light: 'gray-500', dark: 'gray-300' }}
          display="block"
          width={`${sizes[size].diameter}px`}
          textAlign="center"
          marginTop={4}
        >
          {description}
        </Text>
      )}
    </Container>
  );
};

export default CircularProgress;

CircularProgress.defaultProps = {
  variant: 'determinate',
  value: 0,
  labelFormat: value => `${value}%`,
};
