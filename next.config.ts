import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  env: {
    apiUrl: 'https://elegant-achievement-production.up.railway.app'
  }
};

export default nextConfig;
