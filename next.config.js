/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensures page build works correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/trendyelectrical' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/trendyelectrical' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to pages (needed for GitHub Pages)a
  trailingSlash: true,
  // For TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // For ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig 