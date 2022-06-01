// Quarks
import Container from 'quarks/Container';

// Components
import Hero from 'components/Hero/Hero';

const index = () => (
  <>
    <Container height="100vh" position="relative">
      <Hero position="absolute" top="20%" />
    </Container>
  </>
);
export default index;
