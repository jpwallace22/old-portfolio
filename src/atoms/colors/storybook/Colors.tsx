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
    creamSoda:
      'Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users\' attention.',
    kermit:
      "Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.",
  } as Record<keyof ColorObject, string>;

  const colorArray = objectEntries(color);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Colors
      </Heading>
      <Paragraph maxWidth={container.md} textColor={{ light: 'gray-900', dark: 'gray-500' }} marginBottom={32}>
        Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or
        project. When it comes to color, contrast is critical for ensuring text is legible. We&apos;ve added WCAG 2.1
        contrast ratios to our color system so you can make sure you&apos;re designing with accessibility in mind.
      </Paragraph>
      {colorArray.map(([swatchName, swatchValues]) => (
        <Container key={swatchName}>
          <Heading as="h5" fontWeight="semiBold" marginBottom={8} textTransform="capitalize">
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
                  <Heading as="h6" marginBottom={8} lineHeight={28} fontWeight="semiBold">
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
