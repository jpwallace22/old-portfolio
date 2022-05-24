import blur from 'atoms/blurs/blurs';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';

import { objectEntries, objectKeys } from 'utils/typeUtils';

const Blurs = () => {
  const blurBackground = objectEntries(blur.background);
  const blurSizes = objectKeys(blur.sizing);

  return (
    <div>
      <Heading as="h1" marginBottom={20} fontWeight="bold">
        Blurs
      </Heading>
      <Paragraph maxWidth="768px" textColor={{ light: 'gray-500', dark: 'gray-300' }} marginTop={8} marginBottom={32}>
        Background blurs are often used stylistically in modern UI design. However, just like shadows, they allow you to
        add depth and realism to designs by positioning elements on a z-axis.
      </Paragraph>
      <Flex
        width="100%"
        backgroundImage="/blurBackground.jpg"
        backgroundRepeat="no-repeat"
        backgroundPosition="left"
        backgroundSize="cover"
        minHeight="500px"
        paddingY={80}
        paddingX={40}
        flexWrap="wrap"
        gap="4rem"
      >
        {blurSizes.map(blurName =>
          blurBackground.map(([backgroundName, backgroundValue]) => (
            <Flex
              key={blurName + backgroundValue}
              width="45%"
              borderRadius="8px"
              flexWrap="wrap"
              backdropFilter={blurName}
              css={`
                background-color: ${backgroundValue};
              `}
              alignItems="center"
              justifyContent="center"
              height="200px"
            >
              <Heading
                as="h6"
                fontWeight="semiBold"
                marginAll="auto"
                textColor="common-black"
                textAlign="center"
                alignSelf="center"
              >
                {blurName} {backgroundName}
              </Heading>
            </Flex>
          )),
        )}
      </Flex>
    </div>
  );
};

export default Blurs;
