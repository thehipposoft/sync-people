/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Optional: disables PWA in dev mode
});

const nextConfig = {
    turbopack: {},
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
        },
        {
          protocol: "https",
          hostname: "localhost",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
        {
          protocol: "https",
          hostname: "admin.insyncx.co",
        },
        {
          protocol: "https",
          hostname: "admin.insyncx.com",
        },
        {
          protocol: "https",
          hostname: "insyncx.co",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "api.qrserver.com",
        },
      ],
    },
  };

module.exports = withPWA(nextConfig);
