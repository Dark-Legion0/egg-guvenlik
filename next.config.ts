import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Use webpack for build (not turbopack - more stable for static export)
  experimental: {},
};

export default nextConfig;
