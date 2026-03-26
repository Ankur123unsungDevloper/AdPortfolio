/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Adportfolio',
  assetPrefix: '/Adportfolio/',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/AdProtfolio' : '',
  },
};

module.exports = nextConfig;