import request from 'datocms';
import { gql } from 'graphql-request';
import { workFrag } from 'graphql/fragments';
import { WorkRecord } from 'graphql/generatedTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import WorkPageTemplate from 'templates/Work/WorkPage';

export const getStaticPaths: GetStaticPaths = async () => {
  const SLUG_QUERY = gql`
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

  const QUERY = gql`
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
