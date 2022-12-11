import type { FileField } from 'graphql/generatedTypes';
import type { FC } from 'react';

interface ISeo {
  title?: string;
  description?: string;
  slug?: string;
  image?: FileField;
  type?: string;
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
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:type" content={metaType} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={metaImageAlt} />
      <meta property="og:title" content={metaTitle} />
      <meta name="og:url" content={`https://www.justinwallace.dev/${slug}`} />
      {children}
    </>
  );
};

export default SEO;
