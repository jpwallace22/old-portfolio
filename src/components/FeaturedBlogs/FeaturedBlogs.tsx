import { Container } from 'quarks';

import StandardHeading from 'molecules/StandardHeading/StandardHeading';

import Carousel from 'components/Carousel/Carousel';

import type { FeaturedBlogRecord } from 'graphql/types.gen';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type FeaturedBlogsProps = BasicProps & FeaturedBlogRecord;

const FeaturedBlogs: FC<FeaturedBlogsProps> = ({ blogs, heading, body }) => (
  <>
    <Container width="100%">
      <StandardHeading heading={heading} body={body} />
    </Container>
    <Carousel cards={blogs} showPagination={false} />
  </>
);

export default FeaturedBlogs;
