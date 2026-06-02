import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Fixes "multiple lockfiles detected" warning and ensures correct file tracing on Vercel/Netlify
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
