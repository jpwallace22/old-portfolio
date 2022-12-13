import type { FileField } from 'graphql/generatedTypes';
import type { Maybe } from 'graphql/jsutils/Maybe';
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
   * used to create the `og:url`
   */
  slug?: Maybe<string>;
  /**
   * `og:image`
   */
  image?: Maybe<FileField>;
  /**
   * `og:type` defaults to `website` use `article` for blog posts
   */
  type?: Maybe<string>;
  /**
   * to add extra meta tags not included in base SEO
   */
  children?: JSX.IntrinsicElements['meta'];
}

const SEO: FC<ISeo> = ({ description, title, image, slug, type, children }) => {
  const metaDesc =
    description ||
    'This is the personal site and portfolio of Justin Wallace. Here I showcase some works and the progress of my career. I also write about dev-related experiences.';
  const metaTitle = title || 'Justin Wallace Development';
  const metaImage = image?.url || 'https://www.datocms-assets.com/85391/1670693320-jwdev.webp';
  const metaImageAlt = image?.alt || 'The dark mode style tile of Justin Wallace Development';
  const metaType = type || 'website';

  return (
    <>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content={metaType} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={metaImageAlt} />
      <meta name="og:url" content={`https://www.justinwallace.dev/${slug}`} />
      {children}
    </>
  );
};

export default SEO;
