import { lazy } from 'react';

import sdk from 'graphql/datoCmsGqlClient';

import type { AlternatingSwitchbackRecord, WorkRecord } from 'graphql/types.gen';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

const WorkPageTemplate = lazy(() => import('templates/Work/WorkPage'));

export interface WorkPageProps extends WorkRecord {
  nextWork?: WorkRecord;
}

// Create paths
export const getStaticPaths: GetStaticPaths<WorkRecord['id']> = async () => {
  const { allWorks } = await sdk.WorkPageSlugs();

  const paths = allWorks.map(work => ({
    params: { id: work.slug },
  }));

  return { paths, fallback: false };
};

// Query Data
export const getStaticProps: GetStaticProps<WorkPageProps, { id: string }> = async ({ params }) => {
  const slug = params?.id;
  const data = await sdk.WorkPageData({ slug });

  // Get the next work in line from the homepage
  const workList = data.pageGenerator?.components.filter(
    comp => comp.__typename === 'AlternatingSwitchbackRecord',
  )[0] as AlternatingSwitchbackRecord | undefined;
  const currentWork = workList?.cards?.filter(card => card.slug === slug)[0];
  const nextWork = (currentWork && workList?.cards[workList?.cards.indexOf(currentWork) + 1]) || null;

  return {
    props: { ...data.work, nextWork } as WorkPageProps,
  };
};

const Work: FC<WorkRecord> = props => <WorkPageTemplate {...props} />;

export default Work;
