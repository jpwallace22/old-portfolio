import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import { objectEntries } from 'utils/typeUtils';

const Breakpoints = () => {
  const breakpointArr = objectEntries(breakpoints);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Breakpoints
      </Heading>
      <Paragraph maxWidth="768px" textColor={{ light: 'gray-500', dark: 'gray-300' }} marginTop={8} marginBottom={32}>
        Breakpoints are the values used to determine at what screen widths to change styles in order to accommodate a
        responsive design.
      </Paragraph>
      <Flex display="flex" flexWrap="wrap" paddingAll={4} marginAll={16}>
        {breakpointArr.map(([breakpointName, breakpointSize]) => (
          <Container key={breakpointName}>
            <Heading key={breakpointName} as="h6" fontWeight="semiBold">
              {breakpointName}
              <Text fontWeight="semiBold"> {breakpointSize}</Text>
            </Heading>
            <Container
              minWidth={breakpointSize}
              backgroundColor={{ light: 'gray-500', dark: 'gray-300' }}
              display="inline-block"
              position="relative"
              height="80px"
              paddingLeft={4}
              marginRight={64}
            />
          </Container>
        ))}
      </Flex>
    </div>
  );
};

export default Breakpoints;
