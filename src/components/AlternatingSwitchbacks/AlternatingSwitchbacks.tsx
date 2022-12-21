import { lazy } from 'react';

import { useMediaQuery } from '@mui/material';
import { m } from 'framer-motion';
import { Container, Flex, Heading, Image, LargeCircle, Link } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';

import Section from 'molecules/Section/Section';
import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import useDarkMode from 'contexts/ThemeProvider';

import type { HomepageModelWorksIntroField, WorkRecord } from 'graphql/generatedTypes';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC } from 'react';

const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

type AlternatingSwitchbacksProps = BasicProps & {
  works: WorkRecord[];
  headingAs?: HeadingTypes;
  worksHeading?: string | null;
  worksIntro?: HomepageModelWorksIntroField | null;
};

const AlternatingSwitchbacks: FC<AlternatingSwitchbacksProps> = ({
  works,
  worksHeading,
  worksIntro,
  headingAs,
  ...props
}): JSX.Element => {
  const [isDarkMode] = useDarkMode();
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Section>
      <LargeCircle position="absolute" left="-900px" top="90px" zIndex={-10} lg={{ bottom: '-200px' }} />
      <StandardFadeIn>
        <Flex gap="24px" flexDirection="column" lg={{ maxWidth: '66%' }}>
          <Heading as={headingAs || 'h3'} textStyle="lg" lg={{ textStyle: 'xl' }}>
            {worksHeading}
          </Heading>
          <StructuredTextParser text={worksIntro} textColor={{ dark: 'gray-500', light: 'purple-900' }} />
        </Flex>
      </StandardFadeIn>

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
                  <Container
                    width="40vw"
                    maxWidth="500px"
                    className="image-wrapper"
                    transition="all 1s ease"
                    position="relative"
                    aspectRatio={[work?.bannerImage?.width, work?.bannerImage?.height]}
                  >
                    <Image
                      src={work?.bannerImage?.url || ''}
                      fill
                      marginX="auto"
                      alt={work?.bannerImage?.alt || ''}
                      sizes="50vw"
                    />
                  </Container>
                </Flex>
              </Link>
            </m.div>
          );
        })}
      </Flex>
    </Section>
  );
};

export default AlternatingSwitchbacks;
