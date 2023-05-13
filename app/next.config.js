/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
