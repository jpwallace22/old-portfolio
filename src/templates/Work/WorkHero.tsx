import { LazyMotion, domAnimation, m as motion } from 'framer-motion';

import { LargeCircle, SmallCircle } from 'quarks/DesignElements';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import type { TechStackProps } from 'components/TechStack/TechStack';
import TechStack from 'components/TechStack/TechStack';

import useDarkMode from 'contexts/ThemeProvider';

import type { WorkRecord } from 'graphql/generatedTypes';
import type { FC } from 'react';

const WorkHero: FC<WorkRecord> = ({ title, subtitle, bannerImage, techStack }) => {
  const [isDark] = useDarkMode();
  const tempTechStack = techStack.map(tech => tech.title);

  return (
    <LazyMotion features={domAnimation}>
      <StandardFadeIn>
        <LargeCircle position="absolute" right="20%" top="-800px" />
      </StandardFadeIn>
      <motion.div
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
      </motion.div>
      <Flex
        as="section"
        flexDirection="column"
        gap="32px"
        lg={{ flexDirection: 'row-reverse', justifyContent: 'center', gap: '128px' }}
        marginY={48}
      >
        {bannerImage && (
          <Image
            src={bannerImage?.url}
            alt={bannerImage?.alt || ''}
            height={650}
            width={650}
            marginX="auto"
            maxWidth="80%"
            loading="eager"
            lg={{ marginAll: 0 }}
          />
        )}
        {techStack && <TechStack icons={tempTechStack as TechStackProps['icons']} />}
      </Flex>
      <SmallCircle position="absolute" right="-400px" top="450px" opacity={0.3} />
    </LazyMotion>
  );
};

export default WorkHero;