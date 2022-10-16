/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['fikiwiki.com'],
  },
}

module.exports = nextConfig
