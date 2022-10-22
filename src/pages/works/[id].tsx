import { works } from 'data/data';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { GiCheckMark } from 'react-icons/gi';

// Quarks
import Container from 'quarks/Container';
import { Dots, LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';

// Components
import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import Carousel from 'components/Carousel/Carousel';
import Footer from 'components/Footer/Footer';
import TechStack from 'components/TechStack/TechStack';
import SmallCard, { SmallCardProps } from 'components/cards/SmallCard/SmallCard';

import useDarkMode from 'contexts/ThemeProvider';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works.map(work => ({
    params: { id: work.id.toString() },
  }));

  return { paths, fallback: false };
};

const Work = ({
  data: { title, subTitle, bannerImage, techStack, intro, ctas, gallery, keyPoints, autoplay = true },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isDark] = useDarkMode();

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
          {subTitle && (
            <Heading
              as="h3"
              fontFamily="primaryFont"
              textStyle="md"
              fontWeight={isDark ? 'light' : 'regular'}
              textColor={{ light: 'gray-900', dark: 'gray-500' }}
            >
              {subTitle}
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
              src={bannerImage?.src}
              alt={bannerImage?.alt}
              height={bannerImage?.height}
              width={bannerImage?.width}
              marginX="auto"
              maxWidth="80%"
              loading="eager"
              lg={{ marginAll: 0 }}
            />
          )}
          {techStack && <TechStack icons={techStack} />}
        </Flex>
        <SmallCircle position="absolute" right="-400px" top="450px" opacity={0.3} />
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {intro && (
            <StandardFadeIn>
              <Container as="section" marginY={48}>
                <Heading as="h3">{intro.heading}</Heading>
                {intro.body.map((copy: string, i: number) => (
                  <Paragraph key={`intro-${i + 1}`}>{copy}</Paragraph>
                ))}
              </Container>
            </StandardFadeIn>
          )}
          {ctas && (
            <Flex justifyContent="center" gap="32px" marginY={48}>
              {ctas.map((cta: SmallCardProps) => (
                <SmallCard key={cta.title} {...cta} />
              ))}
            </Flex>
          )}
        </Container>
        <Dots position="absolute" transform="rotate(45deg)" top="1000px" left="-270px" md={{ left: '-400px' }} />
        {gallery && (
          <Container as="main" maxWidth="1440px" paddingX={16} contain="layout" marginX="auto" lg={{ paddingX: 32 }}>
            <Carousel autoPlay={autoplay} interval={6} paddingY={16}>
              {gallery.map((image: { url: string; alt?: string; width: number; height: number }) => (
                <Grid placeItems="center" key={image.url}>
                  <Image src={image.url} width={image.width} height={image.height} alt={image.alt ? image.alt : ''} />
                </Grid>
              ))}
            </Carousel>
          </Container>
        )}
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {keyPoints && (
            <Container as="section" marginY={48}>
              <Heading as="h3" paddingY={16}>
                Key Points
              </Heading>
              {keyPoints.map((copy: string, i: number) => (
                <Flex key={`intro-${i + 1}`} alignItems="center">
                  <Container width="25px">
                    <GiCheckMark />
                  </Container>
                  <Paragraph marginLeft={16}>{copy}</Paragraph>
                </Flex>
              ))}
            </Container>
          )}
        </Container>
      </Container>
      <Footer size={50} />
    </LazyMotion>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPiece = works.filter(work => work.id.toString() === params?.id);

  return {
    props: {
      data: currentPiece[0],
    },
  };
};

export default Work;
