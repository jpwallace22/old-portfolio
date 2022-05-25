import { FC, MouseEvent, ReactNode } from 'react';

import Container from 'quarks/Container';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import Button from 'molecules/Button/Button';

interface BasicCardProps extends BasicProps {
  /**
   * The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * ReactNode of icon to be put at the end of the button
   */
  endIcon?: ReactNode;
  /**
   * ReactNode of icon to be put at the beginning of the button
   */
  startIcon?: ReactNode;
  /**
   * Determines the size of the icon. Can be passed either a number `'75'`, a pixel value `'75px'`, or rem units `'10rem'`.
   */
  iconSize?: string;
  /**
   * Determines the text for the heading
   */
  heading?: string;
  /**
   * Determines the text for the subhead
   */
  subhead?: string;
  /**
   * Determines the text for the button
   */
  buttonText?: string;
  /**
   * The base maxWidth of the container. `sm` = `270px` `lg` = `370px`
   */
  size?: 'sm' | 'lg';
  /**
   * Callback fired when the button is clicked.
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onClick?: (e: MouseEvent) => void;
}

const BasicCard: FC<BasicCardProps> = ({
  heading,
  subhead,
  buttonText,
  size,
  endIcon,
  startIcon,
  iconSize,
  onClick,
  href,
  ...props
}) => {
  const buttonProps = {
    endIcon,
    startIcon,
    iconSize,
    onClick,
    href,
  };

  return (
    <Container
      maxWidth={size === 'sm' ? '270px' : '370px'}
      paddingAll={8}
      backgroundColor={{ light: 'gray-50', dark: 'gray-800' }}
      borderRadius="8px"
      {...props}
    >
      <Container
        border="1px solid"
        borderColor={{ light: 'gray-200', dark: 'gray-700' }}
        paddingAll={16}
        borderRadius="8px"
      >
        <Heading as="h6" fontWeight="semiBold" marginBottom={8}>
          {heading}
        </Heading>
        <Text textStyle="lg" textColor={{ light: 'gray-700', dark: 'gray-300' }}>
          {subhead}
        </Text>
        <Button
          backgroundColor="primary-500"
          textColor="common-white"
          display={href || onClick ? 'flex' : 'none'}
          marginTop={16}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      </Container>
    </Container>
  );
};

export default BasicCard;

BasicCard.defaultProps = {};
