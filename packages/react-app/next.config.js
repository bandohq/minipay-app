/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  images: {
    domains: ['cdn-production-opera-website.operacdn.com'],
  },
};

module.exports = nextConfig;
