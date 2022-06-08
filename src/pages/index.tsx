import { works } from 'data/data';
import Head from 'next/head';

// Assets
import dots from 'assets/images/dots.webp';

// Quarks
import Container from 'quarks/Container';
import { LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

// Components
import AlternatingSwitchbacks from 'components/AlternatingSwitchbacks/AlternatingSwitchbacks';
import Hero from 'components/Hero/Hero';

const index = () => (
  <>
    <Head>
      <title>Justin Wallace - Home</title>
    </Head>
    <Container as="main" maxWidth="1440px" marginX="auto" paddingX={16} lg={{ paddingX: 32 }}>
      <Container as="section" height="90vh" contain="layout" position="relative">
        <LargeCircle position="absolute" right="40%" bottom="50%" zIndex={-1} lg={{ right: '50%' }} />
        <Image
          src={dots}
          width={650}
          height={650}
          alt=""
          position="absolute"
          left="50%"
          top="0"
          zIndex={-1}
          lg={{ left: '58%' }}
        />
        <SmallCircle position="absolute" left="80%" top="10%" zIndex={-1} lg={{ left: '75%' }} />
        <Hero position="absolute" top="5%" left="2%" lg={{ top: '40%' }} />
      </Container>
      <Container as="section" position="relative" contain="layout">
        <LargeCircle position="absolute" left="50%" bottom="-500px" zIndex={-1} lg={{ bottom: '-200px' }} />
        <Heading as="h3" textStyle="lg" marginBottom={64} lg={{ textStyle: 'xxl' }}>
          Some Works
        </Heading>
        <AlternatingSwitchbacks works={works} />
      </Container>
    </Container>
  </>
);
export default index;
