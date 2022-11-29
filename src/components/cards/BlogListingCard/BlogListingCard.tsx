import { BlogPostRecord } from 'graphql/generatedTypes';
import { Container, Flex, Image, Paragraph } from 'quarks';
import { TiChevronRight } from 'react-icons/ti';

import Button from 'molecules/Button/Button';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { FC } from 'react';

const BlogListingCard: FC<BlogPostRecord> = ({
  title,
  featuredImage,
  excerpt,
  //   publishDate,
}) => (
  <Flex
    flexDirection="column"
    width="100%"
    maxWidth="600px"
    md={{ maxWidth: '370px' }}
    borderRadius="8px"
    overflowY="hidden"
    backgroundColor={{ dark: 'purple-800', light: 'gray-100' }}
    boxShadow="xl"
  >
    {featuredImage && (
      <Container width="100%" position="relative" aspectRatio={[featuredImage.width, featuredImage.height]}>
        <Image src={featuredImage.url} alt={featuredImage?.alt || ''} layout="fill" />
      </Container>
    )}
    <Flex flexDirection="column" paddingY={24} paddingX={16} gap="16px">
      {title && (
        <Paragraph textStyle="lg" fontWeight="bold">
          {title}
        </Paragraph>
      )}
      <StructuredTextParser
        textStyle="md"
        textColor="gray-500"
        text={excerpt}
        css={`
          p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      />

      <Button
        fontSize={16}
        fontWeight="semiBold"
        endIcon={<TiChevronRight />}
        variant="text"
        textColor="primary-600"
        paddingAll={0}
        hover={{ textColor: 'primary-400' }}
      >
        Read more
      </Button>
    </Flex>
  </Flex>
);

export default BlogListingCard;
