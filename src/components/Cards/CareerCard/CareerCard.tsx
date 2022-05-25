import { FC, MouseEvent, ReactNode } from 'react';

import Container from 'quarks/Container';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import Button from 'molecules/Button/Button';

interface CareerCardProps extends BasicProps {
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
  heading: string;
  /**
   * Determines the text for the subhead, under the heading
   */
  subhead?: string;
  /**
   * Determines the text for the subhead, located under the details
   */
  details?: string;
  /**
   * Determines the text for the button
   */
  buttonText?: string;
  /**
   * Callback fired when the button is clicked.
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onClick?: (e: MouseEvent) => void;
}

const CareerCard: FC<CareerCardProps> = ({
  heading,
  subhead,
  details,
  buttonText,
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
      maxWidth="370px"
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
        <Heading as="h6" fontWeight="semiBold" fontSize={18} lineHeight={24} textColor="primary-500">
          {heading}
        </Heading>
        <Text
          textStyle="lg"
          fontWeight="semiBold"
          marginY={8}
          textColor={{ light: 'gray-900', dark: 'common-white' }}
          display="block"
        >
          {subhead}
        </Text>
        <Text textStyle="lg" textColor={{ light: 'gray-700', dark: 'gray-300' }} display="block">
          {details}
        </Text>
        <Button
          backgroundColor="primary-500"
          textColor="common-white"
          marginTop={16}
          display={href || onClick ? 'flex' : 'none'}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      </Container>
    </Container>
  );
};

export default CareerCard;

CareerCard.defaultProps = {};
