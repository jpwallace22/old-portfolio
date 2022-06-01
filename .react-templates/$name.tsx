import { FC } from 'react';

import { BasicProps } from 'quarks/interpolations/basic';

interface $nameProps extends BasicProps {}

const $name: FC<$nameProps> = ({ ...props }) => <$name>{$name}</$name>;

export default $name;

$name.defaultProps = {};
