import { FC } from 'react';

import { BasicProps } from 'quarks/interpolations/basic';

// interface $nameProps extends BasicProps {}

const $name: FC = ({ ...props }) => <div>$name</div>;

export default $name;

$name.defaultProps = {};
