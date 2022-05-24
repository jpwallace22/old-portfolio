// See "Links and Images" doc in Storybook
export default null;

// import { GatsbyImage, GatsbyImageProps, ImageDataLike, getImage } from 'gatsby-plugin-image';
// import { FC } from 'react';
// import styled from 'styled-components';

// import { BasicProps, basic } from './interpolations/basic';

// type StaticImage = {
//   file: {
//     url: string;
//   };
// };

// const StyledImage = styled.img`
//   ${basic}
// `;

// const isStaticImage = (image: ImageDataLike | StaticImage): image is StaticImage =>
//   (image as StaticImage).file?.url !== undefined;

// const imageResolver = (image: ImageDataLike | StaticImage) => {
//   const gatsbyImageData = 'gatsbyImageData' in image && image.gatsbyImageData ? getImage(image) : undefined;

//   return {
//     as: gatsbyImageData ? GatsbyImage : ('img' as const),
//     image: gatsbyImageData,
//     src: isStaticImage(image) ? image.file.url : undefined,
//   };
// };

// interface ImageProps extends BasicProps {
//   image: ImageDataLike | StaticImage;
//   alt: string;
//   loading?: GatsbyImageProps['loading'];
// }

// /**
//  * Conditionally renders a GatsbyImage if possible or a <img> tag if not.
//  */
// const Image: FC<ImageProps> = ({ image, alt, ...props }) => <StyledImage {...imageResolver(image)} title={alt} alt={alt} {...props} />;

// export default Image;
