import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    '@zenixui/core',
    '@zenixui/react',
    '@zenixui/components',
    '@zenixui/blueprints',
    '@zenixui/pack-zenix',
    '@zenixui/pack-ocean',
    '@zenixui/pack-midnight',
    '@zenixui/pack-autumn',
  ]
};

export default nextConfig;
