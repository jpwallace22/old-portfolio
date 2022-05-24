// See "Links and Images" doc in Storybook
import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

import { BasicProps, basic } from 'quarks/interpolations/basic';

const StyledImage = styled.img`
  ${basic}
`;

interface ImageProps extends ComponentProps<typeof StyledImage>, BasicProps {
  /**
   * The URL or local path of the image.
   */
  src: string;
  /**
   * Alternative text to be displayed when image cannot be rendered.
   * Required for accessiblity purposes.
   */
  alt: string;
}

const Image: FC<ImageProps> = props => <StyledImage {...props} />;

export default Image;
