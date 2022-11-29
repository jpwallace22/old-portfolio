import request from 'datocms';
import { gql } from 'graphql-request';
import { blogCardFrag, blogPageFrag } from 'graphql/fragments';
import { BlogPageRecord, BlogPostRecord } from 'graphql/generatedTypes';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import Breadcrumbs from 'molecules/Breadcrumbs/Breadcrumbs';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import BlogListing from 'components/BlogListing/BlogListing';
import Footer from 'components/Footer/Footer';

import useDarkMode from 'contexts/ThemeProvider';

interface IBlogPage extends BlogPageRecord {
  blogs: BlogPostRecord[];
}

const BlogPage: FC<IBlogPage> = ({ title, subtitle, body, blogs }) => {
  // const [scrollPercentage, setScrollPercentage] = useState(0);

  const [isDark] = useDarkMode();
  // const { y } = useWindowScroll();

  const breadcrumbs = [{ label: 'Home', link: 'https://www.justinwallace.dev' }, { label: 'All Blogs' }];

  // useLayoutEffect(() => {
  //   if (window === undefined) {
  //     return;
  //   }
  //   const contentHeight = document.body.offsetHeight - window.innerHeight;
  //   const currentScroll = Math.round((y / contentHeight) * 100);

  //   setScrollPercentage(currentScroll);
  // }, [y]);

  return (
    <>
      <Head>
        <title>Justin Wallace | Blog</title>
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
            <Flex flexDirection="column" gap="8px">
              {title && (
                <Heading as="h1" textStyle="lg" lg={{ textStyle: 'xxl', lineHeight: 90 }}>
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
              {body && (
                <StructuredTextParser
                  text={body}
                  marginTop={16}
                  maxWidth="740px"
                  textColor={{ dark: 'gray-500', light: 'purple-900' }}
                />
              )}
            </Flex>
            {/* {featuredImage && (
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
            )} */}
          </Flex>
        </Flex>
      </Container>
      <BlogListing blogs={blogs} />
      <Footer size={50} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const QUERY = gql`
    query blogPageQuery {
      blogPage {
        ...blogPageFrag
      }
      allBlogPosts {
        ...blogCardFrag
      }
    }
    ${blogPageFrag}
    ${blogCardFrag}
  `;
  const data = await request({
    query: QUERY,
  });

  return {
    props: { ...data.blogPage, blogs: data.allBlogPosts },
  };
};

export default BlogPage;
