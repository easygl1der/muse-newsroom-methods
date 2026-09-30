import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/muse/a",
  assetPrefix: "/muse/a",
  allowedDevOrigins: ["127.0.0.1", "0.0.0.0", "localhost"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
