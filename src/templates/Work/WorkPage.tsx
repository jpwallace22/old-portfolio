import { lazy } from 'react';

import { Container, Dots, Flex, Heading, Paragraph } from 'quarks';
import WorkHero from 'templates/Work/WorkHero';

import StandardFadeIn from 'molecules/StandardFadeIn/StandardFadeIn';

import SEO from 'components/SEO/SEO';

import type { WorkPageProps } from 'pages/projects/[id]';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const SmallCard = lazy(() => import('components/cards/SmallCard/SmallCard'));
const Footer = lazy(() => import('components/Footer/Footer'));
const Slider = lazy(() => import('components/Slider/Slider'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

const WorkPageTemplate: FC<WorkPageProps> = props => {
  const { heading, ctas, body, information, slider, seo, slug, bannerImage, nextWork } = props;

  return (
    <>
      <SEO {...seo} image={seo?.image || bannerImage} slug={slug} />
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
        <Container maxWidth="1100px" paddingX={16} marginBottom={128} lg={{ marginX: 'auto', paddingX: 32 }}>
          {information && (
            <Container as="section">
              <StructuredTextParser text={information} marginTop={16} />
            </Container>
          )}
        </Container>
        {nextWork ? (
          <AlternatingSwitchbacks heading="Next Project" paddingX={16} cards={[nextWork]} />
        ) : (
          <Flex flexDirection="column" gap="16px" alignItems="center">
            <Heading as="h3">This is the last project!</Heading>
            <Paragraph textColor={{ dark: 'gray-500', light: 'purple-900' }}>
              Did you look at ALL of them? I think you HAVE to contact me now...👇
            </Paragraph>
          </Flex>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default WorkPageTemplate;
