import { FC } from 'react';

// Quarks
import Flex from 'quarks/Flex';
import { BasicProps } from 'quarks/interpolations/basic';

type NavbarProps = BasicProps;

const Navbar: FC<NavbarProps> = ({ ...props }) => <Flex {...props}>Navbar</Flex>;

export default Navbar;

Navbar.defaultProps = {};
