import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ enable static export
  images: {
    unoptimized: true, // ✅ disable optimization for static export
    domains: ['cdn.imagin.studio'], // keep your CDN whitelist
  },
};

export default nextConfig;
