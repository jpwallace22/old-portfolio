import { works } from 'data/data';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

// Quarks
import Container from 'quarks/Container';
import { LargeCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';

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
          marginBottom={32}
        >
          {subTitle}
        </Heading>
      )}
      <Flex
        flexDirection="column"
        gap="32px"
        lg={{ flexDirection: 'row-reverse', justifyContent: 'center', gap: '128px' }}
        marginBottom={32}
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
      <Container maxWidth="1280px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
        {intro && (
          <>
            <Heading as="h3" marginBottom={8}>
              {intro.heading}
            </Heading>
            <Paragraph textColor={{ light: 'gray-900', dark: 'gray-500' }}>{intro.body}</Paragraph>
          </>
        )}
      </Container>
    </Container>
  );
};

export default Work;
