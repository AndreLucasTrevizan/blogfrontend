import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  env: {
    apiUrl: 'http://localhost:3333',
    dateLang: 'pt-br'
  }
};

export default nextConfig;
