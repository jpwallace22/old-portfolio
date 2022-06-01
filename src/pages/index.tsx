import styled, { css } from 'styled-components';

// Assets
import { ReactComponent as Logo } from 'assets/images/logo-gradient.svg';

// Quarks
import Container from 'quarks/Container';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';
import { basic } from 'quarks/interpolations/basic';

const StyledLogo = styled(Logo)`
  ${basic}
`;

const index = () => (
  <Container>
    <Container maxWidth="896px" paddingAll={32} as="section">
      <StyledLogo
        width="128px"
        float="left"
        marginRight={32}
        marginTop={8}
        css={css`
          ::after {
            content: '';
            clear: both;
            display: table;
          }
        `}
      />
      <Heading as="h2" textStyle="xxl" marginBottom={12} lineHeight={56}>
        Oh, hello there! <Text fontSize={60}>👋🏼</Text> I&apos;m{' '}
        <Text fontFamily="secondaryFont" gradient="purpleLeft">
          Justin Wallace
        </Text>
      </Heading>
      <Heading as="h2" textStyle="xxl">
        {' '}
        A dedicated developer &amp; designer{' '}
      </Heading>
    </Container>
  </Container>
);
export default index;
