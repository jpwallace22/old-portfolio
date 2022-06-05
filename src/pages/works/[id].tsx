import { works } from 'data/data';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FiGithub } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';

// Quarks
import Container from 'quarks/Container';
import { LargeCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

// Components
import TechStack from 'components/TechStack/TechStack';

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
  data: { title, subTitle, bannerImage, techStack, intro },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isDark] = useDarkMode();

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
      <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
        {intro && (
          <Container as="section" marginY={48}>
            <Heading as="h3">{intro.heading}</Heading>
            {intro.body.map((copy: string, i: number) => (
              <Paragraph key={`intro-${i + 1}`}>{copy}</Paragraph>
            ))}
          </Container>
        )}
        <Flex justifyContent="center" gap="32px" marginY={48}>
          <Grid placeItems="center" gap="16px" width="120px">
            <FiGithub size={64} />
            <Text as="div" textStyle="xl" fontWeight="semiBold">
              Repository
            </Text>
          </Grid>
          <Grid placeItems="center" gap="16px" width="120px">
            <GoBrowser size={64} />
            <Text as="div" textStyle="xl" fontWeight="semiBold">
              See it live
            </Text>
          </Grid>
        </Flex>
      </Container>
    </Container>
  );
};

export default Work;
