import { CaseStudyCardRecord } from 'graphql/generatedTypes';
import { Container } from 'quarks';

import Image from 'quarks/Image';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { FC } from 'react';

type CaseStudyCardProps = BasicProps & CaseStudyCardRecord;

const OffsetGridCard: FC<CaseStudyCardProps> = ({ image }) => (
  <Container
    backgroundColor={{ dark: 'purple-800', light: 'common-white' }}
    borderRadius="16px"
    lineHeight={0}
    boxShadow="xxl"
    overflowY="hidden"
    width="80vw"
    md={{ width: 'unset', maxWidth: '550px' }}
    xl={{ maxWidth: '800px' }}
  >
    <Image
      src={image?.url || ''}
      alt={image?.alt || ''}
      width={image?.width || 0}
      height={image?.height > 700 ? 700 : image?.height}
      objectFit="cover"
      objectPosition="top"
    />
  </Container>
);

export default OffsetGridCard;
