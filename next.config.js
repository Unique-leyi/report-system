/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },

    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['bcrypt', 'fs'],
    },

    webpack: (config) => {
        config.externals = [...config.externals, 'bcrypt', 'fs'];
        return config;
    },
  };
  
  module.exports = nextConfig;
  