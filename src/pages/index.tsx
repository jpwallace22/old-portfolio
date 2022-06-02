// External
import styled from 'styled-components';

// Assets
import { ReactComponent as Circle } from 'assets/images/circle.svg';
import { ReactComponent as DotSvg } from 'assets/images/dots.svg';

// Atoms
import { colorParser } from 'atoms/colors/colors';

// Quarks
import Container from 'quarks/Container';
import { basic } from 'quarks/interpolations/basic';

// Components
import Hero from 'components/Hero/Hero';

const Dots = styled(DotSvg)`
  ${basic}
`;
const SmallCircle = styled(Circle)`
  ${basic}
`;
const LargeCircle = SmallCircle;

const index = () => (
  <>
    <Container height="100vh" position="relative">
      <LargeCircle fill={colorParser('purple-800')} width="1200px" position="absolute" right="60%" bottom="50%" />
      <Dots position="absolute" left="45%" top="2%" fill={colorParser('purple-400')} width="620px" />
      <SmallCircle position="absolute" left="70%" top="10%" fill={colorParser('purple-700')} width="583px" />
      <Hero position="absolute" top="30%" left="5%" maxWidth="" />
    </Container>
  </>
);
export default index;
