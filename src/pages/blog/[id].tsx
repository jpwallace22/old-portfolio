import request from 'datocms';
import { gql } from 'graphql-request';
import { blogPostFrag } from 'graphql/fragments';
import { BlogPostRecord } from 'graphql/generatedTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

import { colorParser } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import { Dots, LargeCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Breadcrumbs from 'molecules/Breadcrumbs/Breadcrumbs';
import LinearProgress from 'molecules/LinearProgress/LinearProgress';
import Socials from 'molecules/Socials/Socials';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

// import ComponentBadge from 'components/Badge/Badge';
// import Authors from 'components/BlogPost/Authors';
// import SocialShareLinks from 'components/BlogPost/SocialShareLinks';

import Footer from 'components/Footer/Footer';

import { randomIntFromInterval, timeToRead } from 'utils/functions';
import tocParser, { StructuredData } from 'utils/tocParser';

import useDarkMode from 'contexts/ThemeProvider';

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

const BlogDetail: FC<BlogPostRecord> = ({ title, featuredImage, body, subtitle, publishDate, slug }) => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [circleX, setCircleX] = useState(0);
  const [circleY, setCircleY] = useState(0);

  const [isDark] = useDarkMode();
  const { y } = useWindowScroll();

  const breadcrumbs = [
    { label: 'Home', link: 'https://www.justinwallace.dev' },
    { label: 'All Blogs', link: 'https://www.justinwallace.dev/blog' },
    { label: 'Blog' },
  ];

  const socials = [
    {
      platform: 'facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=https://justinwallace.dev/blog/${slug}`,
    } as const,
    { platform: 'linkedin', url: `https://www.linkedin.com/share?url=https://justinwallace.dev/blog/${slug}` } as const,
    {
      platform: 'twitter',
      url: `https://twitter.com/intent/tweet?url=https://justinwallace.dev/blog/${slug}`,
    } as const,
    { platform: 'mail', url: `mailto:?subject=${title}&body=https://justinwallace.dev/blog/${slug}` } as const,
  ];

  const formattedDate = new Date(publishDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  useLayoutEffect(() => {
    if (window === undefined || !footerRef.current?.offsetHeight) {
      return;
    }
    const contentHeight = document.body.offsetHeight - window.innerHeight - footerRef.current?.offsetHeight - 100;
    const currentScroll = Math.round((y / contentHeight) * 100);

    setScrollPercentage(currentScroll);
  }, [y, footerRef]);

  useMemo(() => {
    setCircleX(randomIntFromInterval(0, 500));
    setCircleY(randomIntFromInterval(0, 150));
  }, []);

  return (
    <>
      <Head>
        <title>Justin Wallace | {title}</title>
      </Head>
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
              {title && (
                <Heading as="h1" textStyle="lg" lg={{ textStyle: 'xl', lineHeight: 60 }}>
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
                borderRadius="16px"
                overflowY="hidden"
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
          gap="60px"
          flexDirection="column-reverse"
          paddingX={24}
          marginX="auto"
          lg={{ flexDirection: 'row' }}
          xl={{ maxWidth: '1256px' }}
        >
          <Flex
            flex="1 0 250px"
            position="sticky"
            top="120px"
            display="flex"
            height="100%"
            flexDirection="column"
            gap="32px"
          >
            <LargeCircle
              position="absolute"
              left="-1300px"
              top={`${scrollPercentage * 3}px`}
              zIndex={-10}
              display="none"
              lg={{ display: 'block' }}
            />
            <Container display="none" lg={{ display: 'block' }}>
              <Paragraph textStyle="xl" fontWeight="bold" marginBottom={8}>
                In this article
              </Paragraph>
              <Container
                position="relative"
                left="-16px"
                overflowY="scroll"
                maxHeight="65vh"
                paddingLeft={16}
                css={`
                  direction: rtl;
                  ::-webkit-scrollbar {
                    width: 8px;
                    background: transparent;
                  }
                  ::-webkit-scrollbar-thumb {
                    background: ${colorParser(isDark ? 'purple-700' : 'gray-200')};
                    -webkit-border-radius: 1ex;
                  }
                `}
              >
                <Text
                  as={Flex}
                  flexDirection="column"
                  textColor={{ dark: 'gray-500', light: 'purple-900' }}
                  css={`
                    direction: ltr;
                  `}
                >
                  {tocParser(body as StructuredData, slug)}
                </Text>
              </Container>
            </Container>
            <Container>
              <Text textStyle="xl" fontWeight="bold" textAlign="center">
                Share
              </Text>
              <Socials socials={socials} size={24} marginTop={16} justifyContent="flex-start" lg={{ marginLeft: 8 }} />
            </Container>
          </Flex>
          <Container lg={{ maxWidth: '1024px' }}>
            <Dots position="absolute" bottom={circleY + 'px'} right={circleX + 'px'} />
            {body?.value && (
              <StructuredTextParser text={body} textStyle="lg" textColor={{ dark: 'gray-500', light: 'purple-900' }} />
            )}
          </Container>
        </Flex>
        <LinearProgress
          value={scrollPercentage > 0 ? scrollPercentage : 0}
          position="fixed"
          top="70px"
          width="100%"
          bottomBarColor="transparent"
          lg={{ position: 'sticky', top: 'unset', bottom: 0 }}
        />
      </Container>
      <Footer size={50} marginTop={0} ref={footerRef} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const QUERY = gql`
    query blogQuery($slug: String) {
      blogPost(filter: { slug: { eq: $slug } }) {
        ...blogPostFrag
      }
    }
    ${blogPostFrag}
  `;
  const data = await request({
    query: QUERY,
    variables: {
      slug: slug as string,
    },
  });

  return {
    props: data.blogPost,
  };
};

export default BlogDetail;
