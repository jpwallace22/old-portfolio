import { FC, ReactNode } from 'react';

// Quarks
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

type SocialsProps = BasicProps & {
  links: {
    platform: string;
    image: ReactNode;
    url: string;
  }[];
};

const Socials: FC<SocialsProps> = ({ links, ...props }) => (
  <Flex as="ul" justifyContent="center" gap="2rem" {...props}>
    {links &&
      links.map(link => (
        <Flex as="li" key={link.platform} textAlign="center" alignItems="center" justifyContent="center">
          <Link href={link.url}>
            <Text textStyle="xl" fontSize={36} fontWeight="bold">
              {link.image}
            </Text>
          </Link>
        </Flex>
      ))}
  </Flex>
);

export default Socials;

Socials.defaultProps = {};
