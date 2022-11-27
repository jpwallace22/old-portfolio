import request from 'datocms';
import { gql } from 'graphql-request';
import { blogPostFrag } from 'graphql/fragments';
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

type BlogDetailProps = DatoCmsTemplateBlogPost;

const BlogDetail: FC<BlogDetailProps> = ({
  // slug,
  title,
  featuredImage,
  body,
  // tags,
  // authors,
  publishDate,
}: BlogDetailProps) => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog' },
  ];

  return (
    <>
      <Container backgroundColor="common-white">
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
          <Flex marginTop={64} alignItems="center" gap="32px" flexDirection="column" lg={{ flexDirection: 'row' }}>
            <Flex flexDirection="column" gap="24px" lg={{ width: featuredImage ? '50%' : '100%' }}>
              {title && <Heading>{title}</Heading>}
              <Flex gap="12px" alignItems="center" flexWrap="wrap">
                <Flex width="5px" height="5px" borderRadius="50%" backgroundColor="primary-600" />
                {publishDate && <Paragraph textStyle="md">{publishDate}</Paragraph>}
                <Flex width="5px" height="5px" borderRadius="50%" backgroundColor="primary-600" />
                {body && <Text textStyle="md">{timeToRead(body)} minutes</Text>}
              </Flex>
            </Flex>
            {featuredImage && (
              <Container xl={{ width: '50%' }} flex="1 1 50%">
                <Image src={featuredImage.url} alt={featuredImage?.alt || ''} />
              </Container>
            )}
          </Flex>
        </Flex>
      </Container>
      <Container backgroundColor="gray-50">
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
          {/* <Container position="sticky" top="100px" display="block" height="100%">
            <SocialShareLinks slug={slug || ''} title={title} />
          </Container> */}
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
    props: {
      data: data.blogPost,
    },
  };
};

export default BlogDetail;
