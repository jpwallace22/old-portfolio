import { FC } from 'react';

import jquery from 'assets/images/jquery.png';
import mui from 'assets/images/mui.png';
import next from 'assets/images/next.jpg';
import styledComponents from 'assets/images/styledComponents.png';
import css from 'assets/svg/css.svg';
import javascript from 'assets/svg/javascript.svg';
import node from 'assets/svg/node.svg';
import react from 'assets/svg/react.svg';
import storybook from 'assets/svg/storybook.svg';
import typescript from 'assets/svg/typescript.svg';

// Quarks
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import { FlexProps } from 'quarks/interpolations/flex';

type TechStackProps = FlexProps & {
  icons: (
    | 'css'
    | 'javascript'
    | 'next'
    | 'node'
    | 'react'
    | 'storybook'
    | 'styledComponents'
    | 'typescript'
    | 'jquery'
    | 'mui'
  )[];
  iconSize?: number;
};

const iconMap = {
  jquery,
  css,
  javascript,
  next,
  node,
  react,
  storybook,
  styledComponents,
  typescript,
  mui,
};

const TechStack: FC<TechStackProps> = ({ icons, ...props }) => (
  <Flex justifyContent="center" gap="32px" {...props}>
    {icons.map(icon => (
      <Image src={iconMap[icon]} width={50} height={50} alt={icon} key={icon} />
    ))}
  </Flex>
);

export default TechStack;
