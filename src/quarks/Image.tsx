import NextImage, { ImageProps, StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';

import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';
import basicCSS from 'quarks/styleProps/basic';

import { pseudos } from 'utils/quarks/getPseudoClassProps';
import { pseudoElements } from 'utils/quarks/getPseudoEleProps';
import { objectEntries, valueof } from 'utils/typeUtils';

type ModifiedBasicProps = Omit<BasicProps, 'height' | 'width' | 'objectPosition' | 'objectFit'>;

export interface CustomImageProps extends ModifiedBasicProps, Omit<ImageProps, 'objectFit'> {
  src: string | StaticImageData;
  height?: number | string;
  width?: number | string;
  alt: string;
  objectPosition?: string;
  objectFit?: BasicProps['objectFit'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { height, width, objectPosition, objectFit, ...remainingProps } = basicCSS;

const customCSS = { ...remainingProps, ...breakpoints, ...pseudos, ...pseudoElements };
const allCSSKeys = Object.keys(customCSS);

const Image: FunctionComponent<CustomImageProps> = props => {
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
  const { src, ...nextProps } = Object.fromEntries(filteredNextProps);

  return (
    <Container width="fit-content" height="fit-content" {...quarkProps}>
      <NextImage src={src} {...nextProps} />
    </Container>
  );
};

export default Image;
