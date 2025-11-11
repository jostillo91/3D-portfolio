/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/3D-portfolio',
  assetPrefix: '/3D-portfolio',
}

module.exports = nextConfig

