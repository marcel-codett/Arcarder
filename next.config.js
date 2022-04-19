/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
webpack: (config, { webpack }) => {
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /.*/,
      contextRegExp: /__tests__/,
    })
  );
  return config;
},
  (module.exports = nextConfig);
