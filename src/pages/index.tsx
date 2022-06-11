import { home } from 'data/data';
import Head from 'next/head';

// Assets
import dots from 'assets/images/dots.webp';

// Quarks
import Container from 'quarks/Container';
import { Dots, LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

// Components
import AlternatingSwitchbacks from 'components/AlternatingSwitchbacks/AlternatingSwitchbacks';
import Hero from 'components/Hero/Hero';
import Switchback from 'components/Switchback/Switchback';

const index = () => (
  <>
    <Head>
      <title>Justin Wallace | Home</title>
    </Head>
    <Container as="main" maxWidth="1440px" marginX="auto" paddingX={16} lg={{ paddingX: 32 }}>
      <Container as="section" height="85vh" contain="layout" position="relative" lg={{ height: '100vh' }}>
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
        <Hero position="absolute" top="5%" lg={{ top: '40%' }} />
      </Container>

      <Container
        as="section"
        position="relative"
        paddingBottom={64}
        contain="layout"
        zIndex={1}
        lg={{ paddingY: 64, paddingBottom: 80 }}
      >
        <Switchback {...home.aboutMe} />
        <Dots position="absolute" bottom="0" left="45%" lg={{ top: '0' }} />
      </Container>

      <Container as="section" position="relative" contain="layout" paddingY={64}>
        <LargeCircle position="absolute" left="80%" bottom="-500px" zIndex={-10} lg={{ bottom: '-200px' }} />
        <Heading as="h3" textStyle="lg" marginBottom={32} lg={{ textStyle: 'xl' }}>
          Some Works
        </Heading>
        <AlternatingSwitchbacks works={home.works} />
      </Container>
    </Container>
  </>
);
export default index;
