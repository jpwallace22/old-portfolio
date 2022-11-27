import request from 'datocms';
import { gql } from 'graphql-request';
import { blogPostFrag } from 'graphql/fragments';
import { BlogPostRecord } from 'graphql/generatedTypes';
import { GetStaticPaths, GetStaticProps } from 'next';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Breadcrumbs from 'molecules/Breadcrumbs/Breadcrumbs';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

// import ComponentBadge from 'components/Badge/Badge';
// import Authors from 'components/BlogPost/Authors';
// import SocialShareLinks from 'components/BlogPost/SocialShareLinks';

import { timeToRead } from 'utils/functions';

import useDarkMode from 'contexts/ThemeProvider';

import type { FC } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const SLUG_QUERY = gql`
    query {
      allBlogPosts {
        slug
      }
    }
  `;

  const data = await request({
    query: SLUG_QUERY,
  });

  const paths = data.allBlogPosts.map((post: { slug: string }) => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
};

const BlogDetail: FC<BlogPostRecord> = ({ title, featuredImage, body, subtitle, publishDate }) => {
  const breadcrumbs = [
    { label: 'Home', link: 'https://www.justinwallace.dev' },
    { label: 'Blog', link: 'https://www.justinwallace.dev/blog' },
  ];

  const formattedDate = new Date(publishDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const [isDark] = useDarkMode();

  return (
    <>
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
            <Flex flexDirection="column" lg={{ width: featuredImage ? '50%' : '100%' }}>
              {title && (
                <Heading as="h2" textStyle="lg">
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
                >
                  {subtitle}
                </Heading>
              )}
              <Flex gap="12px" alignItems="center" flexWrap="wrap" marginTop={32}>
                {publishDate && <Paragraph textStyle="md">{formattedDate}</Paragraph>}
                <Flex width="5px" height="5px" borderRadius="50%" backgroundColor="primary-600" />
                {body && <Text textStyle="md">{timeToRead(body)} minute read</Text>}
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
              >
                <Image src={featuredImage.url} alt={featuredImage?.alt || ''} layout="fill" />
              </Container>
            )}
          </Flex>
        </Flex>
      </Container>
      <Container>
        <Flex
          justifyContent="space-between"
          paddingTop={48}
          paddingBottom={96}
          gap="30px"
          flexDirection="column-reverse"
          paddingX={24}
          marginX="auto"
          lg={{ flexDirection: 'row', maxWidth: '970px' }}
          xl={{ maxWidth: '1170px' }}
        >
          <Container position="sticky" top="100px" display="block" height="100%">
            Socials
          </Container>
          <Container lg={{ maxWidth: '870px' }}>
            {body && <StructuredTextParser text={body} textStyle="lg" />}
          </Container>
        </Flex>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const QUERY = gql`
    query {
      blogPost(filter: {slug: {eq: ${slug}}}) {
        ...blogPostFrag
      }
    }
    ${blogPostFrag}
  `;
  const data = await request({
    query: QUERY,
  });

  return {
    props: data.blogPost,
  };
};

export default BlogDetail;
