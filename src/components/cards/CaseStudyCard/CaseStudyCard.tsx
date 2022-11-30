import { CaseStudyCardRecord } from 'graphql/generatedTypes';
import { Container } from 'quarks';

import Image from 'quarks/Image';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { FC } from 'react';

type CaseStudyCardProps = BasicProps & CaseStudyCardRecord;

const OffsetGridCard: FC<CaseStudyCardProps> = ({ image }) => (
  <Container
    backgroundColor={{ dark: 'purple-800', light: 'common-white' }}
    borderRadius="8px"
    lineHeight={0}
    boxShadow="xl"
    overflowY="hidden"
    width="80vw"
    maxWidth="800px"
    maxHeight="700px"
    lg={{ width: '60vw', marginBottom: 32 }}
    aspectRatio={[image?.width, image?.height]}
    position="relative"
  >
    <Image
      src={image?.url || ''}
      alt={image?.alt || ''}
      layout="fill"
      objectFit="cover"
      md={{ width: 'unset', maxWidth: '550px' }}
      xl={{ maxWidth: '800px' }}
      // objectPosition="top"
    />
  </Container>
);

export default OffsetGridCard;
