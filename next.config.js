/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  swcMinify: true,
  images: {
    domains: ['asset.cloudinary.com'],
  },
}

module.exports = nextConfig
