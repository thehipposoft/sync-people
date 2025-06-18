/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Optional: disables PWA in dev mode
});

const nextConfig = {
    images: {
      domains: [
        "localhost",
        "placehold.co",
        "admin.insyncx.co",
        "admin.insyncx.com",
        "insyncx.co",
        "res.cloudinary.com",
      ],
    },
  };

module.exports = withPWA(nextConfig);
