/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.har/,
      use: [
        {
          loader: "./config/transformers/json-transformer.js",
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
