/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['./public'],
  webpackFinal: async config => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    assetRule.exclude = /\.svg$/;
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('src/')];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
    };
  },
  features: { emotionAlias: false, postcss: false },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
