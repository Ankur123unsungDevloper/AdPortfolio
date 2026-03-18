/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static HTML export
  basePath: '/AdProtfolio', // must match your repo name exactly
  images: {
    unoptimized: true,     // GitHub Pages can't optimize images server-side
  },
}

module.exports = nextConfig