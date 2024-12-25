import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    path: "/"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
