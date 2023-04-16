import React, { lazy } from 'react';

import Section from 'molecules/Section/Section';

import StaticScrollerSwitchback from 'components/StaticScrollerSwitchback/StaticScrollerSwitchback';

import getSectionInfo from 'utils/getSectionInfo';

import type { PageGeneratorModelComponentsField } from 'graphql/types.gen';
import type { FC } from 'react';

const FeaturedBlogs = lazy(() => import('components/FeaturedBlogs/FeaturedBlogs'));
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
      case 'ScrollingSwitchbackRecord':
        return <StaticScrollerSwitchback {...component} />;
      case 'CarouselRecord':
        return <Carousel {...component} />;
      case 'SwitchbackRecord':
        return <Switchback {...component} />;
      case 'BlogListingRecord':
        return <BlogListing {...component} />;
      case 'FeaturedBlogRecord':
        return <FeaturedBlogs {...component} />;
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
