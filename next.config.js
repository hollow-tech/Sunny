/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      issuer: /\.[jt]sx$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              removeViewBox: false,
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
