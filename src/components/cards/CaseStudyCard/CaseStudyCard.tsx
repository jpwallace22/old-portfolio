import { Container, Image } from 'quarks';

import type { CaseStudyCardRecord } from 'graphql/types.gen';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type CaseStudyCardProps = BasicProps & CaseStudyCardRecord;

const OffsetGridCard: FC<CaseStudyCardProps> = ({ image, ...props }) => (
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
    {...props}
  >
    <Image
      src={image?.url || ''}
      alt={image?.alt || ''}
      fill
      objectFit="cover"
      md={{ width: 'unset', maxWidth: '550px' }}
      xl={{ maxWidth: '800px' }}
    />
  </Container>
);

export default OffsetGridCard;
