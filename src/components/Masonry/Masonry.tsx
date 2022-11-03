import { FC } from 'react';
import Mason from 'react-masonry-css';
import styled from 'styled-components';

// Quarks
import Image from 'quarks/Image';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

const StyledMason = styled(Mason).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  ${basic}
`;

type MasonryProps = Omit<BasicProps, 'height' | 'width'> & {
  children: {
    url: string;
    height: number;
    width: number;
    alt?: string;
  }[];
};

const Masonry: FC<MasonryProps> = ({ children, ...props }) => {
  const breakpointColumnsObj = {
    default: 4,
    1270: 3,
    920: 2,
  };

  return (
    <StyledMason
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      {...props}
    >
      {children.map(image => (
        <Image
          key={image.url}
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt ? image.alt : ''}
        />
      ))}
    </StyledMason>
  );
};

export default Masonry;
