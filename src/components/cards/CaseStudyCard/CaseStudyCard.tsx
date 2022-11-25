import { CaseStudyCardRecord } from 'graphql/generatedTypes';

import container from 'atoms/spacing/containers';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import type { BasicProps } from 'quarks/interpolations/basic';

import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { FC } from 'react';

type CaseStudyCardProps = BasicProps & CaseStudyCardRecord;

const OffsetGridCard: FC<CaseStudyCardProps> = ({ image, body }) => (
  <Flex
    flexDirection="column"
    backgroundColor={{ dark: 'purple-800', light: 'common-white' }}
    borderRadius="16px"
    minWidth="344px"
    boxShadow="xxl"
    overflowY="hidden"
    md={{ maxWidth: container.md }}
    lg={{ maxWidth: container.xl }}
  >
    <Image
      src={image?.url || ''}
      alt={image?.alt || ''}
      width={image?.width || 0}
      height={image?.height || 0}
      objectFit="cover"
    />
    <Flex overflowY="hidden">
      <Flex paddingX={24} paddingY={24} flexDirection="column" md={{ flexDirection: 'row', paddingAll: 32 }} gap="24px">
        <Flex flexDirection="column" paddingX={16}>
          <StructuredTextParser
            textStyle="md"
            textColor={{ dark: 'common-white', light: 'common-black' }}
            text={body}
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default OffsetGridCard;
