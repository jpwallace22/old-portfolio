import { FC } from 'react';

// Quarks
import Container from 'quarks/Container';
import { BasicProps } from 'quarks/interpolations/basic';

type AboutMeProps = BasicProps;

const AboutMe: FC<AboutMeProps> = ({ ...props }) => <Container {...props}>AboutMe</Container>;

export default AboutMe;

AboutMe.defaultProps = {};
