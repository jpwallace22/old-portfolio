import color, { ColorList, ColorObject } from 'atoms/colors/colors';
import container from 'atoms/spacing/containers';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectEntries } from 'utils/typeUtils';

const ColorSwatches = () => {
  const colorDescriptions = {
    gray: 'Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.',
    primary:
      'The primary color is your "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.',
    danger:
      'Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.',
    purple:
      'This is a secondary brand color. The purple pairs will with the Primary green and can be used in a number of ways for both dark and light layout.',
  } as Record<keyof ColorObject, string>;

  const colorArray = objectEntries(color);

  return (
    <div>
      <Heading as="h1" marginBottom={20}>
        Colors
      </Heading>
      <Paragraph maxWidth={container.md} textColor={{ light: 'gray-900', dark: 'gray-500' }} marginBottom={32}>
        This design system leverages a purposeful set of color styles as the perfect starting point for any brand or
        project. When it comes to color, contrast is critical for ensuring text is legible. I&apos;ve added WCAG 2.1
        contrast ratios to my color system so you can make sure you&apos;re designing with accessibility in mind.
      </Paragraph>
      {colorArray.map(([swatchName, swatchValues]) => (
        <Container key={swatchName}>
          <Heading as="h5" marginBottom={8} textTransform="capitalize">
            {swatchName}
          </Heading>
          {colorDescriptions[swatchName] && (
            <Paragraph maxWidth={container.md} marginBottom={16}>
              {colorDescriptions[swatchName]}
            </Paragraph>
          )}
          <Flex display="flex" flexWrap="wrap" gap="32px" marginBottom={32}>
            {objectEntries(swatchValues).map(([colorName, colorValue]) => (
              <Container
                key={colorName}
                minHeight="150px"
                minWidth="100px"
                boxShadow="lg"
                borderRadius="8px"
                backgroundColor={{ light: 'common-white', dark: 'gray-800' }}
              >
                <Container
                  minHeight="80px"
                  backgroundColor={`${swatchName}-${colorName}` as ColorList}
                  borderTopLeftRadius="8px"
                  borderTopRightRadius="8px"
                />
                <Container paddingAll={12}>
                  <Heading as="h6" marginBottom={8} lineHeight={28}>
                    {colorName}
                  </Heading>
                  <Paragraph fontSize={14} lineHeight={20}>
                    {colorValue}
                  </Paragraph>
                </Container>
              </Container>
            ))}
          </Flex>
        </Container>
      ))}
    </div>
  );
};

export default ColorSwatches;
