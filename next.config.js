/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', '@headlessui/react'],
  },
  output: 'standalone',
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
};

module.exports = nextConfig; 