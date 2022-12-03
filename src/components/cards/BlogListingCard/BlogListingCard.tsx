import { lazy, useRef, useState } from 'react';

import { Container, Flex, Image, Paragraph, Text } from 'quarks';
import { TiArrowRightThick } from 'react-icons/ti';

import { timeToRead } from 'utils/functions';
import useResizeObserver from 'utils/useResizeObserver';

import type { BlogPostRecord } from 'graphql/generatedTypes';
import type { FC } from 'react';

const Button = lazy(() => import('molecules/Button/Button'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

interface IBlogCard extends BlogPostRecord {
  index?: number;
}

const BlogListingCard: FC<IBlogCard> = ({ title, featuredImage, excerpt, index, body }) => {
  const [titleSize, setTitleSize] = useState<number>(0);
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  useResizeObserver(() => setTitleSize(titleRef?.current?.offsetHeight || 30), titleRef);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      maxWidth="600px"
      height="550px"
      borderRadius="8px"
      overflowY="hidden"
      backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
      boxShadow="sm"
      transition="box-shadow .4s, transform .4s"
      md={{ maxWidth: 'unset' }}
      hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}
    >
      {featuredImage && (
        <Container
          width="100%"
          height="300px"
          position="relative"
          after={{
            content: '',
            position: 'absolute',
            bottom: '-12px',
            height: '12px',
            backgroundImage: index !== undefined && index % 2 === 0 ? 'gradient-purpleLeft' : 'gradient-purpleRight',
            left: 0,
            right: 0,
            marginX: 'auto',
            width: '100%',
          }}
        >
          <Image src={featuredImage.url} alt={featuredImage?.alt || ''} layout="fill" objectFit="cover" />
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
        minHeight="250px"
      >
        {title && (
          <Paragraph textStyle="lg" fontWeight="bold" lineHeight={24} ref={titleRef}>
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
              -webkit-line-clamp: ${titleSize > 30 ? 3 : 4};
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        />

        <Flex justifyContent="space-between" alignItems="flex-end" marginTop="auto">
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
};

export default BlogListingCard;
