/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/AdPortfolio' : '',
  assetPrefix: isProd ? '/AdPortfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/AdPortfolio' : '',
  },
};

module.exports = nextConfig;