import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95, 100],
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      // Ensure /favicon.ico resolves to a valid asset to avoid route conflicts
      { source: '/favicon.ico', destination: '/favicon.png' },
    ];
  },
  // experimental: {
  //   optimizePackageImports: ['@/components'],
  // },
};

export default nextConfig;