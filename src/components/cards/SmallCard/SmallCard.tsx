import { FC } from 'react';
import { FaNpm } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';
import { SiStorybook } from 'react-icons/si';

// Quarks
import Grid from 'quarks/Grid';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

export type SmallCardProps = BasicProps & {
  icon: 'browser' | 'github' | 'npm';
  title: string;
  url: string;
};

const iconMap = {
  github: <FiGithub size={64} />,
  browser: <GoBrowser size={64} />,
  npm: <FaNpm size={64} />,
  storyBook: <SiStorybook size={64} />,
};

const SmallCard: FC<SmallCardProps> = ({ icon, title, url, ...props }) => (
  <Link href={url}>
    <Grid
      placeItems="center"
      gap="8px"
      width="150px"
      paddingAll={16}
      backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
      hover={{ textColor: 'primary-600', boxShadow: 'lg', filter: 'brightness(1.125)' }}
      borderRadius="8px"
      cursor="pointer"
      {...props}
    >
      <>
        {iconMap[icon]}
        <Text as="div" textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
      </>
    </Grid>
  </Link>
);

export default SmallCard;

SmallCard.defaultProps = {};
