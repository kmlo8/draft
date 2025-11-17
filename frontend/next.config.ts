import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence workspace root inference warning by explicitly setting Turbopack root
  turbopack: {
    root: path.resolve(__dirname)
  }
};

export default nextConfig;
