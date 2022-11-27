import request from 'datocms';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { gql } from 'graphql-request';
import { workFrag } from 'graphql/fragments';
import { WorkRecord } from 'graphql/generatedTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

// Quarks
import Container from 'quarks/Container';
import { Dots, LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
// import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

// Components
import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

// import Carousel from 'components/Carousel/Carousel';
import Footer from 'components/Footer/Footer';
import Slider from 'components/Slider/Slider';
import TechStack, { TechStackProps } from 'components/TechStack/TechStack';
import SmallCard from 'components/cards/SmallCard/SmallCard';

import useDarkMode from 'contexts/ThemeProvider';

export const getStaticPaths: GetStaticPaths = async () => {
  const SLUG_QUERY = gql`
    query {
      allWorks {
        slug
      }
    }
  `;

  const data = await request({
    query: SLUG_QUERY,
  });

  const paths = data.allWorks.map((work: { slug: string }) => ({
    params: { id: work.slug },
  }));

  return { paths, fallback: false };
};

interface IWorkPage {
  data: WorkRecord;
}

const Work = ({
  data: { title, subtitle, bannerImage, techStack, heading, ctas, body, information, slider },
}: IWorkPage) => {
  const [isDark] = useDarkMode();
  const tempTechStack = techStack.map(tech => tech.title);

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Justin Wallace | {title}</title>
      </Head>
      <Container
        as="main"
        maxWidth="1440px"
        paddingY={32}
        paddingX={16}
        contain="layout"
        marginX="auto"
        lg={{ paddingX: 32, paddingY: 64 }}
      >
        <StandardFadeIn>
          <LargeCircle position="absolute" right="20%" top="-800px" />
        </StandardFadeIn>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ x: { type: 'spring', duration: 2, bounce: 0.6 }, opacity: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <Heading
            as="h2"
            textStyle="xxl"
            fontSize={60}
            marginBottom={12}
            lineHeight={44}
            sm={{ fontSize: 72, lineHeight: 56 }}
            md={{ fontSize: 96, lineHeight: 72 }}
            lg={{ lineHeight: 56 }}
          >
            {title}
          </Heading>
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
        </motion.div>
        <Flex
          as="section"
          flexDirection="column"
          gap="32px"
          lg={{ flexDirection: 'row-reverse', justifyContent: 'center', gap: '128px' }}
          marginY={48}
        >
          {bannerImage && (
            <Image
              src={bannerImage?.url}
              alt={bannerImage?.alt || ''}
              height={650}
              width={650}
              marginX="auto"
              maxWidth="80%"
              loading="eager"
              lg={{ marginAll: 0 }}
            />
          )}
          {techStack && <TechStack icons={tempTechStack as TechStackProps['icons']} />}
        </Flex>
        <SmallCircle position="absolute" right="-400px" top="450px" opacity={0.3} />
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {heading && (
            <StandardFadeIn>
              <Container as="section" marginY={48}>
                <Heading as="h3">{heading}</Heading>
                <StructuredTextParser
                  textColor={{ dark: 'gray-500', light: 'purple-900' }}
                  text={body}
                  marginTop={16}
                />
              </Container>
            </StandardFadeIn>
          )}
          {ctas && (
            <Flex justifyContent="center" gap="32px" marginY={48}>
              {ctas.map(cta => (
                <SmallCard key={cta.title} {...cta} />
              ))}
            </Flex>
          )}
        </Container>
        <Dots position="absolute" transform="rotate(45deg)" top="1000px" left="-270px" md={{ left: '-400px' }} />
        <Slider cards={slider} />
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {information && (
            <Container as="section">
              <StructuredTextParser text={information} marginTop={16} />
            </Container>
          )}
        </Container>
      </Container>
      <Footer size={50} />
    </LazyMotion>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const QUERY = gql`
    query {
      work(filter: {slug: {eq: ${slug}}}) {
        ...workFrag
      }
    }
    ${workFrag}
  `;
  const data = await request({
    query: QUERY,
  });

  return {
    props: {
      data: data.work,
    },
  };
};

export default Work;
