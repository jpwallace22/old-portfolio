import { Flex, Image } from 'quarks';

import jquery from 'assets/images/jquery.png';
import mui from 'assets/images/mui.png';
import next from 'assets/images/next.jpg';
import styledComponents from 'assets/images/styledComponents.png';
import css from 'assets/svg/css.svg';
import dato from 'assets/svg/dato.svg';
import gatsby from 'assets/svg/gatsby.svg';
import graphql from 'assets/svg/graphql.svg';
import javascript from 'assets/svg/javascript.svg';
import node from 'assets/svg/node.svg';
import react from 'assets/svg/react.svg';
import storybook from 'assets/svg/storybook.svg';
import typescript from 'assets/svg/typescript.svg';

import type { FlexProps } from 'quarks/interpolations/flex';

import type { FC } from 'react';

export type TechStackProps = FlexProps & {
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
    | 'gatsby'
    | 'dato'
    | 'graphql'
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
  gatsby,
  dato,
  graphql,
};

const TechStack: FC<TechStackProps> = ({ icons, ...props }) => (
  <Flex justifyContent="center" gap="32px" flexWrap="wrap" lg={{ flexDirection: 'column' }} {...props}>
    {icons.map(icon => (
      <Image src={iconMap[icon]} width={50} height={50} alt={icon} key={icon} />
    ))}
  </Flex>
);

export default TechStack;
