/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'static.djangoproject.com'],
    unoptimized: false,
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
