/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'shuffle.dev',
      'lh3.googleusercontent.com'
    ]
  }
};

module.exports = nextConfig;
