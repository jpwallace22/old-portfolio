/* eslint-disable arrow-body-style */
import { isCode, isHeading, isLink, isList, isParagraph } from 'datocms-structured-text-utils';
import { ButtonRecord } from 'graphql/generatedTypes';
import { Text } from 'quarks';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import List from 'quarks/List';
import Paragraph from 'quarks/Paragraph';

import type { Record as NodeType } from 'datocms-structured-text-utils';
import type { ReactElement } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

type InlineTypes = 'DatoCmsComponentButton';

export interface InlineRecords
  extends Omit<NodeType, '__typename'>,
    Omit<ButtonRecord, 'children' | 'internal' | '__typename'> {
  __typename: string | InlineTypes;
}

const structuredTextParser = (
  data?: StructuredTextGraphQlResponse | Record<string, unknown> | null,
  isBackgroundDark?: boolean,
) => {
  if (data?.value) {
    return (
      <StructuredText
        data={data as StructuredTextGraphQlResponse}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => (
            <Heading
              key={key}
              as={`h${node.level}`}
              marginTop={40}
              textColor={{ light: 'common-black', dark: 'common-white' }}
            >
              {children}
            </Heading>
          )),
          renderNodeRule(isList, ({ node, children, key }) =>
            node.style === 'bulleted' ? (
              <List discColor={isBackgroundDark ? 'common-white' : 'primary-500'} key={key}>
                {children}
              </List>
            ) : (
              <Flex as="ol" gap="16px" flexDirection="column" key={key}>
                {children}
              </Flex>
            ),
          ),
          renderNodeRule(isLink, ({ node, children, key }) => (
            <Link key={key} href={node.url} textColor="primary-600">
              {children}
            </Link>
          )),
          renderNodeRule(isParagraph, ({ children, key }) => {
            const nodeData = children && (children[0] as ReactElement);
            const isText = nodeData?.props.children && typeof nodeData.props.children[0] === 'string';

            return isText ? <Paragraph key={key}>{children}</Paragraph> : <Container key={key}>{children}</Container>;
          }),
          renderNodeRule(isCode, ({ node, key }) => (
            <SyntaxHighlighter
              key={key}
              language={node.language}
              showLineNumbers
              wrapLines
              useInlineStyles={false}
              customStyle={{
                fontSize: '16px',
                background: 'rgb(240, 240, 240)',
                color: 'rgb(68, 68, 68)',
                padding: '0.5em',
              }}
            >
              {node.code}
            </SyntaxHighlighter>
          )),
        ]}
        customMarkRules={[
          renderMarkRule('strong', ({ children, key }) => (
            <Text key={key} fontWeight="bold">
              {children}
            </Text>
          )),
        ]}
        renderBlock={({ record }) => {
          record = record.media as NodeType;
          switch (record.__typename) {
            case 'FileField':
              return (
                <Flex marginY={48} flexDirection="column" alignItems="center" gap="16px">
                  <>
                    <Image src={record.src as string} alt={(record.alt as string) || ''} width="100%" height="auto" />
                    {record?.title && (
                      <Paragraph fontSize={16} fontWeight="regular" textAlign="center">
                        {(record?.title as string) || ''}
                      </Paragraph>
                    )}
                  </>
                </Flex>
              );
            default:
              return null;
          }
        }}
      />
    );
  }
};

export default structuredTextParser;
