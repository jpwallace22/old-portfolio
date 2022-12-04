/* eslint-disable @typescript-eslint/no-var-requires */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});
module.exports = {
  images: {
    domains: ['localhost', 'justinwallace.dev', 'www.datocms-assets.com'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  redirects: async () => [
    {
      source: '/resume',
      destination: '/resume.pdf',
      permanent: true,
    },
  ],
};
