import { BlogPostRecord } from 'graphql/generatedTypes';
import { Container, Flex, Image, Paragraph, Text } from 'quarks';
import { TiArrowRightThick } from 'react-icons/ti';

import Button from 'molecules/Button/Button';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import { timeToRead } from 'utils/functions';

import type { FC } from 'react';

interface IBlogCard extends BlogPostRecord {
  index?: number;
}

const BlogListingCard: FC<IBlogCard> = ({ title, featuredImage, excerpt, index, body }) => (
  <Flex
    flexDirection="column"
    width="100%"
    maxWidth="600px"
    borderRadius="8px"
    overflowY="hidden"
    backgroundColor={{ dark: 'purple-800', light: 'gray-100' }}
    boxShadow="xl"
    transition="box-shadow .4s, transform .4s"
    md={{ maxWidth: 'unset' }}
    hover={{ boxShadow: 'xs', transform: 'translateY(-8px)' }}
  >
    {featuredImage && (
      <Container width="100%" position="relative" aspectRatio={[featuredImage.width, featuredImage.height]}>
        <Image src={featuredImage.url} alt={featuredImage?.alt || ''} layout="fill" />
        {/* <Badge zIndex={3} position="absolute" boxShadow="lg" top="16px" left="16px" title="typescript" /> */}
      </Container>
    )}
    <Flex
      flexDirection="column"
      paddingTop={32}
      paddingBottom={24}
      paddingX={16}
      gap="16px"
      position="relative"
      after={{
        content: '',
        position: 'absolute',
        top: 0,
        height: '12px',
        backgroundImage: index !== undefined && index % 2 === 0 ? 'gradient-purpleLeft' : 'gradient-purpleRight',
        left: 0,
        right: 0,
        marginX: 'auto',
        width: '100%',
      }}
    >
      {title && (
        <Paragraph textStyle="lg" fontWeight="bold">
          {title}
        </Paragraph>
      )}
      <StructuredTextParser
        textStyle="md"
        textColor={{ dark: 'gray-500', light: 'common-black' }}
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

      <Flex justifyContent="space-between" alignItems="flex-end">
        <Button
          fontSize={20}
          fontWeight="bold"
          endIcon={<TiArrowRightThick />}
          variant="text"
          textColor={{ dark: 'common-white', light: 'purple-600' }}
          paddingAll={0}
          backgroundColor="transparent"
          boxShadow="unset"
          hover={{ textColor: 'primary-400' }}
        >
          See full article
        </Button>
        {body && (
          <Text textStyle="md" fontWeight="semiBold" textColor={{ dark: 'purple-300', light: 'primary-600' }}>
            {timeToRead(body)} minute read
          </Text>
        )}
      </Flex>
    </Flex>
  </Flex>
);

export default BlogListingCard;
