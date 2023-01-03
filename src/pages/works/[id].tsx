import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';

import type { WorkRecord } from 'graphql/types.gen';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

const WorkPageTemplate = lazy(() => import('templates/Work/WorkPage'));

// Create paths
export const getStaticPaths: GetStaticPaths<WorkRecord['id']> = async () => {
  const { allWorks } = await sdk.WorkPageSlugs();

  const paths = allWorks.map(work => ({
    params: { id: work.slug },
  }));

  return { paths, fallback: false };
};

// Query Data
export const getStaticProps: GetStaticProps<WorkRecord, { id: string }> = async ({ params }) => {
  const slug = params?.id;

  const data = await sdk.WorkPageData({ slug });

  return {
    props: data.work as WorkRecord,
  };
};

const Work: FC<WorkRecord> = props => <WorkPageTemplate {...props} />;

export default Work;
