import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "people.pic1.co",
      },
      {
        protocol: "https",
        hostname: "app-uploads-cdn.fera.ai",
      },
      {
        protocol: "https",
        hostname: "ycnswxbrngvqgibeqyno.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
    ],
  },
};

export default nextConfig;
