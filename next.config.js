/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com', 'giphy.com'],
  },
};

module.exports = nextConfig;
