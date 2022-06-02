// External
import styled from 'styled-components';

// Assets
import { ReactComponent as Circle } from 'assets/images/circle.svg';
import dots from 'assets/images/dots.webp';

// Atoms
import { colorParser } from 'atoms/colors/colors';

// Quarks
import Container from 'quarks/Container';
import Image from 'quarks/Image';
import { basic } from 'quarks/interpolations/basic';

// Components
import Hero from 'components/Hero/Hero';

// const Dots = styled(DotSvg)`
//   ${basic}
// `;
const SmallCircle = styled(Circle)`
  ${basic}
`;
const LargeCircle = SmallCircle;

const index = () => (
  <>
    <Container height="100vh" position="relative" maxWidth="1280px" marginX="auto">
      <LargeCircle
        fill={colorParser('purple-800')}
        width="1200px"
        position="absolute"
        right="40%"
        bottom="50%"
        lg={{ right: '55%' }}
      />
      <Image
        src={dots}
        width="650px"
        height="650px"
        alt="test"
        position="absolute"
        left="50%"
        top="0"
        lg={{ left: '50%' }}
      />
      <SmallCircle position="absolute" left="70%" top="10%" fill={colorParser('purple-700')} width="583px" />
      <Hero position="absolute" top="20%" left="5%" lg={{ top: '40%' }} />
    </Container>
  </>
);
export default index;
