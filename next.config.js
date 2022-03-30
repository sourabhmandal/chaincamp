/** @type {import('next').NextConfig} */


const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);


const nextConfig = withTM({
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.json"
  },
  images: {
    domains: ['tailwindui.com', "images.unsplash.com", "shuffle.dev", "lh3.googleusercontent.com"],
  },
})

module.exports = nextConfig
