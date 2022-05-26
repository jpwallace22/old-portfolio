import { FiCoffee, FiHelpCircle, FiPower } from 'react-icons/fi';
import { RiBracketsFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';

interface IconProps {
  /**
   * Takes any valid CSS color argument. STRONGLY recommended to avoid and use parent textColor
   */
  color: string;
  /**
   * Controls fill color for the icon. Takes any valid CSS color argument.
   */
  fill: string;
  /**
   * Takes a number or string value and outputs corresponding strokeWidth to the icon
   */
  strokeWidth: string | number;
  /**
   * Takes a number or string value and outputs corresponding size to the icon
   */
  size: string | number;
  /**
   * Creates accessible mouseover text for the icon.
   */
  title: string;
}

const StoryIcons = (props: IconProps) => (
  <Container>
    <Heading as="h1" marginBottom={20}>
      Icons
    </Heading>
    <Paragraph maxWidth="768px" textColor={{ light: 'gray-900', dark: 'gray-500' }} marginTop={8} marginBottom={32}>
      Icons make use of the React Icons collection of libraries. I have 21 different libraries with a total of more than
      23k different Icons. If an Icon is not available within one of these libraries, webpack has been configured to
      import SVGs as ReactComponents.
    </Paragraph>
    <Flex display="flex" flexWrap="wrap" gap="2rem" marginTop={48}>
      <FiHelpCircle {...props} />
      <FiCoffee {...props} />
      <FiPower {...props} />
      <RiBracketsFill {...props} />
      <VscGithub {...props} />
    </Flex>
    <Paragraph maxWidth="768px" textColor={{ light: 'gray-900', dark: 'gray-500' }} marginTop={48}>
      A complete searchable list of all Icons can be found{' '}
      <Link href="https://react-icons.github.io/react-icons/">here</Link>
    </Paragraph>
  </Container>
);

export default StoryIcons;
