import { useMediaQuery } from '@mui/material';
import { m } from 'framer-motion';
import { Container, Flex, Heading, Image, Link } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';

import useDarkMode from 'contexts/ThemeProvider';

import type { WorkRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type AlternatingSwitchbacksProps = BasicProps & {
  works: WorkRecord[];
};

const AlternatingSwitchbacks: FC<AlternatingSwitchbacksProps> = ({ works, ...props }) => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Flex flexDirection="column" gap="48px" alignItems="center" {...props}>
      {works.map((work, i) => {
        const isEven = i % 2 === 0;

        return (
          <m.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            transition={{ x: { type: 'spring', duration: 2, bounce: 0.6 }, opacity: { duration: 1 } }}
            viewport={{ once: true }}
            key={work.id}
          >
            <Link href={`https://www.justinwallace.dev/works/${work.slug}`}>
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
                  isDesktop &&
                  `
                  :hover h4 {
                    transform: scale(1.15) translateX(${isEven ? '30px' : '-30px'});
                  }
                  :hover .image-wrapper {
                    transform: rotate(${isEven ? '5deg' : '-5deg'});
                  }
                `
                }
              >
                <Container width="50%">
                  <Heading
                    as="h4"
                    textStyle="md"
                    position="relative"
                    transition="all 1s ease"
                    zIndex={2}
                    textShadow={isDarkMode && '5px 5px 10px #110e2d'}
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
                    src={work?.bannerImage?.url || ''}
                    height={500}
                    width={500}
                    marginX="auto"
                    alt={work?.bannerImage?.alt || ''}
                  />
                </Container>
              </Flex>
            </Link>
          </m.div>
        );
      })}
    </Flex>
  );
};

export default AlternatingSwitchbacks;
