/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
        
      },
      {
        protocol: 'https',
        hostname: 'python-backend-2sqb.onrender.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
