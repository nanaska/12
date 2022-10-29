/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  swcMinify: true,
  images: {
    domains: ['fikiwiki.com'],
  },
}

module.exports = nextConfig
