/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  experimental: {
    appDir: true,
  },
  async middleware() {
    return [
      {
        source: '/(.*)',
        destination: '/middleware',
        permanent: false,
      },
    ];
  },
};