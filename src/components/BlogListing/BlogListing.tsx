import { useMediaQuery } from '@mui/material';
import { BlogPostRecord } from 'graphql/generatedTypes';
import { useEffect, useState } from 'react';

import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Grid from 'quarks/Grid';
import Link from 'quarks/Link';
import { BasicProps } from 'quarks/interpolations/basic';

import Pagination from 'molecules/ComponentPagination/ComponentPagination';

import { BlogListingCard } from 'components/cards';

import type { FC } from 'react';

interface BlogListingProps extends BasicProps {
  blogs: BlogPostRecord[];
}

const BlogListing: FC<BlogListingProps> = ({ blogs, ...props }) => {
  const [currentPosts, setCurrentPosts] = useState<BlogPostRecord[]>([]);
  // currentPage count starts at 0 (uses index in pagination)
  const [currentPage, setCurrentPage] = useState(0);
  const [amountOfPages, setAmountOfPages] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const isMobile = !useMediaQuery(media.md);
  const isTablet = !useMediaQuery(media.xl);
  const isDesktop = useMediaQuery(media.xl);

  useEffect(() => {
    const calcPosts = () => {
      if (isMobile) {
        return 6;
      }

      return isTablet ? 8 : 9;
    };
    setPostsPerPage(calcPosts);
    setAmountOfPages(Math.ceil(blogs.length / calcPosts()));
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {
    const postsToDisplay = blogs.slice(currentPage * postsPerPage, currentPage * postsPerPage + postsPerPage);
    setCurrentPosts(postsToDisplay);
  }, [currentPage, amountOfPages, postsPerPage]);

  return (
    <Container {...props}>
      <Grid
        gap="30px"
        justifyItems="center"
        md={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        xl={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {currentPosts?.map(post => (
          <Link key={post.internalName} href={`https://www.justinwallace.dev/blog/${post.slug}`}>
            <BlogListingCard {...post} />
          </Link>
        ))}
      </Grid>
      <Pagination
        // marginTop={48}
        dotsCount={amountOfPages}
        activeDot={currentPage}
        onLeftArrowClick={() => setCurrentPage(currentPage - 1)}
        onRightArrowClick={() => setCurrentPage(currentPage + 1)}
        onSetActiveDot={number => setCurrentPage(number)}
      />
    </Container>
  );
};

export default BlogListing;
