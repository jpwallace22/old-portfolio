import { BlogPostRecord } from 'graphql/generatedTypes';
import Head from 'next/head';
import { Container, Flex, Text } from 'quarks';
import { FC, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import BlogPostHero from 'templates/Blog/BlogPostHero';
import BlogToc from 'templates/Blog/BlogToc';

import { Dots, LargeCircle } from 'quarks/DesignElements';

import LinearProgress from 'molecules/LinearProgress/LinearProgress';
import Socials from 'molecules/Socials/Socials';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import Footer from 'components/Footer/Footer';

import { randomIntFromInterval } from 'utils/functions';

const BlogPostPage: FC<BlogPostRecord> = props => {
  const { title, body, slug } = props;
  const footerRef = useRef<HTMLElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [circleX, setCircleX] = useState(0);
  const [circleY, setCircleY] = useState(0);
  const { y } = useWindowScroll();

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
      <BlogPostHero {...props} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingTop={48}
        paddingBottom={96}
        gap="60px"
        flexDirection="column-reverse"
        paddingX={24}
        marginX="auto"
        maxWidth="924px"
        xl={{ maxWidth: '1256px', flexDirection: 'row', alignItems: 'unset' }}
      >
        <Flex
          flex="1 0 250px"
          position="sticky"
          top="120px"
          display="flex"
          height="100%"
          flexDirection="column"
          gap="32px"
          alignSelf="flex-start"
        >
          <LargeCircle
            position="absolute"
            left="-1300px"
            top={`${scrollPercentage * 3}px`}
            zIndex={-10}
            display="none"
            xl={{ display: 'block' }}
          />
          <BlogToc {...props} />
          <Container>
            <Text textStyle="xl" fontWeight="bold">
              Share
            </Text>
            <Socials socials={socials} size={24} marginTop={16} justifyContent="flex-start" lg={{ marginLeft: 8 }} />
          </Container>
        </Flex>
        <Container maxWidth="100vw" paddingX={24} lg={{ maxWidth: '1024px' }}>
          <Dots position="absolute" bottom={circleY + 'px'} right={circleX + 'px'} />
          {body?.value && (
            <StructuredTextParser
              text={body}
              textStyle="lg"
              textColor={{ dark: 'gray-300', light: 'purple-900' }}
              fontSize={20}
              lineHeight={32}
            />
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
      <Footer size={50} marginTop={0} ref={footerRef} />
    </>
  );
};

export default BlogPostPage;
