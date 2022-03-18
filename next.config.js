/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.json"
  },
  images: {
    domains: ['tailwindui.com', "images.unsplash.com"],
  },
}

module.exports = nextConfig
