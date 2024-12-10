/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && { output: 'export' }),
  ...(isProd && { basePath: '/my-website', }),
  trailingSlash: true,
  images: {
    unoptimized: true, 
    loader: 'default',
    path: '/my-website/',
  },
};

module.exports = nextConfig;
