import { BlogPostRecord } from 'graphql/generatedTypes';
import { Container, Flex, Heading, Image, Paragraph, Text } from 'quarks';
import { FC, lazy } from 'react';

import { BadgeTitles } from 'molecules/Badge/Badge';

import { timeToRead } from 'utils/functions';

import useDarkMode from 'contexts/ThemeProvider';

const Breadcrumbs = lazy(() => import('molecules/Breadcrumbs/Breadcrumbs'));
const Badge = lazy(() => import('molecules/Badge/Badge'));

const BlogPostHero: FC<BlogPostRecord> = ({ title, featuredImage, body, subtitle, publishDate, categories }) => {
  const [isDark] = useDarkMode();

  const breadcrumbs = [
    { label: 'Home', link: 'https://www.justinwallace.dev' },
    { label: 'All Blogs', link: 'https://www.justinwallace.dev/blog' },
    { label: 'Blog' },
  ];

  const formattedDate = new Date(publishDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Container
      backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
      position="relative"
      top="-70px"
      lg={{ top: '-82px' }}
    >
      <Flex
        flexDirection="column"
        maxWidth="1170px"
        justifyContent="center"
        paddingTop={128}
        paddingBottom={32}
        paddingX={24}
        marginX="auto"
        sm={{ paddingBottom: 48 }}
        lg={{ paddingBottom: 96, maxWidth: '970px' }}
        xl={{ maxWidth: '1170px' }}
      >
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Flex marginTop={64} gap="32px" flexDirection="column" lg={{ flexDirection: 'row', alignItems: 'center' }}>
          <Flex flexDirection="column" gap="8px" lg={{ width: featuredImage ? '50%' : '100%' }}>
            {categories?.length > 0 && (
              <Flex gap="8px">
                {categories.map(cat => (
                  <Badge
                    key={cat.name}
                    title={cat.name as BadgeTitles}
                    // url={`https://www.justinwallace.dev/blog?category=${cat.slug}`} to be added when categories are created
                  />
                ))}
              </Flex>
            )}
            {title && (
              <Heading
                as="h1"
                textStyle="lg"
                lg={{ textStyle: 'xl', lineHeight: 60 }}
                css={`
                  pointer-events: none;
                `}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Heading
                as="h3"
                fontFamily="primaryFont"
                textStyle="md"
                fontWeight={isDark ? 'light' : 'regular'}
                textColor={{ light: 'gray-900', dark: 'gray-500' }}
                marginTop={16}
              >
                {subtitle}
              </Heading>
            )}
            <Flex gap="12px" alignItems="center" flexWrap="wrap" marginTop={32}>
              {publishDate && <Paragraph textStyle="xl">{formattedDate}</Paragraph>}
              <Flex
                width="5px"
                height="5px"
                borderRadius="50%"
                backgroundColor={{ dark: 'common-white', light: 'purple-900' }}
              />
              {body && <Text textStyle="xl">{timeToRead(body)} minute read</Text>}
            </Flex>
          </Flex>
          {featuredImage && (
            <Container
              flex="1 1 50%"
              position="relative"
              aspectRatio={[featuredImage.width, featuredImage.height]}
              width="100%"
              maxWidth="600px"
              marginX="auto"
              borderRadius="8px"
              overflowY="hidden"
            >
              <Image src={featuredImage.url} alt={featuredImage?.alt || ''} layout="fill" />
            </Container>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogPostHero;
