import color from 'atoms/colors/colors';
import { padding as spacing } from 'atoms/spacing/spacing';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectEntries } from 'utils/typeUtils';

const Spacing = () => {
  const spacingArray = objectEntries(spacing);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Spacing
      </Heading>
      <Paragraph maxWidth="768px" textColor={{ light: 'gray-500', dark: 'gray-300' }} marginTop={8} marginBottom={32}>
        Just like your color scale, working from a defined spacing system allows you to work faster and more
        consistently. Consistent, and scalable spacing helps you eliminate guesswork while designing and developing
        because you&apos;re designing with a limited set of options.
      </Paragraph>
      <Flex display="flex" gap="64px" paddingAll={4}>
        {['px', 'rem'].map(columnType => (
          <Container key={columnType}>
            {spacingArray.map(([spacingNumber, spacingValue]) => (
              <Container
                key={spacingNumber}
                width={spacingValue}
                css={`
                  background-color: ${color.primary[700]}25;
                `}
                height="20px"
                position="relative"
                textColor={{
                  light: 'primary-700',
                  dark: 'primary-100',
                }}
                fontSize={12}
                lineHeight={18}
                marginAll={16}
              >
                {columnType === 'px' ? `${spacingNumber}px` : spacingValue}
              </Container>
            ))}
          </Container>
        ))}
      </Flex>
    </div>
  );
};

export default Spacing;
