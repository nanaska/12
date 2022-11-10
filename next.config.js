/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', "asset.cloudinary.com", "fikiwik"],
  },
}

module.exports = nextConfig
