import styled from 'styled-components';

// Assets
import dots from 'assets/images/dots.webp';
import { ReactComponent as Circle } from 'assets/svg/circle.svg';

// Atoms
import { colorParser } from 'atoms/colors/colors';

// Quarks
import Container from 'quarks/Container';
import Image from 'quarks/Image';
import { basic } from 'quarks/interpolations/basic';

// Components
import Hero from 'components/Hero/Hero';

const SmallCircle = styled(Circle)`
  ${basic}
`;
const LargeCircle = SmallCircle;

const index = () => (
  <>
    <Container
      // zIndex={-1}
      height="calc(90vh - 70px)"
      contain="layout"
      position="relative"
      maxWidth="1280px"
      marginX="auto"
    >
      <LargeCircle
        fill={colorParser('purple-800')}
        width="1200px"
        position="absolute"
        right="40%"
        bottom="50%"
        zIndex={-1}
        lg={{ right: '50%' }}
      />
      <Image
        src={dots}
        width="650px"
        height="650px"
        alt="test"
        position="absolute"
        left="50%"
        top="0"
        zIndex={-1}
        lg={{ left: '58%' }}
      />
      <SmallCircle
        position="absolute"
        left="70%"
        top="10%"
        fill={colorParser('purple-700')}
        width="583px"
        zIndex={-1}
        lg={{ left: '75%' }}
      />
      <Hero position="absolute" top="5%" left="5%" lg={{ top: '40%' }} />
    </Container>
  </>
);
export default index;
