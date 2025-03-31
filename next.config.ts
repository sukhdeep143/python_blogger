/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // Adjust the port if needed
        pathname: '/uploads/**', // Allow images from the uploads folder
      },
    ],
  },
};

module.exports = nextConfig;
