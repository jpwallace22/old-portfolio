import { isBlockquote, isCode, isHeading, isLink, isList, isParagraph } from 'datocms-structured-text-utils';
import { Text } from 'quarks';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';

import color, { gradient } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import List from 'quarks/List';
import Paragraph from 'quarks/Paragraph';

import CodeBlock from 'molecules/CodeBlock/CodeBlock';

import { stringToKebabCase } from 'utils/functions';

import type { GetColorDefinition } from 'atoms/colors/colors';
import type { Heading as HeadingType, Record as NodeType, Span } from 'datocms-structured-text-utils';
import type { ButtonRecord } from 'graphql/generatedTypes';
import type { ReactElement } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';

type InlineTypes = 'DatoCmsComponentButton';

export interface InlineRecords
  extends Omit<NodeType, '__typename'>,
    Omit<ButtonRecord, 'children' | 'internal' | '__typename'> {
  __typename: string | InlineTypes;
}

export type StructuredData = StructuredTextGraphQlResponse | Record<string, unknown> | null;

const headingMap = {
  1: {
    mobile: 'lg',
    desktop: 'xl',
  },
  2: {
    mobile: 'lg',
    desktop: 'xl',
  },
  3: {
    mobile: 'md',
    desktop: 'lg',
  },
  4: {
    mobile: 'md',
    desktop: 'md',
  },
  5: {
    mobile: 'sm',
    desktop: 'sm',
  },
  6: {
    mobile: 'xs',
    desktop: 'xs',
  },
} as const;

export const headingToId = (node: HeadingType) => {
  const headingContent = node && (node.children[0] as Span).value?.toString();

  return stringToKebabCase(headingContent);
};

const structuredTextParser = (data?: StructuredData, textColor?: false | GetColorDefinition | null | undefined) => {
  if (data?.value) {
    return (
      <StructuredText
        data={data as StructuredTextGraphQlResponse}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => (
            <Heading
              key={key}
              as={`h${node.level}`}
              textStyle={headingMap[node.level as keyof typeof headingMap].mobile}
              marginTop={key !== 't-0' && 32}
              textColor={{ light: 'common-black', dark: 'common-white' }}
              id={node.level < 5 ? headingToId(node) : ''}
              lg={{ textStyle: headingMap[node.level as keyof typeof headingMap].desktop }}
            >
              {children}
            </Heading>
          )),
          renderNodeRule(isList, ({ node, children, key }) =>
            node.style === 'bulleted' ? (
              <List
                key={key}
                discColor="purple-500"
                marginLeft={24}
                textColor={{ dark: 'gray-500', light: 'purple-900' }}
              >
                {children}
              </List>
            ) : (
              <Flex
                key={key}
                as="ol"
                flexDirection="column"
                marginLeft={4}
                gap="16px"
                css={`
                  li {
                    list-style-position: outside;
                    padding-left: 24px;
                  }
                `}
              >
                {children}
              </Flex>
            ),
          ),
          renderNodeRule(isLink, ({ node, children, key }) => (
            <Link
              key={key}
              href={node.url}
              fontWeight="bold"
              textColor={{ dark: 'purple-300', light: 'purple-500' }}
              css={`
                width: calc(100%);
                background-image: linear-gradient(transparent calc(100% - 1px), ${color.purple[400]} 1px);
                background-repeat: no-repeat;
                background-size: 0% 100%;
                transition: background-size 0.5s, filter 0.5s;
                &:hover {
                  background-size: 100% 100%;
                  filter: brightness(1.2);
                }
              `}
            >
              {children}
            </Link>
          )),
          renderNodeRule(isBlockquote, ({ node, children, key }) => (
            <Container
              key={key}
              paddingLeft={24}
              css={`
                border-image-source: ${gradient.purpleBottom};
                border-image-slice: 1;
                border-width: 0 0 0 8px;
                border-style: solid;
              `}
            >
              <>
                <Paragraph as="div" fontSize={24} fontWeight="semiBold">
                  {children}
                </Paragraph>
                {node.attribution && (
                  <Paragraph fontSize={16} marginTop={24}>
                    {node.attribution}
                  </Paragraph>
                )}
              </>
            </Container>
          )),
          renderNodeRule(isParagraph, ({ children, key }) => {
            const nodeData = children && (children[0] as ReactElement);
            const isText = nodeData?.props.children && typeof nodeData.props.children[0] === 'string';

            return isText ? (
              <Paragraph key={key} textColor={textColor}>
                {children}
              </Paragraph>
            ) : (
              <Container key={key} textColor={textColor}>
                {children}
              </Container>
            );
          }),
          renderNodeRule(isCode, ({ node, key }) => <CodeBlock key={key} node={node} />),
        ]}
        customMarkRules={[
          renderMarkRule('strong', ({ children, key }) => (
            <Text key={key} fontWeight="bold" textColor={textColor}>
              {children}
            </Text>
          )),
          renderMarkRule('code', ({ children, key }) => (
            <Text
              key={key}
              textColor={{ dark: 'primary-300', light: 'purple-600' }}
              backgroundColor={{ dark: 'purple-900', light: 'gray-300' }}
              fontWeight="semiBold"
              css={`
                border-radius: 4px;
                padding: 2px 4px;
                font-family: 'Courier New', Courier, monospace;
              `}
            >
              {children}
            </Text>
          )),
        ]}
        renderBlock={({ record }) => {
          record = record.media as NodeType;
          switch (record.__typename) {
            case 'FileField':
              return (
                <Flex marginY={16} flexDirection="column" alignItems="center">
                  <>
                    <Container
                      position="relative"
                      width="100%"
                      aspectRatio={[record.width as number, record.height as number]}
                    >
                      <Image src={record.url as string} alt={(record.alt as string) || ''} loading="lazy" fill />
                    </Container>
                    {record?.title && (
                      <Paragraph fontSize={16} fontWeight="regular" textAlign="center" textColor={textColor}>
                        {record?.title as string}
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
