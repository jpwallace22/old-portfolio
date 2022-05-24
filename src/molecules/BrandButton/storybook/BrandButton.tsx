import { FaApple, FaDribbble, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFigma } from 'react-icons/io5';

import { ReactComponent as Dribbble } from 'assets/svg/dribbble.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { ReactComponent as Figma } from 'assets/svg/figma.svg';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';

import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';

import BrandButton from 'molecules/BrandButton/BrandButton';

const StoryBrandButtons = () => {
  const brands = [
    {
      name: 'Google',
      icon: <FcGoogle />,
      largeIcon: <FcGoogle size={24} />,
      outlineIcon: <FcGoogle size={24} />,
      disabledIcon: <FaGoogle />,
      largeDisabledIcon: <FaGoogle size={24} />,
      color: '#FFFFFF',
      textColor: '#344054',
      border: '1px solid #D0D5DD',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      largeIcon: <FaFacebook size={24} />,
      outlineIcon: <Facebook />,
      disabledIcon: <FaFacebook />,
      largeDisabledIcon: <FaFacebook size={24} />,
      color: '#1877f2',
      textColor: '#FFFFFF',
    },
    {
      name: 'Apple',
      icon: <FaApple />,
      largeIcon: <FaApple size={24} />,
      outlineIcon: <FaApple size={24} />,
      disabledIcon: <FaApple />,
      largeDisabledIcon: <FaApple size={24} />,
      color: '#000000',
      textColor: '#FFFFFF',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      largeIcon: <FaTwitter size={24} />,
      outlineIcon: <Twitter />,
      disabledIcon: <FaTwitter />,
      largeDisabledIcon: <FaTwitter size={24} />,
      color: '#1DA1F2',
      textColor: '#FFFFFF',
    },
    {
      name: 'Figma',
      icon: <Figma />,
      largeIcon: <Figma />,
      outlineIcon: <Figma />,
      disabledIcon: <IoLogoFigma />,
      largeDisabledIcon: <IoLogoFigma size={24} />,
      color: '#000000',
      textColor: '#FFFFFF',
    },
    {
      name: 'Dribbble',
      icon: <FaDribbble />,
      largeIcon: <FaDribbble size={24} />,
      outlineIcon: <Dribbble />,
      disabledIcon: <FaDribbble />,
      largeDisabledIcon: <FaDribbble size={24} />,
      color: '#EA4C89',
      textColor: '#FFFFFF',
    },
  ];

  return (
    <Flex flexDirection="row" gap="32px" flexWrap="wrap">
      <Grid>
        {brands.map(items => (
          <BrandButton
            key={items.name}
            variant="contained"
            marginBottom={16}
            startIcon={items.icon}
            brandColor={items.color}
            brandTextColor={items.textColor}
            border={items.border}
          >
            Sign in with {items.name}
          </BrandButton>
        ))}
      </Grid>
      <Grid>
        {brands.map(items => (
          <BrandButton
            key={items.name}
            variant="contained"
            paddingX={12}
            marginBottom={16}
            brandColor={items.color}
            brandTextColor={items.textColor}
            border={items.border}
          >
            {items.largeIcon}
          </BrandButton>
        ))}
      </Grid>
      <Grid>
        {brands.map(items => (
          <BrandButton key={items.name} variant="outlined" marginBottom={16} startIcon={items.outlineIcon}>
            Sign in with {items.name}
          </BrandButton>
        ))}
      </Grid>
      <Grid>
        {brands.map(items => (
          <BrandButton key={items.name} variant="outlined" paddingX={12} marginBottom={16}>
            {items.outlineIcon}
          </BrandButton>
        ))}
      </Grid>
      <Grid>
        {brands.map(items => (
          <BrandButton
            key={items.name}
            variant="outlined"
            disabled={true}
            marginBottom={16}
            startIcon={items.disabledIcon}
          >
            Sign in with {items.name}
          </BrandButton>
        ))}
      </Grid>
      <Grid>
        {brands.map(items => (
          <BrandButton key={items.name} variant="outlined" disabled={true} paddingX={12} marginBottom={16}>
            {items.largeDisabledIcon}
          </BrandButton>
        ))}
      </Grid>
    </Flex>
  );
};

export default StoryBrandButtons;
