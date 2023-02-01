import NextImage from 'next/image';

import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import basicCSS from 'quarks/styleProps/basic';

import { pseudos } from 'utils/quarks/getPseudoClassProps';
import { pseudoElements } from 'utils/quarks/getPseudoEleProps';
import { objectEntries } from 'utils/typeUtils';

import type { ImageProps, StaticImageData } from 'next/image';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FunctionComponent } from 'react';
import type { valueof } from 'utils/typeUtils';

type ModifiedBasicProps = Omit<BasicProps, 'height' | 'width' | 'objectPosition' | 'objectFit'>;

export interface CustomImageProps extends ModifiedBasicProps, Omit<ImageProps, 'objectFit'> {
  src: string | StaticImageData;
  height?: number;
  width?: number;
  alt: string;
  objectPosition?: string;
  objectFit?: BasicProps['objectFit'];
  /**
   * if true, image will be all white (use for svg's in dark mode)
   */
  white?: boolean;
}
const { height: _height, width: _width, objectFit: _objectFit, ...remainingProps } = basicCSS;

const customCSS = { ...remainingProps, ...breakpoints, ...pseudos, ...pseudoElements };
const allCSSKeys = Object.keys(customCSS);

const Image: FunctionComponent<CustomImageProps> = ({ white, ...props }) => {
  type filteredProp = [keyof CustomImageProps, valueof<CustomImageProps>];

  const { filteredQuarkProps, filteredNextProps } = objectEntries(props).reduce(
    (result, prop) => {
      result[allCSSKeys.includes(prop[0]) ? 'filteredQuarkProps' : 'filteredNextProps'].push(prop);

      return result;
    },
    { filteredQuarkProps: [], filteredNextProps: [] } as {
      filteredQuarkProps: filteredProp[];
      filteredNextProps: filteredProp[];
    },
  );
  const quarkProps = Object.fromEntries(filteredQuarkProps);
  const { src, alt, objectFit, ...nextProps } = Object.fromEntries(filteredNextProps);

  return (
    <Container width="fit-content" height="fit-content" filter={white && 'brightness(0) invert(1)'} {...quarkProps}>
      <NextImage src={src} alt={alt} {...nextProps} style={{ objectFit }} />
    </Container>
  );
};

export default Image;
