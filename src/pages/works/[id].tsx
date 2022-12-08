import { lazy } from 'react';

import request from 'graphql/datocms';
import { workFrag } from 'graphql/fragments';

import type { WorkRecord } from 'graphql/generatedTypes';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';

const WorkPageTemplate = lazy(() => import('templates/Work/WorkPage'));

export const getStaticPaths: GetStaticPaths = async () => {
  const SLUG_QUERY = `
    query {
      allWorks {
        slug
      }
    }
  `;

  const data = await request({
    query: SLUG_QUERY,
  });

  const paths = data.allWorks.map((work: { slug: string }) => ({
    params: { id: work.slug },
  }));

  return { paths, fallback: false };
};

const Work: FC<WorkRecord> = props => <WorkPageTemplate {...props} />;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const QUERY = `
    query workQuery($slug: String) {
      work(filter: { slug: { eq: $slug } }) {
        ...workFrag
      }
    }
    ${workFrag}
  `;

  const data = await request({
    query: QUERY,
    variables: {
      slug: slug as string,
    },
  });

  return {
    props: data.work,
  };
};

export default Work;
