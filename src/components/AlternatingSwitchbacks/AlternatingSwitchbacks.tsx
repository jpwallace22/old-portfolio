import { useMediaQuery } from '@mui/material';
import { WorksType } from 'data/data';
import { motion } from 'framer-motion';
import { FC } from 'react';

// Atoms
import { media } from 'atoms/breakpoints/breakpoints';

// Quarks
import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import { BasicProps } from 'quarks/interpolations/basic';

import useDarkMode from 'contexts/ThemeProvider';

type AlternatingSwitchbacksProps = BasicProps & {
  works: WorksType;
};

const AlternatingSwitchbacks: FC<AlternatingSwitchbacksProps> = ({ works, ...props }) => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Flex flexDirection="column" gap="48px" alignItems="center" {...props}>
      {works.map((work, i) => {
        const isEven = i % 2 === 0;

        return (
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            transition={{ x: { type: 'spring', duration: 2, bounce: 0.6 }, opacity: { duration: 1 } }}
            viewport={{ once: true }}
            key={work.id}
          >
            <Link href={work.url}>
              <Flex
                gap="32px"
                justifyContent="center"
                textAlign={isEven ? 'left' : 'right'}
                alignItems="center"
                flexDirection={isEven ? 'row-reverse' : 'row'}
                position="relative"
                cursor="pointer"
                lg={{ marginRight: isEven ? 80 : 0, marginLeft: isEven ? 0 : 80 }}
                css={
                  isDesktop
                    ? `
                  :hover h4 {
                    transform: scale(1.15) translateX(${isEven ? '30px' : '-30px'});
                  }
                  :hover .image-wrapper {
                    transform: rotate(${isEven ? '5deg' : '-5deg'});
                  }
                `
                    : undefined
                }
              >
                <Container width="50%">
                  <Heading
                    as="h4"
                    textStyle="md"
                    position="relative"
                    transition="all 1s ease"
                    zIndex={2}
                    textShadow={isDarkMode ? '5px 5px 10px #110e2d' : undefined}
                    lg={{ textStyle: 'lg' }}
                    after={{
                      content: '',
                      position: 'absolute',
                      top: '150%',
                      height: '5px',
                      backgroundImage: isEven ? 'gradient-purpleRight' : 'gradient-purpleLeft',
                      left: isEven ? '15%' : 0,
                      right: isEven ? 0 : '15%',
                      marginX: 'auto',
                      width: '80%',
                    }}
                  >
                    {work.title}
                  </Heading>
                </Container>
                <Container width="40%" className="image-wrapper" transition="all 1s ease">
                  <Image
                    src={work.bannerImage.src}
                    height={500}
                    width={500}
                    alt={work.bannerImage.alt}
                    marginX="auto"
                  />
                </Container>
              </Flex>
            </Link>
          </motion.div>
        );
      })}
    </Flex>
  );
};

export default AlternatingSwitchbacks;
