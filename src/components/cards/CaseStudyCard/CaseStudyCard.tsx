import container from 'atoms/spacing/containers';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import type { FC } from 'react';

interface CaseStudyCardProps extends BasicProps {
  showCardProof: boolean;
  isActive?: boolean;
  image: any;
  stats: any;
  body: any;
}

const OffsetGridCard: FC<CaseStudyCardProps> = ({ image, stats, body, showCardProof }) => (
  <Flex
    flexDirection="column"
    backgroundColor="common-white"
    borderRadius="24px"
    minWidth="344px"
    boxShadow="xxl"
    overflowY="hidden"
    md={{ maxWidth: container.md }}
    lg={{ maxWidth: container.xl }}
  >
    <Image
      src={image?.src || ''}
      alt={image?.alt || ''}
      width={image?.width || 0}
      height={image?.height || 0}
      objectFit="cover"
    />
    <Flex maxHeight={showCardProof ? '320px' : '0px'} overflowY="hidden">
      <Flex
        paddingX={24}
        paddingY={24}
        flexDirection="column"
        md={{ flexDirection: 'row', paddingAll: 32 }}
        xl={{ paddingX: 48, paddingY: 64 }}
        gap="24px"
      >
        <Flex
          flexDirection="column"
          gap="16px"
          paddingBottom={24}
          borderBottom="1px solid"
          borderColor="gray-400"
          lineHeight={24}
          md={{
            paddingBottom: 0,
            paddingRight: 24,
            borderRight: '1px solid',
            borderBottom: '0',
            gap: '59px',
            minWidth: '270px',
            fontSize: 20,
            lineHeight: 30,
          }}
          lg={{ lineHeight: 32, gap: '38px' }}
          xl={{ fontSize: 24 }}
        >
          <StructuredTextParser text={stats} />
        </Flex>
        <Flex flexDirection="column" gap="16px" lg={{ maxWidth: '670px', paddingLeft: 32 }}>
          <Text as="div" textStyle="md" md={{ textStyle: 'lg' }} xl={{ textStyle: 'xl' }}>
            <StructuredTextParser text={body} />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default OffsetGridCard;
