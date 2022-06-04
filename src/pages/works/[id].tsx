import { works } from 'data/data';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

// import styled from 'styled-components';

// Assets
// import dots from 'assets/images/dots.webp';
// import { ReactComponent as Circle } from 'assets/svg/circle.svg';

// Atoms
// import { colorParser } from 'atoms/colors/colors';

// Quarks
// import Container from 'quarks/Container';
// import Image from 'quarks/Image';
// import { basic } from 'quarks/interpolations/basic';

// Components
// import Hero from 'components/Hero/Hero';

// const SmallCircle = styled(Circle)`
// ${basic}
// `;
// const LargeCircle = SmallCircle;

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
      work: currentPiece[0],
    },
  };
};

const Work = ({ work }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <div>{work.title}</div>
  </div>
);

export default Work;
