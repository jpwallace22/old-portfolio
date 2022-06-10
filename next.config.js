module.exports = {
  images: {
    domains: ['localhost', 'justinwallace.dev'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
