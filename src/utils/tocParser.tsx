import { isHeading } from 'datocms-structured-text-utils';
import { Container, Link, Text } from 'quarks';
import { StructuredText, renderNodeRule } from 'react-datocms';

import type { StructuredTextGraphQlResponse } from 'react-datocms';

export type StructuredData = StructuredTextGraphQlResponse | null;

const tocParser = (data?: StructuredData, slug?: string | null) => {
  if (data?.value) {
    const onlyHeadings = {
      value: {
        schema: 'dast',
        document: {
          type: 'root',
          children: data.value.document.children.filter(a => a.type === 'heading'),
        },
      },
    };

    return (
      <StructuredText
        data={onlyHeadings as StructuredTextGraphQlResponse}
        customNodeRules={[
          renderNodeRule(isHeading, ({ children, key }) => {
            // @ts-expect-error parser needs updated types
            const serialNumber = children[0].props?.children[0].match(/\b\w/g).join('');

            return (
              <Link
                key={key}
                display="block"
                textColor={{ light: 'common-black', dark: 'common-white' }}
                href={`https://www.justinwallace.dev/blog/${slug}#${serialNumber}`}
              >
                <Container
                  hover={{ backgroundColor: { dark: 'purple-800', light: 'gray-50' } }}
                  paddingX={8}
                  paddingY={12}
                  borderRadius="8px"
                  cursor="pointer"
                >
                  <Text>{children}</Text>
                </Container>
              </Link>
            );
          }),
        ]}
      />
    );
  }
};

export default tocParser;
