// import { useMediaQuery } from '@mui/material';
import { works } from 'data/data';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

// Quarks
// import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import { LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';

// Components
import Carousel from 'components/Carousel/Carousel';
// import Masonry from 'components/Masonry/Masonry';
import TechStack from 'components/TechStack/TechStack';
import SmallCard, { SmallCardProps } from 'components/cards/SmallCard/SmallCard';

import useDarkMode from 'contexts/ThemeProvider';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works.map(work => ({
    params: { id: work.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPiece = works.filter(work => work.id.toString() === params?.id);

  return {
    props: {
      data: currentPiece[0],
    },
  };
};

const Work = ({
  data: { title, subTitle, bannerImage, techStack, intro, ctas, gallery },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isDark] = useDarkMode();

  // const isNotMobile = useMediaQuery(media.md);

  return (
    <Container
      as="main"
      maxWidth="1440px"
      paddingY={32}
      paddingX={16}
      contain="layout"
      marginX="auto"
      lg={{ paddingX: 32, paddingY: 64 }}
    >
      <LargeCircle position="absolute" right="20%" top="-800px" />
      <Heading
        as="h2"
        textStyle="xxl"
        fontSize={60}
        marginBottom={12}
        lineHeight={32}
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
            lg={{ marginAll: 0 }}
          />
        )}
        {techStack && <TechStack icons={techStack} lg={{ flexDirection: 'column' }} />}
      </Flex>
      <SmallCircle position="absolute" right="-400px" top="450px" opacity={0.3} />
      <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
        {intro && (
          <Container as="section" marginY={48}>
            <Heading as="h3">{intro.heading}</Heading>
            {intro.body.map((copy: string, i: number) => (
              <Paragraph key={`intro-${i + 1}`}>{copy}</Paragraph>
            ))}
          </Container>
        )}
        {ctas && (
          <Flex justifyContent="center" gap="32px" marginY={48}>
            {ctas.map((cta: SmallCardProps) => (
              <SmallCard key={cta.title} icon={cta.icon} title={cta.title} url={cta.url} />
            ))}
          </Flex>
        )}
      </Container>
      {gallery && (
        <Container as="main" maxWidth="1440px" paddingX={16} contain="layout" marginX="auto" lg={{ paddingX: 32 }}>
          <Carousel autoPlay interval={6} paddingY={48}>
            {gallery.map((image: { url: string; alt?: string; width: number; height: number }) => (
              <Grid placeItems="center" key={image.url}>
                <Image src={image.url} width={image.width} height={image.height} alt={image.alt ? image.alt : ''} />
              </Grid>
            ))}
          </Carousel>
        </Container>
      )}
      <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
        {/* content */}
      </Container>
    </Container>
  );
};

export default Work;
