import { works } from 'data/data';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';

// Assets
// import dots from 'assets/images/dots.webp';
import { ReactComponent as Circle } from 'assets/svg/circle.svg';

// Atoms
import { colorParser } from 'atoms/colors/colors';

// Quarks
import Container from 'quarks/Container';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';
// import { basic } from 'quarks/interpolations/basic';

// Components
// import Hero from 'components/Hero/Hero';

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
const SmallCircle = styled(Circle).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  ${basic}
`;
const LargeCircle = SmallCircle;

const Work = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container
    as="main"
    maxWidth="1280px"
    paddingY={32}
    paddingX={16}
    contain="layout"
    marginX="auto"
    lg={{ paddingX: 32, paddingY: 64 }}
  >
    <LargeCircle
      fill={colorParser('purple-800')}
      width="1200px"
      position="absolute"
      right="20%"
      bottom="50%"
      zIndex={-1}
    />
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
      {data.title}
    </Heading>
    <Heading
      as="h3"
      fontFamily="primaryFont"
      textStyle="md"
      fontWeight="light"
      textColor={{ light: 'gray-900', dark: 'gray-500' }}
      marginBottom={32}
    >
      Counseling Collective
    </Heading>
    <Image
      src={data?.bannerImage?.src}
      alt={data?.bannerImage?.alt}
      height={data?.bannerImage?.height}
      width={data?.bannerImage?.width}
      maxWidth="80%"
      marginX="auto"
    />
  </Container>
);

export default Work;
