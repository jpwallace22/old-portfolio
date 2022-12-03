import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

import type { FontSizeDefinition } from 'atoms/typography/typography';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { FlexProps } from 'quarks/interpolations/flex';

import type { FC } from 'react';

const iconMap = {
  instagram: <FiInstagram />,
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  twitter: <FiTwitter />,
  facebook: <FiFacebook />,
  mail: <FiMail />,
};

export type SocialsProps = FlexProps & {
  socials: {
    platform: keyof typeof iconMap;
    url: string;
  }[];
  size?: FontSizeDefinition;
};

const Socials: FC<SocialsProps> = ({ socials, size, ...props }) => (
  <Flex as="ul" justifyContent="center" gap="2rem" {...props}>
    {socials &&
      socials.map(link => (
        <Flex as="li" key={link.platform} textAlign="center" alignItems="center" justifyContent="center">
          <Link href={link.url} aria-label={link.platform}>
            <Text textStyle="xl" fontSize={size} fontWeight="bold" hover={{ textColor: 'primary-600' }}>
              {iconMap[link.platform]}
            </Text>
          </Link>
        </Flex>
      ))}
  </Flex>
);

export default Socials;
