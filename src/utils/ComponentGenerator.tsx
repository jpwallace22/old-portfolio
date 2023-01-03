import React, { lazy } from 'react';

import Section from 'molecules/Section/Section';

import getSectionInfo from 'utils/getSectionInfo';

import type { PageGeneratorModelComponentsField } from 'graphql/types.gen';
import type { FC } from 'react';

const AlternatingSwitchbacks = lazy(() => import('components/AlternatingSwitchbacks/AlternatingSwitchbacks'));
const Carousel = lazy(() => import('components/Carousel/Carousel'));
const Switchback = lazy(() => import('components/Switchback/Switchback'));

interface IComponentGenerator {
  components?: PageGeneratorModelComponentsField[];
}

const ComponentGenerator: FC<IComponentGenerator> = ({ components }) => {
  if (!components || components.length < 0) return null;

  const componentChecker = (component: PageGeneratorModelComponentsField) => {
    switch (component.__typename) {
      case 'AlternatingSwitchbackRecord':
        return <AlternatingSwitchbacks {...component} />;
      case 'CarouselRecord':
        return <Carousel {...component} />;
      case 'SwitchbackRecord':
        return <Switchback {...component} />;
      default:
        return null;
    }
  };

  return (
    <>
      {components.map(component => {
        const { sectionId, backgroundColor } = getSectionInfo(component);

        return (
          <Section id={sectionId} key={component.id} backgroundColor={backgroundColor}>
            {componentChecker(component)}
          </Section>
        );
      })}
    </>
  );
};

export default ComponentGenerator;
