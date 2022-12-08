import { Flex, Image } from 'quarks';

import type { TechStackRecord } from 'graphql/generatedTypes';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface ITechStack extends FlexProps {
  techs: TechStackRecord[];
}

const TechStack: FC<ITechStack> = ({ techs, ...props }) => (
  <Flex justifyContent="center" gap="32px" flexWrap="wrap" lg={{ flexDirection: 'column' }} {...props}>
    {techs.map(({ title, thumbnail }) => (
      <Image src={thumbnail?.url || ''} width={50} height={50} alt={title || ''} key={title} loading="eager" />
    ))}
  </Flex>
);

export default TechStack;
