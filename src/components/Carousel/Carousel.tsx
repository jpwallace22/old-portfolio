import { useMediaQuery } from '@mui/material';
import { FC, ReactChild } from 'react';
import { Carousel as Slider } from 'react-responsive-carousel';
import styled, { css } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ReactComponent as SmallArrow } from 'assets/svg/small-arrow.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import { colorParser } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import { CSSProps } from 'theme/getAppTheme';

type CarouselProps = Omit<BasicProps, 'width'> & {
  children: ReactChild[];
  /**
   * If true the Carousel will slide on its own
   */
  autoPlay?: boolean;
  /**
   * Time in seconds between automatic sliding
   */
  interval?: number;
};

const StyledArrow = styled(SmallArrow)`
  position: relative;
  left: -10px;
`;

const Carousel: FC<CarouselProps> = ({ children, autoPlay, interval, ...props }) => {
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Container
      css={css`
        & .carousel .control-dots .dot {
          background-color: ${(cssProps: CSSProps) =>
            cssProps.theme.palette.mode === 'light' && cssProps.theme.palette.primary[700]};
          box-shadow: none;
          width: 10px;
          height: 10px;
        }
      `}
      {...props}
    >
      <Flex justifyContent="flex-end" marginX="auto" marginBottom={32} gap="16px" width="100%" lg={{ width: '80%' }}>
        <Text
          textStyle="xl"
          fontSize={16}
          fontWeight="light"
          transform="rotate(-40deg)"
          textColor={{ light: 'gray-900', dark: 'gray-500' }}
          lg={{ fontSize: 20 }}
        >
          swipe!
        </Text>
        <StyledArrow fill={colorParser('primary-500')} width={isDesktop ? 115 : 80} />
      </Flex>
      <Slider
        autoPlay={autoPlay}
        interval={interval && interval * 1000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={800}
        infiniteLoop
        stopOnHover
        emulateTouch
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
        {...props}
      >
        {children}
      </Slider>
    </Container>
  );
};

export default Carousel;
