import { lazy } from 'react';

import Head from 'next/head';
import { Container, Dots, Flex, Heading } from 'quarks';
import WorkHero from 'templates/Work/WorkHero';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import SEO from 'components/SEO/SEO';

import type { WorkRecord } from 'graphql/generatedTypes';
import type { FC } from 'react';

const SmallCard = lazy(() => import('components/cards/SmallCard/SmallCard'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Slider = lazy(() => import('components/Slider/Slider'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

const WorkPageTemplate: FC<WorkRecord> = props => {
  const { heading, ctas, body, information, slider, seo, slug } = props;

  return (
    <>
      <Head>
        <title>JW Dev{seo?.title && ` | ${seo.title}`}</title>
        <SEO {...seo} slug={slug} />
      </Head>
      <Container
        as="main"
        maxWidth="1440px"
        paddingY={32}
        paddingX={16}
        contain="layout"
        marginX="auto"
        lg={{ paddingX: 32, paddingY: 64 }}
      >
        <WorkHero {...props} />
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {heading && (
            <StandardFadeIn>
              <Container as="section" marginY={48}>
                <Heading as="h3">{heading}</Heading>
                <StructuredTextParser
                  textColor={{ dark: 'gray-500', light: 'purple-900' }}
                  text={body}
                  marginTop={16}
                />
              </Container>
            </StandardFadeIn>
          )}
          {ctas && (
            <Flex justifyContent="center" gap="32px" marginY={48}>
              {ctas.map(cta => (
                <SmallCard key={cta.title} {...cta} />
              ))}
            </Flex>
          )}
        </Container>
        <Dots position="absolute" transform="rotate(45deg)" top="1000px" left="-270px" md={{ left: '-400px' }} />
        <Slider cards={slider} />
        <Container maxWidth="1100px" paddingX={16} lg={{ marginX: 'auto', paddingX: 32 }}>
          {information && (
            <Container as="section">
              <StructuredTextParser text={information} marginTop={16} />
            </Container>
          )}
        </Container>
      </Container>
      <Footer size={50} />
    </>
  );
};

export default WorkPageTemplate;
