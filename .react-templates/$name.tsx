import { Container } from 'quarks';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type $nameProps = BasicProps;

const $name: FC<$nameProps> = ({ ...props }) => <Container {...props}>$name</Container>;

export default $name;
