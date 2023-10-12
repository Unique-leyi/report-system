/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },

    images: {
      domains: [
          'localhost',
          'api.reportsystem.vercel.app',
          'res.cloudinary.com',
      ]
    }
  };
  
  module.exports = nextConfig;
  