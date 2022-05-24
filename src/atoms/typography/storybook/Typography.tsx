import { font, fontWeight } from 'atoms/typography/typography';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectEntries } from 'utils/typeUtils';

const Typography = () => {
  const fontArr = objectEntries(font);
  const fontWeightArr = objectEntries(fontWeight);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold" color="gray-900">
        Typography
      </Heading>
      <Paragraph
        textColor={{ light: 'gray-500', dark: 'gray-300' }}
        textStyle="xl"
        maxWidth="768px"
        marginTop={8}
        marginBottom={32}
      >
        Our design system leverages a purposeful set of typographic styles. We&apos;ve stress-tested this typographic
        scale across dozens of projects to make sure it&apos;s robust enough to use across (almost) any project, while
        remaining as accessible as possible for everyone.
      </Paragraph>
      <Flex flexDirection="column-reverse">
        {fontArr.map(([typeName, sizes]) => (
          <Flex key={typeName} display="flex" flexDirection="column-reverse" paddingTop={16} marginTop={32}>
            {objectEntries(sizes).map(([sizeName]) => (
              <Flex key={sizeName}>
                {fontWeightArr.map(([weightName]) => (
                  <Container key={weightName} borderTop="1px solid" borderTopColor="gray-300">
                    {typeName === 'display' ? (
                      <>
                        <Heading as="h2" minWidth="400px" textStyle={sizeName} fontWeight={weightName}>
                          {`${typeName} ${sizeName}`}
                        </Heading>
                        <Heading as="h2" textStyle={sizeName} fontWeight={weightName}>{`${weightName}`}</Heading>
                      </>
                    ) : (
                      <>
                        <Paragraph textStyle={sizeName} fontWeight={weightName} minWidth="400px">
                          {`${typeName} ${sizeName}`}
                        </Paragraph>
                        <Paragraph textStyle={sizeName} fontWeight={weightName}>{`${weightName}`}</Paragraph>
                      </>
                    )}
                  </Container>
                ))}
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default Typography;
