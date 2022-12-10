import { lazy } from 'react';

import { m } from 'framer-motion';
import { Container, Flex, Heading, Image, LargeCircle, SmallCircle } from 'quarks';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import useDarkMode from 'contexts/ThemeProvider';

import type { WorkRecord } from 'graphql/generatedTypes';
import type { FC } from 'react';

const TechStack = lazy(() => import('components/TechStack/TechStack'));

const WorkHero: FC<WorkRecord> = ({ title, subtitle, bannerImage, techStack }) => {
  const [isDark] = useDarkMode();

  return (
    <>
      <StandardFadeIn>
        <LargeCircle position="absolute" right="20%" top="-800px" />
      </StandardFadeIn>
      <m.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ x: { type: 'spring', duration: 2, bounce: 0.6 }, opacity: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <Heading
          as="h2"
          textStyle="xxl"
          fontSize={60}
          marginBottom={12}
          lineHeight={44}
          sm={{ fontSize: 72, lineHeight: 56 }}
          md={{ fontSize: 96, lineHeight: 72 }}
          lg={{ lineHeight: 56 }}
        >
          {title}
        </Heading>
        {subtitle && (
          <Heading
            as="h3"
            fontFamily="primaryFont"
            textStyle="md"
            fontWeight={isDark ? 'light' : 'regular'}
            textColor={{ light: 'gray-900', dark: 'gray-500' }}
          >
            {subtitle}
          </Heading>
        )}
      </m.div>
      <Flex
        as="section"
        flexDirection="column"
        gap="32px"
        lg={{ flexDirection: 'row-reverse', justifyContent: 'center', gap: '128px' }}
        marginY={48}
      >
        {bannerImage && (
          <Container
            marginX="auto"
            position="relative"
            width="100%"
            maxWidth="650px"
            aspectRatio={[1, 1]}
            lg={{ marginAll: 0 }}
          >
            <Image src={bannerImage?.url} alt={bannerImage?.alt || ''} loading="eager" layout="fill" />
          </Container>
        )}
        {techStack && <TechStack techs={techStack} />}
      </Flex>
      <SmallCircle position="absolute" right="-400px" top="450px" opacity={0.3} />
    </>
  );
};

export default WorkHero;
