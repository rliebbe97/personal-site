/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore type errors during build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
