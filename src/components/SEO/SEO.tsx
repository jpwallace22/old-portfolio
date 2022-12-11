import React from 'react';

import type { FileField } from 'graphql/generatedTypes';
import type { FC } from 'react';

interface ISeo {
  title: string;
  description: string;
  image: FileField;
}

const SEO: FC<ISeo> = ({ description, title, image }) => {
  const metaDesc =
    description ||
    'This is the personal site and portfolio of Justin Wallace. Here I showcase some works and the progress of my career. I also write about dev-related experiences.';
  const metaTitle = title || 'Justin Wallace Development';
  const metaImage = image?.url || 'https://www.datocms-assets.com/85391/1670693320-jwdev.webp';

  return (
    <>
      <meta name="description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:title" content={metaTitle} />
      <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
    </>
  );
};

export default SEO;
