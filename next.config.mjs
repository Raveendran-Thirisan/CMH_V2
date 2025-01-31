// next.config.mjs

const nextConfig = {
  // reactStrictMode: true,
};

const webpackDevMiddleware = (config) => {
  config.watchOptions = {
    poll: 1000,
    aggregateTimeout: 300,
  };
  return config;
};

export { nextConfig, webpackDevMiddleware };
