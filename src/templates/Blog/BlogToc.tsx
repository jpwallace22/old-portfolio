import { BlogPostRecord } from 'graphql/generatedTypes';
import { Container, Flex, Paragraph, Text } from 'quarks';
import { FC } from 'react';

import { colorParser } from 'atoms/colors/colors';

import tocParser, { StructuredData } from 'utils/tocParser';

import useDarkMode from 'contexts/ThemeProvider';

const BlogToc: FC<BlogPostRecord> = ({ body, slug }) => {
  const [isDark] = useDarkMode();

  return (
    <Container display="none" xl={{ display: 'block' }}>
      <Paragraph textStyle="xl" fontWeight="bold" marginBottom={8}>
        In this article
      </Paragraph>
      <Container
        position="relative"
        left="-16px"
        overflowY="scroll"
        maxHeight="65vh"
        paddingLeft={16}
        css={`
          direction: rtl;
          ::-webkit-scrollbar {
            width: 8px;
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: ${colorParser(isDark ? 'purple-700' : 'gray-200')};
            -webkit-border-radius: 1ex;
          }
        `}
      >
        <Text
          as={Flex}
          flexDirection="column"
          css={`
            direction: ltr;
          `}
        >
          {tocParser(body as StructuredData, slug)}
        </Text>
      </Container>
    </Container>
  );
};

export default BlogToc;
