import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')()(nextConfig)
  : nextConfig;