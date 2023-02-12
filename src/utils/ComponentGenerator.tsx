import React, { lazy } from 'react';

import Section from 'molecules/Section/Section';

import getSectionInfo from 'utils/getSectionInfo';

import type { PageGeneratorModelComponentsField } from 'graphql/types.gen';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Carousel = lazy(() => import('components/Carousel/Carousel'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));
const BlogListing = lazy(() => import('components/BlogListing/BlogListing'));

interface IComponentGenerator {
  components?: PageGeneratorModelComponentsField[];
}

const ComponentGenerator: FC<IComponentGenerator> = ({ components }) => {
  if (!components || !components.length) return null;

  const componentChecker = (component: PageGeneratorModelComponentsField) => {
    switch (component.__typename) {
      case 'AlternatingSwitchbackRecord':
        return <AlternatingSwitchbacks {...component} />;
      case 'CarouselRecord':
        return <Carousel {...component} />;
      case 'SwitchbackRecord':
        return <Switchback {...component} />;
      case 'BlogListingRecord':
        return <BlogListing {...component} />;
      default:
        return null;
    }
  };

  return (
    <>
      {components.map(component => {
        const { sectionId, backgroundColor } = getSectionInfo(component);

        return (
          <Section key={component.id} id={sectionId} backgroundColor={backgroundColor}>
            {componentChecker(component)}
          </Section>
        );
      })}
    </>
  );
};

export default ComponentGenerator;
