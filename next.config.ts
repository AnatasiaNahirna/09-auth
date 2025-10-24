import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'ac.goit.global'
    }]
  }
};

export default nextConfig;
