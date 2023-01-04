import Head from 'next/head';

import type { Maybe } from 'graphql/jsutils/Maybe';
import type { FileField } from 'graphql/types.gen';
import type { FC } from 'react';

interface ISeo {
  /**
   * acts as `title` tag and `og:title`
   */
  title?: Maybe<string>;
  /**
   * acts as `description` tag and `og:description`
   */
  description?: Maybe<string>;
  /**
   * `og:image`
   */
  image?: Maybe<FileField>;
  /**
   * `og:type` defaults to `website` use `article` for blog posts
   */
  type?: Maybe<string>;
  slug?: string | null;
}

const SEO: FC<ISeo> = ({ description, title, image, type, slug }) => {
  const metaDesc =
    description ||
    'This is the personal site and portfolio of Justin Wallace. Here I showcase some works and the progress of my career. I also write about dev-related experiences.';
  const metaTitle = title || 'Development';
  const metaImage = image?.url || 'https://www.datocms-assets.com/85391/1670693320-jwdev.webp';
  const metaImageAlt = image?.alt || 'The dark mode style tile of Justin Wallace Development';
  const metaType = type || 'website';

  return (
    <Head>
      <title>{`Justin Wallace ${metaTitle ? `| ${metaTitle}` : ''}`}</title>
      <meta key="desc" name="description" content={metaDesc} />
      <meta key="ogTitle" property="og:title" content={metaTitle} />
      <meta key="ogUrl" property="og:url" content={`https://www.justinwallace.dev/${slug || ''}`} />
      <meta key="ogDesc" property="og:description" content={metaDesc} />
      <meta key="ogType" property="og:type" content={metaType} />
      <meta key="ogImage" property="og:image" content={metaImage} />
      <meta key="ogImageAlt" property="og:image:alt" content={metaImageAlt} />
    </Head>
  );
};

export default SEO;
