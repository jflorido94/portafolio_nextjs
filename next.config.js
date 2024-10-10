/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,};

    return config;
  },
}

module.exports = nextConfig

module.exports = {
  experimental: {
    appDir: true,
  },
  async middleware() {
    return [
      {
        source: '/(.*)',
        destination: '@/config/middleware',
        permanent: false,
      },
    ];
  },
};