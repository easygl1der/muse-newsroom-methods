import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "0.0.0.0", "localhost"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
