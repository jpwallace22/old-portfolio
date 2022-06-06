import { FC, ReactChild } from 'react';
import { Carousel as Slider } from 'react-responsive-carousel';
import { css } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';

import { CSSProps } from 'theme/getAppTheme';

type CarouselProps = BasicProps & {
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

const Carousel: FC<CarouselProps> = ({ children, autoPlay, interval, ...props }) => (
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
    <Slider
      autoPlay={autoPlay}
      interval={interval && interval * 1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={800}
      infiniteLoop
      {...props}
    >
      {children}
    </Slider>
  </Container>
);

export default Carousel;
