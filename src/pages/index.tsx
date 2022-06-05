// Assets
import dots from 'assets/images/dots.webp';

// Quarks
import Container from 'quarks/Container';
import { LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Image from 'quarks/Image';

// Components
import Hero from 'components/Hero/Hero';

const index = () => (
  <>
    <Container
      as="main"
      height="calc(90vh - 70px)"
      contain="layout"
      position="relative"
      maxWidth="1440px"
      marginX="auto"
      paddingX={16}
      lg={{ paddingX: 32 }}
    >
      <LargeCircle position="absolute" right="40%" bottom="50%" zIndex={-1} lg={{ right: '50%' }} />
      <Image
        src={dots}
        width="650px"
        height="650px"
        alt=""
        position="absolute"
        left="50%"
        top="0"
        zIndex={-1}
        lg={{ left: '58%' }}
      />
      <SmallCircle position="absolute" left="70%" top="10%" zIndex={-1} lg={{ left: '75%' }} />
      <Hero position="absolute" top="5%" left="2%" lg={{ top: '40%' }} />
    </Container>
  </>
);
export default index;
