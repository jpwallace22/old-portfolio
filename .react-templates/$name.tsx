import { FC } from 'react';

// Quarks
import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';

type $nameProps = BasicProps;

const $name: FC<$nameProps> = ({ ...props }) => <Container {...props}>$name</Container>;

export default $name;

$name.defaultProps = {};
